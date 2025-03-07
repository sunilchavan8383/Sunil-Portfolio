import React from "react";
import "./Navbar.css";
import img from "../images/logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img id="NavImg" src={img} alt="Logo" />
      </div>
      <div className="Nav">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">PORTFOLIO</a>
        <a id="contact" href="">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Navbar;
