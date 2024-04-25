import React, { useEffect, useContext, useState } from "react";
import { Contexto } from "../context/Context";
import { Selecter } from "./Selecter";
import { Carousel } from "./Carousel";
import { getData } from "../helpers/getData";
import { Link } from "react-router-dom";

export const SliderContainer = ({ title, typeList, option1, option2 }) => {
  const [movies, setMovies] = useState([]);
  const [typeOfList, setTypeOfList] = useState(typeList);

  const { listOf, setListOf } = useContext(Contexto);
  const { timeTend, setTimeTend } = useContext(Contexto);

  const FetchMovies = async () => {
    const newMovies = await getData(typeOfList, timeTend, listOf);
    if (newMovies.length === 0) {
      const error = [{ error: "Error al cargar la información" }];
      setMovies(error);
    } else {
      setMovies(newMovies);
    }
  };

  useEffect(() => {
    FetchMovies();
  }, [listOf, timeTend]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 mt-6 mb-4 w-[80%] m-auto">
        <div className="flex flex-col md:flex-row justify-start items-center gap-5">
          <h2 className="text-[#eee] text-xl md:text-4xl font-bold">{title}</h2>

          <Selecter option={typeOfList} option1={option1} option2={option2} />
        </div>
        <Link to="/peliculas">
          <p className="md:block hidden hover:text-[#0f172a] duration-150 text-2xl text-[#eee] ease-linear px-2 rounded-lg hover:bg-[#eee]">
            Ver más
          </p>
        </Link>
      </div>

      <Carousel data={movies} listOf={listOf} />
    </>
  );
};
