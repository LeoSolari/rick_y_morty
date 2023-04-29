import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ agregarRandom, onSearch }) => {
  return (
    <div className="Nav">
      <SearchBar onSearch={onSearch} />
      <button onClick={() => agregarRandom()}>Agregar random</button>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favourites</Link>
    </div>
  );
};

export default Nav;
