import React from "react";
import "./Header.scss";

function Header(props) {
  return <header className="header-container">
    <div className="left-side-header">
      <h3>John Saputo</h3>
    </div>
    <div className="right-side-header">
      <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
      <span><a href={props.email} target="new"><i class="fas fa-envelope-square"></i></a></span>
    </div>
  </header>;
}

export default Header;

