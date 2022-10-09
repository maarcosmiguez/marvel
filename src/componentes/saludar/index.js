import React, { Component } from "react";

import Container from "../../componentes/container";
import "./index.css";

class Saludar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Saludar">
        <span>hola</span>
      </div>
    );
  }
}

export default Saludar;
