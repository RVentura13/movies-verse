import { useEffect, useState } from "react";
import { getCast } from "../helpers/getData";
import { ProfileCast } from "./ProfileCast";

export const Cast = ({ id, media_type }) => {
  const [cast, setCast] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getCast(id, media_type);
      setCast(newData[0]);
    };

    fetchData();
  }, []);
  return (
    <div
      className={`flex overflow-x-auto gap-8 justify-start scroll-bar items-center pb-5 w-full ${
        show ? "fade-in" : "fade-out"
      }`}
    >
      {cast.slice(0, 15).map((c, index) => (
        <ProfileCast
          key={index}
          id={c.id}
          name={c.name}
          character={c.character}
          profile_path={c.profile_path}
        />
      ))}
    </div>
  );
};
