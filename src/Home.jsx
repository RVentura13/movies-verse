import { ContextProvider } from "./context/Context";

import { SliderContainer } from "./components/SliderContainer";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { getData } from "./helpers/getData";
import { NavBar } from "./components/NavBar";
import { Spinner } from "./components/Spinner";

export const Home = () => {
  document.title = "Movies-Verse";
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const typeOfList = "trending";
  const timeTend = "day";
  const listOf = "movie";

  useEffect(() => {
    const fetchData = async () => {
      const newImage = await getData(typeOfList, timeTend, listOf);

      setImage(newImage);
    };

    fetchData();
    setLoading(false);
  }, []);

  return (
    <>
      <ContextProvider>
        <NavBar />
        <div className="relative flex items-center justify-center w-full h-[350px]  ">
          {image.map(
            (imag, index) =>
              index === 0 && (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original${imag.backdrop_path}`}
                  alt="Imagen de fondo"
                  className="h-full w-full object-cover m-auto opacity-50"
                />
              )
          )}
          <div className="absolute top-24 sm:w-full flex flex-col justify-center items-center bg-gradient-to-b from-transparent from-[0%] to-[#0f172a] to-85%">
            <img
              src="/logo.svg"
              alt="Logo"
              width="150px"
              height="100%"
              className={"header-animation logo-move"}
            />
            <h1 className="text-center text-[48px]  md:text-[80px] text-[#eee] shadow-text">
              Movies-Verse
            </h1>
            <p className="mb-4 w-[90%] text-center text-2xl text-[#eee]">
              ¡Explora, descubre y disfruta de la magia del cine y la
              televisión!
            </p>
          </div>
        </div>

        {loading && <Spinner />}

        <div className="transicion mt-20">
          <SliderContainer
            title="Tendencias de"
            typeList="trending"
            option1="day"
            option2="week"
          ></SliderContainer>
          <SliderContainer
            title="Lo más valorado"
            typeList="top_rated"
            option1="movie"
            option2="tv"
          ></SliderContainer>
          {/* <SliderContainer
            title="Populares de "
            typeList="popular"
            option1="movie"
            option2="tv"
          ></SliderContainer> */}
        </div>
      </ContextProvider>
      <Footer />
    </>
  );
};
