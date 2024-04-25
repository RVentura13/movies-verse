import { Link } from "react-router-dom";

import moment from "moment";
import { PercentageSvg } from "./PercentageSvg";

const url_image = "https://image.tmdb.org/t/p/w500";

let listado = "";
export const ItemSlider = ({
  id,
  url,
  title,
  vote_average,
  release_date,
  first_air_date,
  media_type,
  listOf,
}) => {
  media_type === undefined ? (listado = listOf) : (listado = media_type);

  return (
    <>
      <Link to={`/details/${listado}/${id}`}>
        <div className="relative rounded-lg w-[240px] h-[365px] max-h-[365px] min-w-[240px] m-auto">
          <img
            width="240px"
            height="365px"
            src={`${url_image}${url}`}
            alt={`${title}`}
            title={`${title}`}
            className="rounded-lg hover:scale-[101%] duration-300 linear shadow-lg shadow-[#0f172a]"
          />
          <div className="absolute top-0 right-0">
            <PercentageSvg
              percentage={parseFloat(vote_average * 10).toFixed(0)}
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-[#eee] text-sm  rounded-3xl border-1 ">
            {listado === "movie" ? "Película" : "Serie"}
          </p>
          {release_date === undefined ? (
            <p className="text-[#eee] text-sm  rounded-3xl border-1 ">{`${moment(
              first_air_date
            ).format("DD/MM/YYYY")}`}</p>
          ) : (
            <p className="text-[#eee] text-sm  rounded-3xl border-1 ">{`${moment(
              release_date
            ).format("DD/MM/YYYY")}`}</p>
          )}
        </div>
        <p className="text-center mt-1  text-[#eee] font-semibold text-xl px-8 shadow-text">
          {title}
        </p>
      </Link>
    </>
  );
};
