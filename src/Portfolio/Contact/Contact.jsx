import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactme-container" id="contact">
      <div className="contactme-heading">
        <i className="fa-solid fa-arrow-right"></i>
        <h1> Contact Me </h1>
        <span className="line"> </span>
      </div>

      <div className="contactme-para">
        <p>
          I’ve been looking for new opportunities in Front-End Development, if
          have a similar opportunity kindly ping me on LinkedIn @ <span>Prince Patidar. </span> 
           Whether you have a question or just want to say Hi, you can connect
          with me on LinkedIn, I'll get back to you soon.
        </p>
      </div>
      <div className="contact-btn">
        <a href="" >Hire Me</a>
      </div>
    </div>
  );
};
export default Contact;
