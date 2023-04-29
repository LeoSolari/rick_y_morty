import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favourites from "./components/Favourites";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.error(error);
      window.alert("¡Hubo un error al iniciar sesión!");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const characterExists = characters.find(
        (character) => character.id === data.id
      );
      if (characterExists) return alert("Ese personaje ya esta");
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
      window.alert("¡Hubo un error al buscar el personaje!");
    }
  }

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );

    setCharacters(filteredCharacters);
  };

  const agregarRandom = () => {
    const random = Math.floor(Math.random() * 827);

    axios(`https://rickandmortyapi.com/api/character/${random}`).then(
      ({ data }) => {
        const characterExists = characters.find(
          (character) => character.id === data.id
        );
        if (characterExists) return alert("Ese personaje ya esta");
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return (
    <>
      {location.pathname !== "/" ? (
        <Nav agregarRandom={agregarRandom} onSearch={onSearch} />
      ) : null}
      <Routes>
        <Route
          element={
            <Cards
              onClose={onClose}
              agregarRandom={agregarRandom}
              onSearch={onSearch}
              characters={characters}
            />
          }
          path="/home"
        />
        <Route element={<About />} path="/about" />
        <Route element={<Form login={login} />} path="/" />
        <Route element={<Detail />} path="/detail/:id" />
        <Route element={<Favourites />} path="/favorites" />
      </Routes>
    </>
  );
}

export default App;
