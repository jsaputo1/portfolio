import React from 'react';
import "./App.scss";
import Card from "./Card/Card";
import frontEndProjects from "../data/projects";
// import fullStackProjects from "../data/projects";
// import wordPressProjects from "../data/projects";

function App() {

  //Front End Code
  let frontEndData = {};
  for (let key in frontEndProjects) {
    frontEndData = frontEndProjects[key];
  }
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

  // let backEndData = {};
  // for (let key in backEndProjects) {
  //   backEndData = backEndProjects[key];
  // }
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

  // let wordPressData = {};
  // for (let key in wordPressProjects) {
  //   wordPressData = wordPressProjects[key];
  // }
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
      <header className="App-header">
      </header>
      <section class="front-end-projects">
        {frontEndJsx}
      </section>
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

