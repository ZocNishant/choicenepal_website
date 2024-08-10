import React from "react";
import "./Gallery.css";
import projectPics from "../../assets/hero.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="choiceGallery">
      <div className="gallery">
        <img src={projectPics} alt="" />
        <img src={projectPics} alt="" />
        <img src={projectPics} alt="" />
        <img src={projectPics} alt="" />
      </div>

      <button className="btn darkBtn">See More Pictures</button>
    </div>
  );
};

export default Gallery;
