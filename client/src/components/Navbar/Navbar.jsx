import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="nav-img-cont">
        <img
          src="client\src\img\навигационная эмблема розы ветров PNG , звезда, Роза, Путешествовать PNG картинки и пнг рисунок для бесплатной загрузки.png"
          alt=""
        />
      </div>
      <div className="nav-link-cont">
        <Link to={"/home"}>Home</Link>
        <Link to={"/create"}>Create Activity</Link>
        <Link to={"/details"}>Countries</Link>
      </div>
    </div>
  );
};

export default Navbar;
