import React from 'react'
import './Otherproject.css';
import img1 from './project1.jpg';
import img2 from './project2.jpg';
import img3 from './project3.jpg';
import img4 from './project4.jpg';
import img5 from './project5.jpg';
import img6 from './project6.jpg';
import img7 from './project7.jpg';
import img8 from './project8.jpg';
import img9 from './project9.jpg';


const Otherprojects = () => {
  return (
    <div className='otherproject-container' id='otherprojects'>
 <div className="otherproject-heading">
          <i className="fa-solid fa-arrow-right"></i>
          <h1>Other Projects </h1>
          <span className="line"> </span>
        </div>
        

        <div className='project-links'>

<div className='otherproject-image'>
<a href='prince192000.github.io/animated_page_1/' target="_blank"><img src={img1} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/gym_web_page/'  target="_blank"><img src={img2}alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/movies_app/' target="_blank"><img src={img3} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='' target="_blank"><img src={img4} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/myntra_clone/' target="_blank"><img src={img5} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/login_form_1/' target="_blank"><img src={img6} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='' target="_blank"><img src={img7} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/countdown_js/' target="_blank"><img src={img8} alt='' /></a>


</div>
<div className='otherproject-image'>
<a href='prince192000.github.io/instagram_clone/' target="_blank"><img src={img9} alt='' /></a>


</div>


        </div>
    </div>
  )
}

export default Otherprojects;