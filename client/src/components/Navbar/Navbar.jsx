import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "./navbar.module.css";
import { getName } from "../../Redux/Actions/actions";
import { useLocation } from "react-router-dom";

// className={styled.conteins}

const Navbar = () => {
  const location = useLocation()
   const [searched, setSearched] = useState("");
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getName(searched));
   }, [dispatch, searched]);
  return (
    <div className={styled.barraNav}>
      <div>
        <Link to={"/"}>
          <img
            className={styled.imgNav}
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Mundo_hecho_de_Banderas.gif"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styled.navLinkContain}>
        <Link to={"/home"}>
          <p className={styled.p}>Home</p>
        </Link>
        <Link to={"/create"}>
          <p className={styled.p}>Create Activity</p>
        </Link>
      </div>
      <div>
        {location.pathname === "/home" && (
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className={styled.imp}
              type="text"
              placeholder="Search for a country"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
