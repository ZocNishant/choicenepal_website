import React, { useRef } from "react";
import "./Testimonials.css";
import next from "../../assets/next.png";
import back from "../../assets/back.png";
import userOne from "../../assets/Prakash.jpg";
import userTwo from "../../assets/Sukram.jpg";
import userThree from "../../assets/prateek.jpg";
import userFour from "../../assets/gc.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideWidth = 25; // Percentage width per slide
  const maxTx = -75; // Maximum negative transform percentage (based on 4 slides, each 25%)

  const slideForward = () => {
    // If we're at the last slide, reset to the beginning
    if (tx <= maxTx) {
      tx = 0;
    } else {
      tx -= slideWidth;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    // If we're at the beginning, reset to the last slide
    if (tx >= 0) {
      tx = maxTx;
    } else {
      tx += slideWidth;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next} alt="Next" className="nextBtn" onClick={slideForward} />
      <img src={back} alt="Back" className="backBtn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userThree} alt="User Three" />
                <div>
                  <h3>Prateek Sharma</h3>
                  <span>Executive Director</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nobis!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userTwo} alt="User Two" />
                <div>
                  <h3>Sukram Dulal</h3>
                  <span>District Coordinator</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nobis!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userOne} alt="User One" />
                <div>
                  <h3>Prakash Bastola</h3>
                  <span>Civil Engineer</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nostrum numquam nihil nulla esse ipsa vero at. Enim, eveniet consequuntur!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userFour} alt="User Four" />
                <div>
                  <h3>Vewswengol GC</h3>
                  <span>Expedition Coordinator</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nobis!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

