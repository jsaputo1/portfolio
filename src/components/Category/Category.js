import React from "react";
import "./Category.scss";
const { wordPressJsx, fullStackJsx, frontEndJsx } = require("../AppData/PropData");

function Category(props) {
  return <div className="category">
    {props.state !== "allOpen" ?
      (
        <div className="empty-project" />
      ) :
      (
        <div className="project-gallery-container">
          <h1>All</h1>
        </div>
      )
    }
    {props.state !== "fullStackOpen" ?
      (
        <div className="empty-project" />
      ) :
      (
        <div className="project-gallery-container">
          {fullStackJsx}
        </div>
      )
    }
    {props.state !== "wordPressOpen" ?
      (
        <div className="empty-project" />
      ) :
      (
        <div className="project-gallery-container">
          {wordPressJsx}
        </div>
      )
    }
    {props.state !== "frontEndOpen" ?
      (
        <div className="empty-project" />
      ) :
      (
        <div className="project-gallery-container">
          {frontEndJsx}
        </div>
      )
    }
  </div>;
}

export default Category;

