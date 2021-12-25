import React from "react";
import "../styles/myself.css";
import MyPic from "../images/myself.jpg";
function Myself() {
  return (
    <div className="myself">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 myself-area">
            <p className="header-pro">Me, Myself and I</p>
            <div className="header-pro-sub">
              <p>
                Hello, Myself Dheeraj Dayakaran. I am into Web Development from
                last 3 years. I enjoy building interactive and beautiful web
                pages from SCRATCH.
              </p>
              <p>
                Currently pursuing MTech in Computer Science and Engineering at
                Amrita Vishw Vidyapeeth
              </p>
              <p>
                My speciality is front-end web design and development, pushing
                pixels to its limit in figma and turning them into beautiful and
                semantic HTML and CSS.
              </p>
            </div>
            <div className="resume-bt">
              <button>Resume</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 img-area">
            <div className="img-box">
              <img src={MyPic} alt="Dheeraj" />
            </div>
            <div className="img-bg-box"></div>
          </div>
        </div>
      </div>
      <div className="myself-slogan">Dheeraj</div>
      <div className="quote">
        <span className="start"><p>“</p></span>
        <span className="quote-area"><p>while(!(succeed = try()))</p></span>
        <span className="end"><p>“</p></span>
      </div>
    </div>
  );
}

export default Myself;
