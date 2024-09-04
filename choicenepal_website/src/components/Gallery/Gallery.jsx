import React from "react";
import "./Gallery.css";
import balithum from "../../assets/balithum.jpg";
import projectPics from "../../assets/hero.jpg";
import cowshed from "../../assets/cowshed.jpg";
import waterTap from "../../assets/waterTap.jpg";
import expedition from "../../assets/expedition.jpg";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="choiceGallery">
        <div className="gallery">
          <img src={balithum} alt="" />
          <img src={cowshed} alt="" />
          <img src={waterTap} alt="" />
          <img src={projectPics} alt="" />
        </div>
        <div className="gallery">
          <img src={projectPics} alt="" />
          <img src={projectPics} alt="" />
          <img src={projectPics} alt="" />
          <img src={expedition} alt="" />
        </div>

        <button className="btn darkBtn">See More Pictures</button>
      </div>
    </>
  );
};

export default Gallery;
