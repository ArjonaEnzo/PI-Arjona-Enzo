import React from "react";
import Card from "../Card/Card";
import styled from "./cards.module.css";


export const Cards = ({ info }) => {
  return (
    <div className={styled.conteinCards}>
      {info.map((pais) => (
        <Card name={pais.name} constinent={pais.constinent} flag={pais.flag} />
      ))}
    </div>
  );
};
