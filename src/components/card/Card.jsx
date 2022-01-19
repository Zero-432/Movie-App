import React from "react";

import { Link } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import { FaPlay } from "react-icons/fa";

import Button from "../button/Button";

import "./card.scss";
import apiConfig from "../../api/apiConfig";

const Card = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <FaPlay />
        </Button>
      </div>
      <h5 style={{ textAlign: "center" }}>{item.title || item.name}</h5>
    </Link>
  );
};

export default Card;
