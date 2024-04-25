import { useState } from "react";
import { PiPlay } from "react-icons/Pi";
import { AiOutlineClose } from "react-icons/ai";

import YouTube from "react-youtube";
import Modal from "react-modal";

export const ButtonPlay = ({ typeVideos, keyVideos, name, title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Estilos por defecto:

  // const customModalStyles = {
  //   overlay: {
  //     // Transition: "all",
  //     TransitionDuration: "500",
  //     Transition: "linear",
  //     backgroundColor: "rgba(15,23,42,0.1)",
  //     backdropFilter: "blur(5px)",
  //   },
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     transform: "translate(-50%, -50%)",
  //     // width: "auto", // Ajusta el ancho del modal según tus necesidades
  //     maxHeight: "100vh", // Ajusta la altura máxima del modal según tus necesidades
  //     overflow: "auto", // Permite hacer scroll en caso de que el contenido del modal sea largo
  //     backgroundColor: "#0f172a",
  //     // color: "#eee",
  //     width: "70%",
  //     height: "100%",
  //   },
  // };

  //Estilos para caja de Youtube:
  const opts = {
    width: "100%",
    height: "550vh",
    playerVars: {
      autoplay: 1, // Autoplay habilitado
    },
  };

  const onReady = (event) => {
    // Ejecuta acciones cuando la API de YouTube esté lista
    event.target.playVideo(); // Por ejemplo, reproduce el video automáticamente
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      {typeVideos !== "SinVideo" && (
        <>
          <button
            className="text-[#eee] bg-[#d9254c] px-4 py-2 rounded-xl text-3xl  "
            onClick={openModal}
          >
            <PiPlay className="text-[50px] hover:scale-110 transition-all duration-150 ease-linear" />
          </button>
          <p className="text-[#eee]">Trailer</p>
        </>
      )}
      <Modal
        closeTimeoutMS={100}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customModalStyles}
        className="content-custom md:w-[60%] md:h-[70%]  md:m-5 md:left-[20%]"
        overlayClassName="overley-custom"
        contentLabel="Video Modal"
      >
        <div className="flex justify-between items-center gap-5">
          {name ? (
            <p className="text-[#eee] text-xl mb-5">{`${typeVideos} - ${name}`}</p>
          ) : (
            <p className="text-[#eee] text-xl mb-5">{`${typeVideos} - ${title}`}</p>
          )}
          <button
            className="text-[#eee] bg-[#d9254c] px-4 py-2 rounded-xl text-3xl mb-5"
            onClick={closeModal}
          >
            <AiOutlineClose className="hover:scale-[130%] transition-all duration-150 ease-linear " />
          </button>
        </div>

        <YouTube
          videoId={keyVideos}
          opts={opts}
          // origin={"https://www.youtube.com"}
          onReady={onReady}
        />
      </Modal>
    </div>
  );
};
