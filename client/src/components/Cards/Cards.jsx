import React from "react";
import Card from "../Card/Card";
import styled from "./cards.module.css";
export const Cards = ({ props }) => {
  return (
    <div className={styled.conteinCards}>
      {props?.map((pais) =>
        pais && pais.id ? (
          <div className={styled.container}>
            <Card
              key={pais.id}
              id={pais.id}
              name={pais.name}
              continent={pais.continent}
              flag={pais.flagImage}
              population={pais.population}
            />
          </div>
        ) : null
      )}
    </div>
  );
};
