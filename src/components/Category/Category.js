import React from "react";
import "./Category.scss";

function Category(props) {
  return <div className="category-header">
    <hr />
    <a href={props.idLink}> <h3 onClick={props.toggle}>{props.title}</h3></a>
    <hr />
    <a href={props.idLink}><i class={props.position} onClick={props.toggle}></i></a>
  </div>;
}

export default Category;

