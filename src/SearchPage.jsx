import { useParams } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { getDataSearch } from "./helpers/getData";
import { useEffect, useState } from "react";
import { GridContent } from "./components/GridContent";
import { Spinner } from "./components/Spinner";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  const fetchData = async () => {
    setLoading(true);
    const newData = await getDataSearch(query);
    setData(newData);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [query]);

  return (
    <>
      <NavBar />
      <h3 className="text-[#eee] text-3xl mt-28 w-[80%] m-auto">
        Resultado de busqueda por "{query}"
      </h3>
      {data.length === 0 ? (
        <div className="bg-[#1d2640] flex flex-col mt-10 px-5 pt-10 pb-10 m-auto w-[90%] rounded-xl gap-3 justify-center items-center">
          <h3 className="text-[#eee] text-2xl text-center">Sin resultados</h3>
          <p className="text-[#eee] text-lg text-center">
            No se encontraron coincidencias con la busqueda realizada
          </p>
          <p className="text-[#eee] text-lg text-center">
            Intenta realizar una nueva busqueda
          </p>
        </div>
      ) : (
        <div className="bg-[#1d2640] mt-5 mb-10 pb-10 m-auto w-[80%] rounded-xl grid grid-cols-[repeat(auto-fill,230px)] gap-3 justify-center items-start">
          {data.map((datos, index) =>
            datos.media_type === "person" ? (
              <Link to={`/person/${datos.id}`} key={index}>
                <GridContent
                  poster_path={datos.poster_path}
                  profile_path={datos.profile_path}
                  vote_average={datos.vote_average}
                  release_date={datos.release_date}
                  first_air_date={datos.first_air_date}
                  title={datos.title}
                  name={datos.name}
                />
              </Link>
            ) : (
              <Link to={`/details/${datos.media_type}/${datos.id}`} key={index}>
                <GridContent
                  poster_path={datos.poster_path}
                  profile_path={datos.profile_path}
                  vote_average={datos.vote_average}
                  release_date={datos.release_date}
                  first_air_date={datos.first_air_date}
                  title={datos.title}
                  name={datos.name}
                />
              </Link>
            )
          )}
          {loading && <Spinner />}
        </div>
      )}
      )
    </>
  );
};
