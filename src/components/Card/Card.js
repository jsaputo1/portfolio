import React, { useState } from "react";
import "./Card.scss";

function Card(props) {
  const [cardHover, setCardHover] = useState(false);
  const toggleCardHover = () => setCardHover(prevState => !prevState);

  const background = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${props.thumbnail})`
  };

  return <div className="card-container">
    <div className={cardHover ? "card-figure card-hover-animation" : "card-figure"} onMouseEnter={toggleCardHover} onMouseLeave={toggleCardHover}>
      {!cardHover ? (
        <img src={props.thumbnail} />
      ) : (
          <div className="card-text-container" style={background}>
            <div className="card-text">
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
            </div>
            <div className="card-links">
              <a href={props.githubLink} target="new"><i class="fab fa-github"></i></a>
              <a href={props.demoLink} target="new"><i class="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        )
      }
    </div >

  </div >;
}

export default Card;