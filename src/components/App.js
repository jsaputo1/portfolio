import React, { useState } from "react";
import Header from "./Header/Header";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
const { headerProps, heroProps, } = require("./AppData/PropData");

function App() {

  const {
    state,
    setCategory,
    setSticky
  } = useApplicationData();

  //Set state for portfolio categories
  const [frontEndOpen] = useState(false);
  const openFrontEnd = () => frontEndOpen(true);
  const [fullStackOpen] = useState(false);
  const openFullStack = () => fullStackOpen(true);
  const [wordPressOpen] = useState(false);
  const openWordPress = () => wordPressOpen(true);

  return (
    <div className="App">
      <section className="hero">
        <Hero {...heroProps} />
      </section>
      <div className="App-header">
        <Header
          {...headerProps}
          openFrontEnd={openFrontEnd}
          openFullStack={openFullStack}
          openWordPress={openWordPress}
          sticky={state.sticky}
          setSticky={setSticky} />
      </div>
      <div className="container" id="top">
        <div id="projects">
          <Nav setCategory={setCategory} />
        </div>
        <section className="project-gallery">
          <Category state={state.category} />
        </section>
      </div>
    </div>
  );

};
export default App;

