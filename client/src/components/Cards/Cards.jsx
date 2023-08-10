import React from "react";
import Card from "../Card/Card";
import styled from "./cards.module.css";
export const Cards = ({ props }) => {
  console.log({props})
  // const { cca3, name, continent, flag } = props

  return (
    <div className={styled.conteinCards}>
      {props?.map((pais) => (
        <Card
          name={pais.name}
          continent={pais.continent}
          flag={pais.flagImage}
        />
      ))}
    </div>
  );
};
