import React from "react";
import "./Header.scss";

function Header(props) {

  window.onscroll = function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 821) {
      props.setSticky(false);
    }
    else if (window.pageYOffset > 804) {
      props.setSticky(true);
    }
  };

  return <header className={props.sticky ? "header-container sticky slide-down" : "header-container"}>
    <div className="left-side-header">
      <a href={props.headerLink}><h3>{props.title}</h3></a>
    </div>
    <div className="right-side-header">
      <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
      <span><a href={props.email} target="new"><i class="fas fa-envelope-square"></i></a></span>
      <span><a href={props.linkedIn} target="new"><i class="fab fa-linkedin"></i></a></span>
    </div>
  </header>;
}

export default Header;

