import React from "react";
import "./Card.scss";

function Card(props) {
  return <div className="card-container">
    <figure className="card-figure">
      <a href={props.demoLink} target="new">
        <img src={props.thumbnail} alt="website-preview" />
      </a>
      <div className="card-second-row">
        <h3 className="card-title">{props.title}</h3>
        <div className="website-links">
          <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
          <span><a href={props.demoLink} target="new"><i class="fas fa-external-link-alt"></i></a></span>
        </div>
      </div>
      <div className="card-description">
        <h3 className="card-description-title">Description</h3>
        <hr />
        <h4>{props.description}</h4>
      </div>
    </figure>
  </div>;
}

export default Card;