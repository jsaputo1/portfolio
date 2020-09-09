import React, { useState } from "react";
import "./Card.scss";

function Card(props) {
  const [cardHover, setCardHover] = useState(false);
  const toggleCardHover = () => setCardHover(prevState => !prevState);

  return <div className="card-container">
    <div className={cardHover ? "card-figure fade-in" : "card-figure"} onMouseEnter={toggleCardHover} onMouseLeave={toggleCardHover}>
      {!cardHover ? (
        <img src={props.thumbnail} />
      ) : (
          <div className="card-text-container">
            <div className="card-text">
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
            </div>
            <div className="card-links">
              <a href={props.gitHub}>GitHub</a>
              <a href={props.demoLink}>Demo</a>
            </div>
          </div>
        )
      }
    </div >

  </div >;
}

export default Card;