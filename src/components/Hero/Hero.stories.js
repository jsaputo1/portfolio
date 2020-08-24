import React from "react";
import Hero from "./Hero";

const heroObject = {
  title: "John Saputo",
  tag: "Web Developer",
  gitHubLink: "https://www.github.com/jsaputo1",
  email: "jsaputo1@gmail.com",
  article: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ante ante. Nulla facilisi. Proin vitae libero sapien. Mauris at pretium ipsum, at eleifend velit. Donec lorem dui, tempus ac dignissim eget, porta et justo. Praesent eget laoreet elit, nec congue ante.."
};

export default {
  title: "Hero",
  component: Hero,
};

export const Default = () => <Hero
  title={heroObject.title}
  tag={heroObject.tag}
  gitHubLink={heroObject.gitHubLink}
  email={heroObject.email}
  article={heroObject.article}
  image="/images/hero-banner3.png"

/>;

Default.story = {
  name: "Default",
};
