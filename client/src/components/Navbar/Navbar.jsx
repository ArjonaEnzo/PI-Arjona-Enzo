import React from "react";
import { Link } from "react-router-dom";
import styled from "./navbar.module.css";

// className={styled.conteins}

const Navbar = () => {
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
        <Link to={"/details"}>Countries</Link>
      </div>
      <div>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
