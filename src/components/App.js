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
              <div>
                <Category title="Word Press" toggle={toggleWordPress} position={closed} idLink={"#word-press"} />
                <div className="word-press-projects empty-project slide-up" />
              </div>
            ) :
            (
              <div>
                <Category title="Word Press" toggle={toggleWordPress} position={open} idLink={"#word-press"} />
                <div className="project-container-mobile">
                  {wordPressJsx}
                </div>
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
              <div>
                <Category title="Full Stack" toggle={toggleFullStack} position={closed} />
                <div class="full-stack-projects empty-project slide-up" />
              </div>
            ) :
            (
              <div>
                <Category title="Full Stack" toggle={toggleFullStack} position={open} idLink={"#full-stack"} />
                <div className="project-container-mobile">
                  {fullStackJsx}
                </div>
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
              <div>
                <Category title="Front End" toggle={toggleFrontEnd} position={closed} idLink={"#front-end"} />
                <div class="front-end-projects empty-project slide-up" />
              </div>
            ) :
            (
              <div>
                <Category title="Front End" toggle={toggleFrontEnd} position={open} idLink={"#front-end"} />
                <div className="project-container-mobile">
                  {frontEndJsx}
                </div>
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

