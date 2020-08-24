import React from "react";
import "./Category.scss";

function Category(props) {
  return <div className="category-header">
    <hr />
    <h3>{props.title}</h3>
    <hr />
    <a href={props.idLink}><i class={props.position} onClick={props.toggle}></i></a>
  </div>;
}

export default Category;

