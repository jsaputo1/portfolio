import React, { useState } from "react";
import "./Header.scss";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Header(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  window.onscroll = function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 470) {
      props.setSticky(false);
    }
    else if (window.pageYOffset > 850) {
      props.setSticky(true);
    }
  };

  return <header className={props.sticky ? "header-container sticky" : "header-container"}>
    <div className="left-side-header">
      <a href={props.headerLink}><h3>{props.title}</h3></a>
    </div>
    <div className="left-side-header-mobile">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
          <i class="fas fa-bars"></i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><a href="#full-stack" onClick={() => { props.openFullStack(); }}>Full Stack</a></DropdownItem>
          <DropdownItem ><a href="#word-press" onClick={() => { props.openWordPress(); }}>Word Press</a></DropdownItem>
          <DropdownItem><a href="#front-end" onClick={() => { props.openFrontEnd(); }}>Front End</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div className="right-side-header">
      <span><a href={props.githubLink} target="new"><i class="fab fa-github"></i></a></span>
      <span><a href={props.email} target="new"><i class="fas fa-envelope-square"></i></a></span>
      <span><a href={props.linkedIn} target="new"><i class="fab fa-linkedin"></i></a></span>
    </div>
  </header>;
}

export default Header;

