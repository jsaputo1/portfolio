import React from "react";
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
  description: "Quotes on Dev is a multi page web app that shows random developer themed quotes, and also allows registered users to submit their own quotes. The app uses Word Press as the content management system, and is fully responsive with breakpoints for Tablet and Mobile."
};

export const Default = () => <Card
  title={cardObject.title}
  demoLink={cardObject.demoLink}
  githubLink={cardObject.githubLink}
  thumbnail={cardObject.thumbnail}
  description={cardObject.description}

/>;

Default.story = {
  name: "Default",
};