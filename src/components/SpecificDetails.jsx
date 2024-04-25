import moment from "moment";
import { BiTime, BiCalendar } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { PercentageSvg } from "./PercentageSvg";

export const SpecificDetails = ({
  title,
  name,
  vote_average,
  release_date,
  first_air_date,
  runtime,
  number_of_seasons,
  number_of_episodes,
  original_language,
  genres,
  tagline,
  overview,
}) => {
  return (
    <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-5 w-full">
      {title !== undefined ? (
        <h1 className="text-[40px] text-center lg:text-[40px] text-[#eee]">
          {title}
        </h1>
      ) : (
        <h1 className="text-[40px] text-center lg:text-[40px] text-[#eee]">
          {name}
        </h1>
      )}

      <div className="flex flex-col justify-center items-center lg:items-start lg:justify-center lg:gap-3 gap-5 w-full">
        <div className="flex justify-center items-center gap-4">
          <PercentageSvg
            width={50}
            height={50}
            percentage={parseFloat(vote_average * 10).toFixed(0)}
          />
          <div className="flex flex-col justify-center items-start">
            {release_date === undefined ? (
              <p className="flex justify-center items-center gap-2 text-lg text-[#eee]">
                <BiCalendar size={20} />
                {`${moment(first_air_date).format("DD/MM/YYYY")} `}
              </p>
            ) : (
              <p className="flex justify-center items-center gap-2 text-lg text-[#eee]">
                <BiCalendar size={20} />
                {`${moment(release_date).format("DD/MM/YYYY")} `}
              </p>
            )}

            {runtime === undefined ? (
              <p className=" flex justify-center items-center gap-2 text-lg text-[#eee] ">
                <BiTime size={20} />
                {`${number_of_seasons} Temporadas / ${number_of_episodes} Episodios`}
              </p>
            ) : (
              <p className=" flex justify-center items-center gap-2 text-lg text-[#eee] ">
                <BiTime size={20} />
                {` ${(runtime - (runtime % 60)) / 60} h ${runtime % 60} m`}
              </p>
            )}
          </div>
          <p className="flex px-4 justify-center items-center border-2 gap-2 rounded-lg text-[#eee] text-[14px]">
            <FaLanguage size={30} />
            {original_language.toUpperCase()}
          </p>
        </div>

        <div className="flex justify-start items-center flex-wrap gap-4 mt-2 ">
          {genres.map((gen, index) => (
            <p
              key={index}
              className="text-[#eee] text-md bg-[#d9254c] rounded-3xl border-2 py-1 px-5"
            >
              {gen.name}
            </p>
          ))}
        </div>
      </div>
      <div className="my-5 flex flex-col min-w-[200px]">
        {tagline !== "" && (
          <h3 className="text-xl text-[#eee] mb-5">{`"${tagline}"`}</h3>
        )}
        <p className="text-lg text-[#eee] mt-2">{overview}</p>
      </div>
    </div>
  );
};
