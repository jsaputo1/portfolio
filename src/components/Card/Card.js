import React from "react";
import "./Card.scss";

function Card(props) {
  return <div className="card-container">
    <div className="card-header">
      <h3 className="card-title">{props.title}</h3>
    </div>
    <figure className="card-figure">
      <a href={props.demoLink} target="new">
        <img src={props.thumbnail} alt="website-preview" />
      </a>
      <div className="card-description-header">
        <h3>Description</h3>
        <div className="website-links">
          <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
          <span><a href={props.demoLink} target="new"><i class="fas fa-external-link-alt"></i></a></span>
        </div>
      </div>
      <div className="card-description">
        <h4>{props.description}</h4>
      </div>
    </figure>
  </div>;
}

export default Card;