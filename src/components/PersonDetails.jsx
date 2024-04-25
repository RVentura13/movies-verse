import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import moment from "moment";

import { getDataCombined, getDetails } from "../helpers/getData";
import { NavBar } from "./NavBar";
import { GridContent } from "./GridContent";

export const PersonDetails = () => {
  const [person, setPerson] = useState([]);
  const [dataCombined, setDataCombined] = useState([]);

  const { id, media_type } = useParams();

  const fetchData = async () => {
    const data = await getDetails(id, media_type);
    setPerson(data);
  };
  const fetchDataCombined = async () => {
    const dataCombined = await getDataCombined(id);
    setDataCombined(dataCombined);
  };

  useEffect(() => {
    fetchData();
    fetchDataCombined();
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="mt-28 m-auto w-[80%]">
        {person.map((per, index) => (
          <div key={index} className="flex gap-5 justify-center items-start">
            <img
              className="rounded-lg"
              width="250px"
              src={`https://image.tmdb.org/t/p/w500${per.profile_path}`}
              alt="Poster"
            />
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#eee] text-xl">{per.name}</h2>
              <h3 className="text-[#eee] text-xl">{`${moment(
                per.birthday
              ).format("DD/MM/YYYY")} `}</h3>
              <h3 className="text-[#eee] text-xl">{per.place_of_birth}</h3>
              <h2 className="text-[#eee] text-xl">{per.biography}</h2>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-[repeat(auto-fill,230px)] gap-4">
          {dataCombined.map((per, index) => (
            <Link to={`/person/${per.id}`} key={index}>
              <GridContent
                poster_path={per.poster_path}
                vote_average={per.vote_average}
                release_date={per.release_date}
                first_air_date={per.first_air_date}
                title={per.title}
                name={per.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
