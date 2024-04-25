import { PercentageSvg } from "./PercentageSvg";
import moment from "moment/moment";

export const GridContent = ({
  poster_path,
  profile_path,
  vote_average,
  release_date,
  first_air_date,
  title,
  name,
}) => {
  if (vote_average === undefined) {
    vote_average = 0;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,230px)] gap-3 justify-center items-start mt-5 rounded-lg">
      <div className="relative flex flex-col gap-2 justify-start items-center fade-in">
        {profile_path ? (
          <img
            className="rounded-lg hover:scale-[101%] duration-300 linear fade-in h-full shadow-md shadow-[#0f172a] max-h-[340px] min-h-[340px] hover:shadow-[#4e5c77]"
            width="230px"
            height="340px"
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt="Poster"
          />
        ) : poster_path === null ||
          poster_path === undefined ||
          profile_path === null ? (
          <img
            className="rounded-lg hover:scale-[101%] duration-300 linear fade-in h-full shadow-md shadow-[#0f172a] max-h-[340px] min-h-[340px] hover:shadow-[#4e5c77]"
            width="230px"
            height="340px"
            src="/image-not-found.png"
            alt="Poster"
          />
        ) : (
          <img
            className="rounded-lg hover:scale-[101%] duration-300 linear fade-in h-full shadow-md shadow-[#0f172a] max-h-[340px] min-h-[340px] hover:shadow-[#4e5c77]"
            width="230px"
            height="340px"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="Poster"
          />
        )}

        {vote_average !== 0 && (
          <div className="absolute top-0 right-0">
            <PercentageSvg
              percentage={parseFloat(vote_average * 10).toFixed(0)}
              width={50}
              height={50}
            />
          </div>
        )}
        {release_date !== "" && (
          <div className="flex gap-4 justify-center items-center">
            {release_date === undefined ? (
              <p className="text-[#eee] text-sm  rounded-3xl border-1 shadow-text ">{`${moment(
                first_air_date
              ).format("DD/MM/YYYY")}`}</p>
            ) : (
              <p className="text-[#eee] text-sm  rounded-3xl border-1 shadow-text ">{`${moment(
                release_date
              ).format("DD/MM/YYYY")}`}</p>
            )}
          </div>
        )}
        {title === undefined ? (
          <p className="text-[#eee] text-center text-lg font-semibold shadow-text">
            {name}
          </p>
        ) : (
          <p className="text-[#eee] text-center text-lg font-semibold shadow-text">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};
