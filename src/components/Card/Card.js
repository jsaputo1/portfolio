import React from "react";
import "./Card.scss";
import projectDataObject from "../../data/projects";

function Card(props) {
  let jsxData = [];
  for (let key in projectDataObject) {
    let newObj = projectDataObject[key];
    for (let key in newObj) {
      let newObj2 = newObj[key];
      for (let key in newObj2) {
        let data = (newObj2[key]);
        let jsxContent = (
          <div className="card-wrapper">
            <figure className="card-figure">
              <a href={data.demoLink} target="new">
                <img src={data.thumbnail} alt="website-preview" />
              </a>
              <div className="card-second-row">
                <h3 className="card-title">{data.title}</h3>
                <div className="website-links">
                  <span><a href={data.githubLink} target="new"><i class="fab fa-github"></i></a></span>
                  <span><a href={data.demoLink} target="new"><i class="fas fa-external-link-alt"></i></a></span>
                </div>
              </div>
              <div className="card-description">
                <h3 className="card-description-title">Description</h3>
                <hr />
                <h4>{data.description}</h4>
              </div>
            </figure>
          </div>
        );
        jsxData.push(jsxContent);
      }
    }
  }
  return <div className="card-container">
    {jsxData}
  </div>;
}

export default Card;