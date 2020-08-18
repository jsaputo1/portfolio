import React from "./node_modules/react";
import "./card.scss";
function Card(props) {
  return <div className="card-container">
    <figure className="card-image">
      <img src="card" alt="website-preview" />
      <div className="card-second-row">
        <h3 className="card-title">Title</h3>
        <div className="website-links">
          <span>Link</span>
          <span>Link 2</span>
        </div>
      </div>
    </figure>
  </div>;
}

export default Card;