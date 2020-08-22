import React, { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Category from "./Category/Category";
import frontEndProjects from "../data/projects";
import fullStackProjects from "../data/projects";
import wordPressProjects from "../data/projects";
import retrieveData from "../helpers/retrieveData";


function App() {

  //Set state for portfolio categories
  const [frontEndOpen, setFrontEndOpen] = useState(true);
  const toggleFrontEnd = () => setFrontEndOpen(prevState => !prevState);
  const [backEndOpen, setBackEndOpen] = useState(true);
  const toggleBackEnd = () => setBackEndOpen(prevState => !prevState);
  const [wordPressOpen, setWordPressOpen] = useState(true);
  const toggleWordPress = () => setWordPressOpen(prevState => !prevState);

  //Variables for header
  const githubLink = "https://github.com/jsaputo1/";
  const email = "jsaputo1@gmail.com";

  const frontEndData = retrieveData(frontEndProjects);
  const fullStackData = retrieveData(fullStackProjects);
  const wordPressData = retrieveData(wordPressProjects);

  const frontEndJsx =
    Object.keys(frontEndData).map(function (key) {
      return <Card
        title={frontEndData[key].title}
        demoLink={frontEndData[key].demoLink}
        githubLink={frontEndData[key].githubLink}
        thumbnail={frontEndData[key].thumbnail}
        description={frontEndData[key].description}
      />;
    });

  const fullStackJsx =
    Object.keys(fullStackData).map(function (key) {
      return <Card
        title={fullStackData[key].title}
        demoLink={fullStackData[key].demoLink}
        githubLink={fullStackData[key].githubLink}
        thumbnail={fullStackData[key].thumbnail}
        description={fullStackData[key].description}
      />;
    })

  const wordPressJsx =
    Object.keys(wordPressData).map(function (key) {
      return <Card
        title={wordPressData[key].title}
        demoLink={wordPressData[key].demoLink}
        githubLink={wordPressData[key].githubLink}
        thumbnail={wordPressData[key].thumbnail}
        description={wordPressData[key].description}
      />;
    });


  return (
    <div className="App">
      <div className="App-header">
        <Header
          title="John Saputo"
          githubLink={githubLink}
          email={email}
        />
      </div>
      <Category title="Front End" toggle={toggleFrontEnd} />
      {frontEndOpen === true ?
        (<section class="front-end-projects">
          {frontEndJsx}
        </section>)
        : (< section class="front-end-projects" />)
      }
      <Category title="Full Stack" toggle={toggleBackEnd} />
      {backEndOpen === true ?
        <section class="full-stack-projects">
          {fullStackJsx}
        </section>
        : (<section class="full-stack-projects" />)
      }
      <Category title="Word Press" toggle={toggleWordPress} />
      {wordPressOpen === true ?
        <section class="word-press-projects">
          {wordPressJsx}
        </section>
        : (<section class="word-press-projects" />)
      }
    </div>
  );

}
export default App;

