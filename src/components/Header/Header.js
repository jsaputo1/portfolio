import React from "react";
import "./Header.scss";

function Header(props) {

  window.onscroll = function () {
    const body = document.body;
    if (window.pageYOffset < 680) {
      props.setSticky(false);
      body.classList.remove("is-sticky-header");
    }
    else if (window.pageYOffset > 680) {
      props.setSticky(true);
      body.classList.add("is-sticky-header");
    }
  };

  return <header className={props.sticky ? "header-container sticky" : "header-container"}>
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

