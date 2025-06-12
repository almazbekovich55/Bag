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
            <NavLink to={"/"}>q</NavLink>
            <NavLink to={"/feature"}>w</NavLink>
            <NavLink to={"/about"}>e</NavLink>
            <NavLink to={"/product"}>r</NavLink>
            <NavLink to={"/product"}>r</NavLink>
            <NavLink to={"/product"}>r</NavLink>
            <NavLink to={"/product"}>kuba jindi</NavLink>
            <NavLink to={"/product"}>kubanych Aseda</NavLink>
            <NavLink to={"/product"}>kubanych Aseda</NavLink>
            <NavLink to={"/product"}>kubanych Aseda</NavLink>
            <NavLink to={"/product"}>kuba jindi</NavLink>
            <button onClick={() => nav("/admin")}>Admin</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
