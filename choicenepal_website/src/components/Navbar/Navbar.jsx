import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      <h2 className="logo">CHOICE</h2>
      <ul className={mobileMenu ? "showMenu" : ""}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutUs" smooth={true} offset={-260} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-260} duration={500}>
            Projects
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
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact Us
          </Link>
        </li>
      </ul>

      <img src={Menu} alt="Menu" className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
