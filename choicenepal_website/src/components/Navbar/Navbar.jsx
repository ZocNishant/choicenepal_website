import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/hero.jpg";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      {/* <img src={Logo} className="logo" alt="" /> */}
      <h2 className="logo">Manabiyasewa</h2>
      <ul className={mobileMenu ? "" : "hideMobileMenu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-260} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="aboutUs" smooth={true} offset={-260} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <img src={Menu} alt="" className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
