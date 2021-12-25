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
                  <p className="time">03/2021 - </p>
                  <p className="present">Present</p>
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
            <div className="exp-box">
              <div className="trail">
                <div className="head">
                  <div className="dot"></div>
                </div>
                <div className="path-traced"></div>
              </div>
              <div className="info">
                <div className="header-info">
                  <p className="name">
                    SanRon Consultancy Services - Web Developer Intern
                  </p>
                  <p className="time">08/2020 - </p>
                  <p className="present">10/2020</p>
                </div>
                <div className="more">
                  <p>- Designed and Developed modal for company website</p>
                  <p>
                    - Designed and Developed a small intern project with backend
                    (CMS Management)
                  </p>
                </div>
              </div>
            </div>
            <div className="exp-box">
              <div className="trail">
                <div className="head">
                  <div className="dot"></div>
                </div>
                <div className="path-traced"></div>
              </div>
              <div className="info">
                <div className="header-info">
                  <p className="name">
                    Jetic Healthcare Pvt - Jetic Healthcare Pvt
                  </p>
                  <p className="time">12/2019 - </p>
                  <p className="present">1/2020</p>
                </div>
                <div className="more">
                  <p>
                    - Worked on medical equipment - OT lights, Baby Warmers, and
                    Vein Finder for sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="code-slogan">Code</div>
    </div>
  );
}
export default Experience;
