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
    setCategory
  } = useApplicationData();


  //Set state for portfolio categories
  const [frontEndOpen, setFrontEndOpen] = useState(false);
  const toggleFrontEnd = () => setFrontEndOpen(prevState => !prevState);
  const openFrontEnd = () => setFrontEndOpen(true);

  const [fullStackOpen, setFullStackOpen] = useState(false);
  const toggleFullStack = () => setFullStackOpen(prevState => !prevState);
  const openFullStack = () => setFullStackOpen(true);

  const [wordPressOpen, setWordPressOpen] = useState(false);
  const toggleWordPress = () => setWordPressOpen(prevState => !prevState);
  const openWordPress = () => setWordPressOpen(true);

  return (
    <div className="App" id="top">
      <div className="App-header">
        <Header {...headerProps} openFrontEnd={openFrontEnd} openFullStack={openFullStack} openWordPress={openWordPress} />
      </div>
      <section className="hero">
        <Hero {...heroProps} />
      </section>
      <div className="container">
        <div>
          <Nav setCategory={setCategory}></Nav>
        </div>
        <section className="project-gallery">
          <Category state={state.category} />
        </section>
      </div>
    </div>
  );

}
export default App;

