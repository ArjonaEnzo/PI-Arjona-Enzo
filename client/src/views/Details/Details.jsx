import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div>
      <h2>Country Details</h2>
      <p>
        <img src={details.flagImage} alt={`${details.name} Flag`} />
      </p>
      <p>{details.name}</p>
      <p>Code: {details.id}</p>
      <p>Name: {details.name}</p>
      <p>Continent: {details.continent}</p>
      <p>Capital: {details.capital}</p>
      <p>Subregion: {details.subregion}</p>
      <p>Area: {details.area}</p>
      <p>Population: {details.population}</p>
    </div>
  );
};

export default Details;
