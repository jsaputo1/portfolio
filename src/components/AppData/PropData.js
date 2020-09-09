import React from "react";
import Card from "../Card/Card";
const { frontEndProjects, fullStackProjects, wordPressProjects } = require("../../data/projects");
const { githubLink, email, linkedIn } = require("./Variables");

export const headerProps = {
  title: "John Saputo",
  githubLink: githubLink,
  email: email,
  linkedIn: linkedIn,
  headerLink: "#top",
};


export const heroProps = {
  name: "John Saputo",
  tagline: "I'm a web developer"
};


export const fullStackJsx =
  Object.keys(fullStackProjects).map(function (key) {
    return <Card
      title={fullStackProjects[key].title}
      demoLink={fullStackProjects[key].demoLink}
      githubLink={fullStackProjects[key].githubLink}
      thumbnail={fullStackProjects[key].thumbnail}
      description={fullStackProjects[key].description}
      technologies={fullStackProjects[key].technologies}
      notes={fullStackProjects[key].notes}
    />;
  });

export const wordPressJsx =
  Object.keys(wordPressProjects).map(function (key) {
    return <Card
      title={wordPressProjects[key].title}
      demoLink={wordPressProjects[key].demoLink}
      githubLink={wordPressProjects[key].githubLink}
      thumbnail={wordPressProjects[key].thumbnail}
      description={wordPressProjects[key].description}
      technologies={wordPressProjects[key].technologies}
      notes={wordPressProjects[key].notes}
      state={true}
    />;
  });

export const frontEndJsx =
  Object.keys(frontEndProjects).map(function (key) {
    return <Card
      title={frontEndProjects[key].title}
      demoLink={frontEndProjects[key].demoLink}
      githubLink={frontEndProjects[key].githubLink}
      thumbnail={frontEndProjects[key].thumbnail}
      description={frontEndProjects[key].description}
      technologies={frontEndProjects[key].technologies}
      notes={frontEndProjects[key].notes}
    />;
  });
