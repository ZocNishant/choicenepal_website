import React from "react";
import "./Navbar.css";
import Logo from "../../assets/hero.jpg";

const Navbar = () => {
  return (
    <nav className="container">
      {/* <img src={Logo} className="logo" alt="" /> */}
      <h3 className="container">Manabiyasewa Logo</h3>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Gallery</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
