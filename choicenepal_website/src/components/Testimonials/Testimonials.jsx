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

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next} alt="" className="nextBtn" onClick={slideForward} />
      <img src={back} alt="" className="backBtn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userThree} alt="" />
                <div>
                  <h3>Prateek Sharma</h3>
                  <span>Executive Director</span>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nobis!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userTwo} alt="" />
                <div>
                  <h3>Sukram Dulal</h3>
                  <span>District Coordinator</span>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nobis!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userOne} alt="" />
                <div>
                  <h3>Prakash Bastola</h3>
                  <span>Civil Engineer</span>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nobis!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userFour} alt="" />
                <div>
                  <h3>Vewswengol GC</h3>
                  <span>Expedition Coordinator</span>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nobis!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
