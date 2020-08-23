import React from "react";
import "./Hero.scss";

function Hero(props) {
  return <div className="hero-container">
    <div className="hero-text">
      <h2>John Saputo</h2>
      <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ante ante. Nulla facilisi. Proin vitae libero sapien. Mauris at pretium ipsum, at eleifend velit. Donec lorem dui, tempus ac dignissim eget, porta et justo. Praesent eget laoreet elit, nec congue ante.. </h3>
    </div>
    <img src="/images/hero-banner3.png" alt="hero-banner" />

  </div>;
}

export default Hero;

