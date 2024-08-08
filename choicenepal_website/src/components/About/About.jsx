import React from "react";
import "./About.css";
import Image from "../../assets/hero.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img className="aboutImg" src={Image} alt="" />
      </div>
      <div className="aboutRight"></div>
    </div>
  );
};

export default About;
