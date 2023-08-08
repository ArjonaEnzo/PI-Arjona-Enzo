import React from "react";
import styled from "./card.module.css"
const Card = ({ name, continent, flag }) => {
  return (
    <div className={styled.conteinCard}>
      <div>
        <h2 className={styled.imgFlag}>{flag}</h2>
      </div>
      <div className={styled.info}>
        <label>Name</label>
        <h3>{name}</h3>
        <label>Contintent</label>
        <h3>{continent}</h3>
      </div>
    </div>
  );
};

export default Card;
