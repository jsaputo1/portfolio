import React, { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
// import { frontEndProjects, fullStackProjects, wordPressProjects}  from "../data/projects";
const { frontEndProjects } = require("../data/projects");
const { fullStackProjects } = require("../data/projects");
const { wordPressProjects } = require("../data/projects");

function App() {

  //Set state for portfolio categories
  const [frontEndOpen, setFrontEndOpen] = useState(true);
  const toggleFrontEnd = () => setFrontEndOpen(prevState => !prevState);

  const [fullStackOpen, setToggleFullStack] = useState(true);
  const toggleFullStack = () => setToggleFullStack(prevState => !prevState);

  const [wordPressOpen, setWordPressOpen] = useState(true);
  const toggleWordPress = () => setWordPressOpen(prevState => !prevState);

  //Variables for header
  const githubLink = "https://github.com/jsaputo1/";
  const email = "jsaputo1@gmail.com";

  //Category header positions
  const open = "fas fa-chevron-down";
  const closed = "fas fa-chevron-right";


  const frontEndJsx =
    Object.keys(frontEndProjects).map(function (key) {
      return <Card
        title={frontEndProjects[key].title}
        demoLink={frontEndProjects[key].demoLink}
        githubLink={frontEndProjects[key].githubLink}
        thumbnail={frontEndProjects[key].thumbnail}
        description={frontEndProjects[key].description}
      />;
    });

  const fullStackJsx =
    Object.keys(fullStackProjects).map(function (key) {
      return <Card
        title={fullStackProjects[key].title}
        demoLink={fullStackProjects[key].demoLink}
        githubLink={fullStackProjects[key].githubLink}
        thumbnail={fullStackProjects[key].thumbnail}
        description={fullStackProjects[key].description}
      />;
    });

  const wordPressJsx =
    Object.keys(wordPressProjects).map(function (key) {
      return <Card
        title={wordPressProjects[key].title}
        demoLink={wordPressProjects[key].demoLink}
        githubLink={wordPressProjects[key].githubLink}
        thumbnail={wordPressProjects[key].thumbnail}
        description={wordPressProjects[key].description}
      />;
    });

  const heroJsx =
    <Hero
      title={"John Saputo"}
      tag={"Web Developer"}
      gitHubLink={githubLink}
      email={email}
      article={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ante ante. Nulla facilisi. Proinvitae libero sapien. Mauris at pretium ipsum, at eleifend velit. Donec lorem dui, tempus ac dignissim eget, porta et justo. Praesent eget laoreet elit, nec congue ante.."}
      image={"/images/hero-banner3.png"}
    />;

  return (
    <div className="App">
      <div className="App-header">
        <Header
          title="John Saputo"
          githubLink={githubLink}
          email={email}
        />
      </div>
      <div className="container"> 
        <section className="hero">
          {heroJsx}
        </section>
        <section className="word-press-projects slide-up">
          {wordPressOpen === true ?
            (
              <div>
                <Category title="Word Press" toggle={toggleWordPress} position={open} />
                <div class="project-container slide-up">
                  {wordPressJsx}
                </div>
              </div>
            ) :
            (
              <div>
                <Category title="Word Press" toggle={toggleWordPress} position={closed} />
                < section class="word-press-projects slide-up" />
              </div>
            )
          }
        </section>
        <section className="full-stack-projects">
          {fullStackOpen === true ?
            (
              <div>
                <Category title="Full Stack" toggle={toggleFullStack} position={open} />
                <div class="project-container">
                  {fullStackJsx}
                </div>
              </div>
            ) :
            (
              <div>
                <Category title="Full Stack" toggle={toggleFullStack} position={closed} />
                < section class="full-stack-projects" />
              </div>
            )
          }
        </section>
        <section className="front-end-projects">
          {frontEndOpen === true ?
            (
              <div>
                <Category title="Front End" toggle={toggleFrontEnd} position={open} />
                <div class="project-container">
                  {frontEndJsx}
                </div>
              </div>
            ) :
            (
              <div>
                <Category title="Front End" toggle={toggleFrontEnd} position={closed} />
                < section class="front-end-projects" />
              </div>
            )
          }
        </section>
      </div>
    </div>
  );

}
export default App;

