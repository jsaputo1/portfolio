import React from "react";
import "./Hero.scss";

function Hero(props) {
  return <div className="hero-container">
    <div className="hero-text">
      <h1>Hello, I'm <span className="hero-name">{props.name}</span></h1>
      <h1>{props.tagline}</h1>
      <div className="hero-button">
        <a href="#projects">
          View my work <i class="fas fa-arrow-down"></i>
        </a>
      </div>
    </div>
  </div>;
}

export default Hero;

