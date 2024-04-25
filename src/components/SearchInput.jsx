import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    navigate(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="px-3 py-1 rounded-lg bg-opacity-30 bg-[#eee] text-xl text-[#eee] ease-linear duration-150 focus:scale-110"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
    </form>
  );
};
