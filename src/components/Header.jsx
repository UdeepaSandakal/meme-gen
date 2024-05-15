import React from "react";
import Logo from "../assets/Troll_Face.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Troll face logo" className="header--logo" />
      <h4 className="header--title">Meme Generator</h4>
    </div>
  );
}

export default Header;
