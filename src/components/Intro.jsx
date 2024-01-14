/* eslint-disableo it is react/no-unescaped-entities */
import React from "react";
import "./intro.css"
import jadeImg from "../assets/Jade2.jpg"

const Intro = () => {
  return (
    <div className="home">
      <div className="bg_image">
        <div className="banner">
            <img src={jadeImg} alt="" className="bg_image2"/>  
            <div>
               <h2 className="title"> Hey, <span> Angel Jade </span> Anoba Developer</h2>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default Intro;
