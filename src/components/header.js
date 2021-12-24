import React from "react";
import "../styles/header.css";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 name">
            <p className="header-content">Hi,</p>
            <p className="header-content">I'm Dheeraj Dayakaran</p>
            <p className="header-sub-heading">I build things for the web.</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 some-info">
            <p className="some-info-content">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div className="contact-button">
              <button>Contact me!</button>
          </div>
        </div>
      </div>
      <div className="slogan-area">Hello, There.</div>
    </div>
  );
}

export default Header;
