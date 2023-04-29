import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const { onSearch } = props;

  return (
    <div className="SearchBar">
      <input
        onChange={(e) => handleChange(e)}
        className="searchInput"
        type="search"
      />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
