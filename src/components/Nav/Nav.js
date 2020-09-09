import React, { useState } from "react";
import "./Nav.scss";

function Nav(props) {

  const [allOpen, setAllOpen] = useState(true);
  const toggleAllOpen = () => setAllOpen(true);
  const toggleAllClosed = () => setAllOpen(false);

  const [fullStackOpen, setFullStackOpen] = useState(false);
  const toggleFullStackOpen = () => setFullStackOpen(true);
  const toggleFullStackClosed = () => setFullStackOpen(false);

  const [wordPressOpen, setWordPressOpen] = useState(false);
  const toggleWordPressOpen = () => setWordPressOpen(true);
  const toggleWordPressClosed = () => setWordPressOpen(false);

  const [frontEndOpen, setFrontEndOpen] = useState(false);
  const toggleFrontEndOpen = () => setFrontEndOpen(true);
  const toggleFrontEndClosed = () => setFrontEndOpen(false);

  const toggleOff = () => {
    toggleAllClosed();
    toggleFullStackClosed();
    toggleWordPressClosed();
    toggleFrontEndClosed();
  };

  return (
    <nav>
      <ul>
        <li className=
          {!allOpen ? "nav-list-item" : "nav-list-item active"}
          onClick={() => {
            toggleOff();
            toggleAllOpen();
            props.setCategory("default");
          }}
        >
          All</li>
        <li className=
          {!fullStackOpen ? "nav-list-item" : "nav-list-item active"}
          onClick={() => {
            toggleOff();
            toggleFullStackOpen();
            props.setCategory("fullStackOpen");
          }}>
          Full Stack</li>
        <li className=
          {!wordPressOpen ? "nav-list-item" : "nav-list-item active"}
          onClick={() => {
            toggleOff();
            toggleWordPressOpen();
            props.setCategory("wordPressOpen");
          }}>
          Word Press</li>
        <li className={!frontEndOpen ? "nav-list-item" : "nav-list-item active"}
          onClick={() => {
            toggleOff();
            toggleFrontEndOpen();
            props.setCategory("frontEndOpen");
          }}
        >
          Front End</li>
      </ul >
    </nav >
  );
}


export default Nav;
