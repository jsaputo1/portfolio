import React from 'react';
import "./App.scss";
import Card from "./Card/Card";
import projectDataObject from "../data/projects";

function App() {

  let data = {};
  for (let key in projectDataObject) {
    let newObj = projectDataObject[key];
    for (let key in newObj) {
      data = newObj[key];
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {Object.keys(data).map(function (key) {
        return <Card
          title={data[key].title}
          demoLink={data[key].demoLink}
          githubLink={data[key].githubLink}
          thumbnail={data[key].thumbnail}
          description={data[key].description}
        />;
      })}
    </div>
  );

}
export default App;

