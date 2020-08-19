import React from "react";
import "./Card.scss";

function Card(props) {
  return <div className="card-container">
    <figure className="card-figure">
      <a href="demo" target="new">
        <img src="/images/thumbnails/qod.png" alt="website-preview" />
      </a>
      <div className="card-second-row">
        <h3 className="card-title">Quotes on Dev</h3>
        <div className="website-links">
          <span><a href="github" target="new"><i class="fab fa-github"></i></a></span>
          <span><a href="demo" target="new"><i class="fas fa-external-link-alt"></i></a></span>
        </div>
      </div>
      <div className="card-description">
        <h3 className="card-description-title">Description</h3>
        <hr />
        <h4>Quotes on Dev is a multi page web app that shows random developer themed quotes, and also allows registered
        users to submit their own quotes. The app uses Word Press as the content management system, and is fully
           responsive with breakpoints for Tablet and Mobile.</h4>
      </div>
    </figure>
  </div>;
}

export default Card;