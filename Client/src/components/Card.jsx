import "./Card.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

function Card(props) {
  const {
    onClose,
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  }

  const handleClose = () => {
    onClose(id);
  };

  return (
    <div className="cardbg">
      <div className="blueborder">
        <button onClick={handleClose}>X</button>
        <h2>{id}</h2>
        <Link to={`/detail/${id}`}>
          <h3 className="card-name">{name}</h3>
        </Link>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
        <img src={image} alt="asd" />
        {isFav ? (
          <button className="fav-btn" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="fav-btn" onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (props) => dispatch(addFav(props)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
