import React from "react";
import "./About.css";
import GroupImg from "../../assets/about.png";

const About = () => {
  return (
    <div id="aboutUs" className="about">
      <div className="aboutLeft">
        <img className="aboutImg" src={GroupImg} alt="" />
      </div>
      <div className="aboutRight">
        <h3>About Us</h3>
        <h2>Tag line for CHOICE Nepal.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          maiores aspernatur quod porro fugiat odio earum! Voluptatem reiciendis
          optio aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          maiores aspernatur quod porro fugiat odio earum! Voluptatem reiciendis
          optio aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          maiores aspernatur quod porro fugiat odio earum! Voluptatem reiciendis
          optio aliquam.
        </p>
      </div>
    </div>
  );
};

export default About;
