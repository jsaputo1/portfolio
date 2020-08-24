import React from "react";
import "./Category.scss";

function Category(props) {
  return <div className="category-header">
    <hr />
    <h3>{props.title}</h3>
    <hr />
    <div className="anchor">
      <a href={props.idLink}><i class={props.position} onClick={props.toggle}></i></a>
    </div>
  </div>;
}

export default Category;

