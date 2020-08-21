import React from "react";
import "./Header.scss";

function Header(props) {
  return <header>
    <div className="left-side-header">
      <h3>John Saputo</h3>
    </div>
    <div className="right-side-header">
      <span>Link</span>
      <span>Link</span>
      <span>Link</span>
    </div>

  </header>;
}

export default Header;