import React, { useState } from "react";
import Header from "./Header/Header";
// import Card from "./Card/Card";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Slider from "react-slick";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { headerProps, wordPressJsx, fullStackJsx, frontEndJsx, heroProps, sliderSettings } = require("./AppData/PropData");
const { open, closed } = require("./AppData/Variables");

function App() {

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
    <div className="App">
      <div className="App-header">
        <Header {...headerProps} openFrontEnd={openFrontEnd} openFullStack={openFullStack} openWordPress={openWordPress} />
      </div>
      <div className="container">
        <section className="hero">
          <Hero {...heroProps} />
        </section>
        <section className="word-press-projects" id="word-press">
          {!wordPressOpen ?
            (
              <div className="slide-up">
                <Category title="Word Press" toggle={toggleWordPress} position={closed} idLink={"#word-press"} />
                <div className="word-press-projects empty-project" />
              </div>
            ) :
            (
              <div>
                <Category title="Word Press" toggle={toggleWordPress} position={open} idLink={"#word-press"} />
                <Slider {...sliderSettings}>
                  {wordPressJsx}
                </Slider>
              </div>
            )
          }
        </section>
        <section className="full-stack-projects" id="full-stack">
          {!fullStackOpen ?
            (
              <div className="slide-up">
                <Category title="Full Stack" toggle={toggleFullStack} position={closed} />
                <div class="full-stack-projects empty-project" />
              </div>
            ) :
            (
              <div>
                <Category title="Full Stack" toggle={toggleFullStack} position={open} idLink={"#full-stack"} />
                <Slider {...sliderSettings}>
                  {fullStackJsx}
                </Slider>
              </div>
            )
          }
        </section>
        <section className="front-end-projects" id="front-end">
          {!frontEndOpen ?
            (
              <div className="slide-up">
                <Category title="Front End" toggle={toggleFrontEnd} position={closed} idLink={"#front-end"} />
                <div class="front-end-projects empty-project" />
              </div>
            ) :
            (
              <div>
                <Category title="Front End" toggle={toggleFrontEnd} position={open} idLink={"#front-end"} />
                <Slider {...sliderSettings}>
                  {frontEndJsx}
                </Slider>
              </div>
            )
          }
        </section>
      </div>
    </div>
  );

}
export default App;

