import React from "react";
import Nav from "./Nav";
import Category from "../Category/Category"

const navObject = {
  title: "Word Press",
};

export default {
  title: "Nav",
  component: Nav,
};

export const Default = () => <Nav>
  <Category />


</Nav>



Default.story = {
  name: "Default",
};

