import React from "react";

import Navigation from "./Portfolio/Navigation/Navigation";
import Home from "./Portfolio/Home/Home";
import './App.css'
import About from "./Portfolio/About/About";
import Mywork from "./Portfolio/Mywork/Mywork";
import Otherprojects from "./Portfolio/Mywork/Otherprojects/Otherprojects";
import Contact from "./Portfolio/Contact/Contact";
import Footer from "./Portfolio/Footer/Footer";

function App() {
  return (
    <>
  

   
  <Navigation/>

      <Home/>    
<About/>
<Mywork/>
<Otherprojects/>
<Contact/>
<Footer/>

    
  

    </>
  );
}

export default App;
