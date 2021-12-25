import React from "react";
import "../styles/experience.css";
function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 exp">
            <p className="header-pro">Experience</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 flow">
            <div className="exp-box">
              <div className="trail">
                <div className="head">
                    <div className="dot"></div>
                </div>
                <div className="path"></div>
              </div>
              <div className="info">
                <div className="header-info">
                  <p className="name">Edunify - Web Developer</p>
                  <p className="time">03/2021 - </p><p className="present">Present</p>
                </div>
                <div className="more">
                  <p>- Designed and Developed company website</p>
                  <p>
                    - Designed and Developed company school discovery platform
                    (Let's Find Schools)
                  </p>
                  <p>
                    - Developed company school discovery platform (My school
                    guide)
                  </p>
                  <p>
                    - Designed and Developed admission assistant for common
                    admissions website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
