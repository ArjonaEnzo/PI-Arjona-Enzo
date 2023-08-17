import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"
const Card = ({ id, name, continent, flag, population }) => {
  return (
    <div className={style.conteinCard}>
      <div>
          <Link to={`/details/${id}`}>
            <img className={style.flag} src={flag} alt="flag" />
          </Link>
      </div>
      <div>
        <h3 className={style.titulo}>{name}</h3>
        <h3 className={style.continente}>{continent}</h3>
        <h3 className={style.continente}>Population:{population}</h3>
      </div>
    </div>
  );
};

export default Card;
