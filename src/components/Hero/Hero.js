import React from "react";
import "./Hero.scss";

function Hero(props) {
  return <div className="hero-container">
    <img src={props.image} alt="hero-banner" />
    <div className="hero-text">
      <div className="hero-title">
        <h2>{props.title}</h2>
        <div className="hero-tag">
          <h4>{props.tag}</h4>
          <span><a href={props.gitHubLink} target="new"><i class="fab fa-github"></i></a></span>
          <span><a href={props.email} target="new"><i class="fas fa-envelope-square"></i></a></span>
          <span><a href={props.linkedIn} target="new"><i class="fab fa-linkedin"></i></a></span>
        </div>
      </div>
      <h3 className="hero-article">{props.article} </h3>
    </div>
  </div>;
}

export default Hero;

