import React from "react";
import "./Category.scss";

function Category(props) {
  return <div className="category-header">
    <hr />
    <h3>{props.title}</h3>
    <hr />
    <i class={props.position} onClick={props.toggle} />
  </div>;
}

export default Category;

