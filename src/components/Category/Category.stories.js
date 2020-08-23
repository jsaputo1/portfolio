import React from "react";
import Category from "./Category";

const categoryObject = {
  title: "Word Press",
};

export default {
  title: "Category",
  component: Category,
};

export const Default = () => <Category
  title={categoryObject.title}

/>;

Default.story = {
  name: "Expanded",
};

export const Collapsed = () => <Category
  title={categoryObject.title}

/>;

Collapsed.story = {
  name: "Collapsed",
};
