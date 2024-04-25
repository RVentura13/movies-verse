import { useEffect, useState } from "react";
import { ItemSlider } from "./ItemSlider";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/autoplay";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

export const Carousel = ({ data, listOf }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <Swiper
      className="swiper-slide bg-gradient-to-b from-[#0f172a] from-[20%] to-[#1d2640] to-100% p-[10px]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      grabCursor={true}
      direction={"horizontal"}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      }}
      navigation
      slidesPerView={1}
      slidesPerGroup={1}
      // pagination={{
      //   clickable: true,
      //   dynamicBullets: false,
      //   // type: "progressbar",
      // }}
      // loop={true}
      scrollbar={{ draggable: true, hide: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },
        620: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },
        950: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },
        1250: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },

        1550: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },
        1750: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          autoplay: { delay: 2500, disableOnInteraction: false },
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {movies.map((movie) =>
        movie.error ? (
          <p className="text-[#eee] py-10" key={movie.error}>
            {movie.error}
          </p>
        ) : (
          <SwiperSlide key={movie.id} className={`mb-10 fade-in `}>
            <ItemSlider
              id={movie.id}
              url={movie.poster_path}
              title={movie.title ? movie.title : movie.name}
              vote_average={movie.vote_average}
              media_type={movie.media_type}
              release_date={movie.release_date}
              first_air_date={movie.first_air_date}
              listOf={listOf}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
