import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-home" id="home">
        <div className="social-icons">
          <a href="https://github.com/prince192000?tab=repositories" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <span className="ver-span"> </span>
        </div>
        <div className="main-content">
          <p className="home-top">Hi, my name is</p>
          <h1 className="name-heading">Prince Patidar.</h1>
          <h1 className="name-heading nameheading-dark">Front-End Developer</h1>
          <p className="description">
            I'm a software engineering student specializing in
            <br /> Web-dev and problem solving.
          </p>
          <div className="mail-link">
            <a
              className="btn "
              href="mailto:kukshiyaprince227@gmail.com"
              target="_blank"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="email ">
          <p  className="email-p"><a
          
            href="mailto:kukshiyaprince227@gmail.com"
              target="_blank"
          >
            kukshiyaprince227@gmail.com
          </a></p>
          <span className="ver-span"> </span>
        </div>
      </div>
    </>
  );
};
export default Home;
