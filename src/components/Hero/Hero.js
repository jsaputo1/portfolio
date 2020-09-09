import React from "react";
import "./Hero.scss";

function Hero(props) {
  return <div className="hero-container">
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom"></div>
      </div>
    </div>
    <div className="hero-text">
      <h1>Hello, I'm <span className="hero-name">{props.name}</span></h1>
      <h1>{props.tagline}</h1>
      <a href="#projects">
        View my work <i class="fas fa-arrow-down"></i>
      </a>
    </div>
  </div>;
}

export default Hero;

