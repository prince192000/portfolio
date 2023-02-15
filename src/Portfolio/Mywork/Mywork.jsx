import React from "react";
import "./Mywork.css";
import Img from './project1.jpg';
import Img1 from './project2.jpg';
import img2 from './project3.jpg';

const Mywork = () => {
  return (
    <>
      <div className="mywork-container" id="mywork">
        <div className="mywork-heading">
          <i className="fa-solid fa-arrow-right"></i>
          <h1> My Work </h1>
          <span className="line"> </span>
        </div>
        <div className="project-container">
          <div className="project1-img">
            <a href="https://prince192000.github.io/weather_app/" target="_blank"><img src={Img1} alt="Project image" /></a>
          </div>

          <div className="project-info">
            <h2 className="project-heading">WEATHER APP </h2>
            <p className="project-para">
              Designed and deployed for knowing the weather of any country or
              city.The app uses API from the open weather app
            </p>
            <h3 className="lang-used"> HTML CSS JAVASCRIPT</h3>
            <div className="icon-project">
           
              <a href="https://github.com/prince192000?tab=repositories" target="_blank" > <i class="fa-brands fa-github"></i> <i class="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>
        </div>


        <div className="project-container">
         

          <div className="project-info project-info1">
            <h2 className="project-heading">E-Commerce Website </h2>
            <p className="project-para project-para1">
              Designed and deployed for knowing the weather of any country or
              city.The app uses API from the open weather app
            </p>
            <h3 className="lang-used"> HTML CSS REACT.JS </h3>
            <div className="icon-project">
           
              <a href="" ><i class="fa-brands fa-github"></i> <i class="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>

          <div className="project1-img">
            <a href="" target="_blank"><img src={img2} alt="Project image"  /></a>
          </div>
        </div>




        <div className="project-container">
          <div className="project1-img">
            <a href="" ><img src={Img1} alt="Project image" /></a>
          </div>

          <div className="project-info">
            <h2 className="project-heading">TODO-LIST </h2>
            <p className="project-para">
              Designed and deployed for knowing the weather of any country or
              city.The app uses API from the open weather app
            </p>
            <h3 className="lang-used"> HTML CSS JAVASCRIPT REACT </h3>
            <div className="icon-project">
           
              <a href="" ><i class="fa-brands fa-github"></i> <i class="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>
        </div>

        <div className="project-container">
         

          <div className="project-info project-info1">
            <h2 className="project-heading">MOBILE DEVELOPMENT APP </h2>
            <p className="project-para project-para1">
              Designed and deployed for knowing the weather of any country or
              city.The app uses API from the open weather app
            </p>
            <h3 className="lang-used"> HTML CSS </h3>
            <div className="icon-project">
           
              <a href="" ><i class="fa-brands fa-github"></i> <i class="fa-solid fa-share-from-square"></i></a>
            </div>
          </div>

          <div className="project1-img">
            <a href="https://prince192000.github.io/mobile_app_development_page/" target="_blank"><img src={Img} alt="Project image"  /></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mywork;
