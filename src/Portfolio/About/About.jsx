import React from "react";
import "./About.css";
import img from './background.jpeg'

export const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="about-heading">
        <i className="fa-solid fa-arrow-right"></i>
        <h1> About Me </h1>
        <span className="line"> </span>
      </div>

      <div className="About-content">
        <div className="about-text">
          <p>
            Hi, I'm a software professional who works to achieve software that
            empowers people, not just businesses. I'm interested in full-stack
            Web Development, Competitive Coding & Data Structure and Algorithms.
          </p><br/>
          <p>
            I am  graduated with a B.Sc in (Agriculture) from Medi-Caps University
            in May 2022. When I'm not building software, I like to play online
            multiplayer games and explore the world!
          </p>
<br/>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <br/>
          <div className="technologies">
            <p> <i class="fa-solid fa-caret-right"></i> HTML</p>
            <p> <i class="fa-solid fa-caret-right"></i> CSS</p>
            <p> <i class="fa-solid fa-caret-right"></i> JAVASCRIPT</p>
            <p> <i class="fa-solid fa-caret-right"></i> REACT.JS</p>
          </div>
        </div>

        <div className="img">
          <img src={img} alt="aboutimage" width="350rem" height="300rem"/>
        </div>
      </div>
    </div>
  );
};
export default About;
