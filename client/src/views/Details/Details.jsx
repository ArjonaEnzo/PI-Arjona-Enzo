import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Details.module.css";
const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  console.log("details", details);
  useEffect(() => {
    console.log(id);
    axios(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
      });
  }, [id]);

  return (
    <div className={style.allContainer}>
      <div className={style.detailContainer}>
        <div className={style.flagConteiner}>
          <p>
            <img
              className={style.flag}
              src={details.flagImage}
              alt={`${details.name} Flag`}
            />
          </p>
          <p className={style.p}>{details.name}</p>
          <p className={style.p}>Code: {details.id}</p>
          <p className={style.p}>Name: {details.name}</p>
          <p className={style.p}>Capital: {details.capital}</p>
          <p className={style.p}>Continent: {details.continent}</p>
          <p className={style.p}>Subregion: {details.subregion}</p>
          <p className={style.p}>Area: {details.area}</p>
          <p className={style.p}>Population: {details.population}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
