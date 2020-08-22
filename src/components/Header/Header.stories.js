import React from "react";
import Header from "./Header";

const headerObject = {
  title: "John Saputo",
  githubLink: "https://github.com/jsaputo1/",
  email: "jsaputo1@gmail.com",

};


export default {
  title: "Header",
  component: Header,
};

export const Default = () => <Header
  title={headerObject.title}
  email={headerObject.email}
  githubLink={headerObject.githubLink}

/>;


Default.story = {
  name: "Default",
};