import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Bag</h1>
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/feature"}>Feature</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/product"}>Products</NavLink>
            <button onClick={() => nav("/admin")}>Admin</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
