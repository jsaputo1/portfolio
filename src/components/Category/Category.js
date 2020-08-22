import React, { useState } from "react";
import "./Category.scss";

function Category(props) {
  return <div className="category-header">
    <h3>{props.title}</h3>
    <hr />
    <i class="fas fa-chevron-down" onClick={props.toggle}  />
  </div>;
}

export default Category;

