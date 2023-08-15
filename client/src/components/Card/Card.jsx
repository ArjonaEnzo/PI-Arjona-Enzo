import React from "react";
import styled from "./card.module.css";
import { Link } from "react-router-dom";
const Card = ({ id, name, continent, flag, population }) => {
  return (
    <div className={styled.conteinCard}>
      <div>
        <h2 className={styled.imgFlag}>
          <Link to={`/details/${id}`}>
            <img src={flag} alt="flag" />
          </Link>
        </h2>
      </div>
      <div className={styled.info}>
        <label>Name</label>
        <h3>{name}</h3>
        <label>Contintent</label>
        <h3>{continent}</h3>
        <label>Population</label>
        <h3>{population}</h3>
      </div>
    </div>
  );
};

export default Card;
