import React, { Component } from "react";

import logo from "../../logo.svg";
import "./index.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Marvel</p>
        <div className="links"></div>
      </header>
    );
  }
}

export default Header;
