import React from 'react'
import './Navigation.css'

 const Navigation = () => {
  return (
    <>
    
    <div className='navigation '>
    <h1 className='nav-heading'>Portfolio</h1>

<ul >  
    <li > <a href='#home' > <i className="fa-solid fa-arrow-right"></i> Home</a></li>
    <li> <a href='#about' ><i className="fa-solid fa-arrow-right"></i> About</a></li>
    <li> <a href='#mywork' ><i className="fa-solid fa-arrow-right"></i> My Work</a></li>
    <li> <a href='#otherprojects' ><i className="fa-solid fa-arrow-right"></i> Other Projects</a></li>
    <li> <a href='#contact' ><i className="fa-solid fa-arrow-right"></i> Contact</a></li>
   
</ul>

    </div>
    
    </>
  )
}
export default Navigation;