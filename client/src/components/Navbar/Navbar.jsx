import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "./navbar.module.css";
import { getName } from "../../Redux/Actions/actions";

// className={styled.conteins}

const Navbar = () => {
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
            src="https://iili.io/HthHLVR.th.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styled.navLinkContain}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/create"}>Create Activity</Link>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <p>Search By Name</p>
          <input
            type="text"
            placeholder="Search for a country"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
