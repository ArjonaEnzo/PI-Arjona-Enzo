import React from "react";
import styled from "./landing.module.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className={styled.back}>
      <div className={styled.contein}>
        <p>Bienvenido a nuestro proyecto increíble</p>
      </div>
      <Link to="/home">
        <h3>Welcome To Countries PI</h3>
      </Link>
    </div>
  );
};

export default Landing;
