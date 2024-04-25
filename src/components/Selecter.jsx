import { useState, useContext } from "react";

import { Contexto } from "../context/Context";

export const Selecter = ({ option, option1, option2 }) => {
  const [selected, setSelected] = useState(option1);

  const { listOf, setListOf } = useContext(Contexto);
  const { timeTend, setTimeTend } = useContext(Contexto);

  const handleClick = (data) => {
    setSelected(data);
    option === "top_rated" ? setListOf(data) : setTimeTend(data);
  };

  return (
    <div className="rounded-full flex bg-[#eee] border-[1px]">
      <button
        className={`${
          selected === option1 ? "selected" : ""
        }  rounded-full text-[#0f172a] text-xl py-2 px-5 capitalize`}
        onClick={() => {
          handleClick(option1);
        }}
      >
        {option1 === "day" ? "Hoy" : "Películas"}
      </button>
      <button
        className={`${
          selected === option2 ? "selected" : ""
        }  rounded-full text-[#0f172a] text-xl py-2 px-5 capitalize`}
        onClick={() => {
          handleClick(option2);
        }}
      >
        {option2 === "week" ? "Semana" : "Televisión"}
      </button>
    </div>
  );
};
