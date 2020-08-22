import React, { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Category from "./Category/Category";
import frontEndProjects from "../data/projects";
// import fullStackProjects from "../data/projects";
// import wordPressProjects from "../data/projects";
import retrieveData from "../helpers/retrieveData";


function App() {

  //Set category state
  const [categoryOpen, setCategoryOpen] = useState(true);
  const toggle = () => setCategoryOpen(prevState => !prevState);

  //Variables for header
  const githubLink = "https://github.com/jsaputo1/";
  const email = "jsaputo1@gmail.com";

  const frontEndData = retrieveData(frontEndProjects);
  // const backendData = retrieveData(backendProjects);
  // const wordPressData = retrieveData(wordPressProjects);

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

  // const backEndJsx =
  //   Object.keys(frontEndData).map(function (key) {
  //     return <Card
  //       title={frontEndData[key].title}
  //       demoLink={frontEndData[key].demoLink}
  //       githubLink={frontEndData[key].githubLink}
  //       thumbnail={frontEndData[key].thumbnail}
  //       description={frontEndData[key].description}
  //     />;
  //   })

  // const wordPressJsx =
  //   Object.keys(frontEndData).map(function (key) {
  //     return <Card
  //       title={frontEndData[key].title}
  //       demoLink={frontEndData[key].demoLink}
  //       githubLink={frontEndData[key].githubLink}
  //       thumbnail={frontEndData[key].thumbnail}
  //       description={frontEndData[key].description}
  //     />;
  //   });


  return (
    <div className="App">
      <div className="App-header">
        <Header
          title="John Saputo"
          githubLink={githubLink}
          email={email}
        />
      </div>
      <Category title="Front End" toggle={toggle} />
      {categoryOpen === true ?
        (<section class="front-end-projects">
          {frontEndJsx}
        </section>)
        : (< section class="front-end-projects" />)
      }
      <section class="back-end-projects">
        {/* {backEndJsx} */}
      </section>
      <section class="wordPress-projects">
        {/* {wordPressJsx} */}
      </section>
    </div>
  );

}
export default App;

