import React from "react";
import Card from "../Card/Card";
import styled from "./cards.module.css";
export const Cards = ({ props }) => {
  // const { cca3, name, continent, flag } = props

  return (
    <div className={styled.conteinCards}>
      {props?.map((pais) =>
        pais && pais.id ? (
          <Card
            key={pais.id}
            id={pais.id}
            name={pais.name}
            continent={pais.continent}
            flag={pais.flagImage}
            population={pais.population}
          />
        ) : null
      )}
    </div>
  );
};
