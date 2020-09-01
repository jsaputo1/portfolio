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

export const heroProps = {
  title: "John Saputo",
  tag: "Web Developer",
  gitHubLink: githubLink,
  email: email,
  linkedIn: linkedIn,
  article: " Welcome to my portfolio, I am a web developer based in Toronto, Canada. I created this site to showcase the projects I've developed. Check out some of my featured work below.",
  image: "/images/hero-banner3.png",
};


export const sliderSettings = {
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        dots: true,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
};
