import React from "react";
import "./Hero.scss";

function Hero(props) {
  return <div className="hero-container">
    <div className="hero-text">
      <div className="hero-title">
        <h2>{props.title}</h2>
        <h4>{props.tag}</h4>
        <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
        <span><a href={props.email} target="new"><i class="fas fa-envelope-square"></i></a></span>
      </div>
      <h3>{props.article} </h3>
    </div>
    <img src={props.image} alt="hero-banner" />

  </div>;
}

export default Hero;

