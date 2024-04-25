import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getDetails } from "../helpers/getData";

export const ProfileCast = ({
  id,
  name,
  character,
  profile_path,
  media_type = "person",
}) => {
  const [person, setPerson] = useState([]);
  const [overlay, setOverlay] = useState(false);

  const handleMouseEnter = () => {
    setOverlay(true);
  };
  const handleMouseLeave = () => {
    setOverlay(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(id, media_type);
      setPerson(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {!overlay ? (
        profile_path && (
          <div className="flex flex-col justify-start items-center min-w-[150px] h-[300px] overflow-hidden rounded-lg duration-150 ease-linear ">
            <div
              className="relative container-cast"
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              key={id}
            >
              <img
                className="rounded-lg"
                width="150px"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt=""
              />
            </div>
            <p className="text-[#eee] text-center text-md mt-2 font-semibold max-w-[150px]">
              {name}
            </p>
            <p className="text-[#eee] text-center text-sm mt-1 opacity-70">
              {character}
            </p>
          </div>
        )
      ) : (
        <div className="flex justify-center items-start gap-1 min-w-[150px] w-[150px]  h-[300px] duration-150 ease-linear">
          {person.map((per, index) => (
            <div
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              className="flex flex-col gap-1 items-center justify-center relative container-cast"
              key={index}
            >
              <Link to={`/person/${per.id}`}>
                <div className="flex flex-col gap-1 justify-center overflow-hidden items-center relative container-cast ">
                  <img
                    width="150px"
                    className="rounded-lg hover:scale-110 duration-150 ease-linear "
                    src={`https://image.tmdb.org/t/p/w500${per.profile_path}`}
                    alt=""
                  />
                  <p className="overlay absolute flex flex-col justify-center items-center text-center top-0 left-0 bg-[#0f172a] opacity-0 w-full h-full pointer-events-none text-lg font-semibold text-[#eee] duration-150 ease-linear">
                    <span className="text-sm font-normal text-[#eee]">
                      Más información
                    </span>
                  </p>
                </div>
              </Link>
              <div className="flex flex-col gap-1 justify-center items-center ">
                <div>
                  <p className="text-[#eee] text-center text-sm">{per.name}</p>
                  {per.birthday !== null && (
                    <p className="text-[#eee] text-center text-sm">
                      {`${moment(per.birthday).format("DD/MM/YYYY")} `}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
