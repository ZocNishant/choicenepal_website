// import React from "react";
// import "./Gallery.css";
// import balithum from "../../assets/balithum.jpg";
// import projectPics from "../../assets/hero.jpg";
// import cowshed from "../../assets/cowshed.jpg";
// import waterTap from "../../assets/waterTap.jpg";
// import expedition from "../../assets/expedition.jpg";

// const Gallery = () => {
//   return (
//     <>
//       <div id="gallery" className="choiceGallery">
//         <div className="gallery">
//           <img src={balithum} alt="" />
//           <img src={cowshed} alt="" />
//           <img src={waterTap} alt="" />
//           <img src={projectPics} alt="" />
//         </div>
//         <div className="gallery">
//           <img src={projectPics} alt="" />
//           <img src={projectPics} alt="" />
//           <img src={projectPics} alt="" />
//           <img src={expedition} alt="" />
//         </div>

//         <button className="btn darkBtn">See More Pictures</button>
//       </div>
//     </>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import "./Gallery.css";
import balithum from "../../assets/balithum.jpg";
import projectPics from "../../assets/hero.jpg";
import cowshed from "../../assets/cowshed.jpg";
import waterTap from "../../assets/waterTap.jpg";
import expedition from "../../assets/expedition.jpg";

const Gallery = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null); // To store the selected image

  // Function to open image in fullscreen
  const openFullscreen = (imgSrc) => {
    setFullscreenImg(imgSrc);
  };

  // Function to close fullscreen
  const closeFullscreen = () => {
    setFullscreenImg(null);
  };

  return (
    <>
      <div id="gallery" className="choiceGallery">
        <div className="gallery">
          <img src={balithum} alt="Balithum" onClick={() => openFullscreen(balithum)} />
          <img src={cowshed} alt="Cowshed" onClick={() => openFullscreen(cowshed)} />
          <img src={waterTap} alt="Water Tap" onClick={() => openFullscreen(waterTap)} />
          <img src={projectPics} alt="Project Pics" onClick={() => openFullscreen(projectPics)} />
        </div>
        <div className="gallery">
          <img src={projectPics} alt="Project Pics" onClick={() => openFullscreen(projectPics)} />
          <img src={projectPics} alt="Project Pics" onClick={() => openFullscreen(projectPics)} />
          <img src={projectPics} alt="Project Pics" onClick={() => openFullscreen(projectPics)} />
          <img src={expedition} alt="Expedition" onClick={() => openFullscreen(expedition)} />
        </div>

        <button className="btn darkBtn">See More Pictures</button>

        {/* Fullscreen Modal */}
        {fullscreenImg && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <img src={fullscreenImg} alt="Fullscreen" className="fullscreen-img" />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
