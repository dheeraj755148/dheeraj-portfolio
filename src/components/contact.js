import React from "react";
import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 cont">
            <p className="header-pro">Contact me</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 tag-cont">
            <p>
              I'm always up for any new opportunities. If you have a question or
              just want to say hi, I'll get back to you!
            </p>
          </div>
          <div className="form-area">
            <div>
              <div className="first-part">
                <input type="text" placeholder="Name" className="name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" className="subject" />
              <textarea name="msg" id="msg" placeholder="Message"></textarea>
            </div>
            <button className="submit-form">Send Message!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
