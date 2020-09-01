import React, { useState } from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};


const cardObject = {
  title: "Quotes on Dev",
  demoLink: "https://www.johnsaputo.net/qod",
  githubLink: "https://github.com/jsaputo1/quotesondev",
  thumbnail: "http://localhost:6006/images/thumbnails/qod.png",
  description: "Quotes on Dev is a multi page web app that shows random developer themed quotes, and also allows registered users to submit their own quotes. The app uses Word Press as the content management system, and is fully responsive with breakpoints for Tablet and Mobile.",
  technologies: "PHP, SASS, jQuery, HTML, Gulp",
  notes: "New quotes can only be submitted by registered users. Registration has not been implemented yet, you are able to view the submit page but cannot register an account yet.",
  state: true,
};



export const Default = () => <Card
  thumbnail={cardObject.thumbnail}
/>;

Default.story = {
  name: "Default",
};

export const Hover = () =>
  <Card
    title={cardObject.title}
    demoLink={cardObject.demoLink}
    githubLink={cardObject.githubLink}
    thumbnail={cardObject.thumbnail}
    description={cardObject.description}
    technologies={cardObject.technologies}
    notes={cardObject.notes}
    state={cardObject.state} />;

Hover.story = {
  name: "Hover",
};
