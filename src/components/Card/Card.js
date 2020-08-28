import React from "react";
import "./Card.scss";
import ReactPlayer from 'react-player/youtube';

function Card(props) {
  return <div className="card-container">
    <div className="card-header">
      <h3 className="card-title">{props.title}</h3>
    </div>
    <figure className="card-figure">
      {!props.video ? (
        <a href={props.demoLink} target="new">
          <img src={props.thumbnail} alt="website-preview" />
        </a>
      ) : (
          <div className="embedded-video">
            <ReactPlayer url={props.video} width="300" height="250" className="react-player" />
          </div>
        )}
      <div className="card-information-header">
        <h3>Information</h3>
        <div className="website-links">
          <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
          {props.demoLink != null ? (
            <span>
              <span><a href={props.demoLink} target="new"><i class="fas fa-external-link-alt"></i></a></span>
            </span>
          ) : (
              <div>
              </div>
            )
          }
        </div>
      </div>
      <div className="card-information-details">
        <span><h3>Description:</h3></span>
        <span><h4>{props.description}</h4></span>
        <span><h3>Technologies:</h3></span>
        <span><h4>{props.technologies}</h4></span>
        {props.notes != null ? (
          <div>
            <span><h3>Notes:</h3></span>
            <span><h4>{props.notes}</h4></span>
          </div>
        ) : (
            <div>
            </div>
          )
        }
      </div>
    </figure>
  </div>;
}

export default Card;