import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import profilePic from "./images/profile.jpg";
import './App.css';


function Slideshow() {
  const settings = {
    dots: true,          // navigation dots
    infinite: true,      // continuous loop
    speed: 2600,          // transition speed
    slidesToShow: 1,     // one slide at a time
    slidesToScroll: 1,
    autoplay: true,      // auto play
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={profilePic} alt="Vaishnavi" className="slide-img" />
     <button className="btn">Hire me</button>


      </div>
      <div>
        <img src={profilePic} alt="Vaishnavi" className="slide-img" />
        <p>Interested in Cybersecurity, React, and Portfolio Design</p>
      </div>
    </Slider>
  );
}

export default Slideshow;

