import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacter();
    return () => {
      setCharacter({});
    };
  }, [id]);

  const { name, status, species, gender, origin, image } = character;

  return (
    <div>
      {character.name ? (
        <div>
          <h2>{name}</h2>
          <h2>{origin.name}</h2>
          <img src={image} alt={name} />
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      ) : (
        <h2>... Loading</h2>
      )}
    </div>
  );
};

export default Detail;
