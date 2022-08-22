import React from "react";
import logo from "../troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
