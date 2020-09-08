import React, { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import "./Category.scss";

function Category(props) {

  console.log("Category props", props)

  const {
    state,
    setCategory
  } = useApplicationData();

  console.log("Category state", state)

  return <div>
    <li className=
      {state.category !== props.name ? "nav-list-item" : "nav-list-item active"}
      onClick={() => {
        props.toggleOff();
        props.toggleCategory();
        setCategory(props.name)
      }}>
      {props.name}</li>
  </div>;
}

export default Category;

