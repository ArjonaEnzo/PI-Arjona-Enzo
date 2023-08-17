import React from "react";
import styled from "./landing.module.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className={styled.back}>
      <Link to="/home">
        <img src="" alt="" />
        <h3>Welcome To Countries PI</h3>
      </Link>
    </div>
  );
};

export default Landing;
