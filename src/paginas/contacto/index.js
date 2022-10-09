import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Contacto">
        <h2>CONTACTO</h2>
        <Link to="/">Ir a Home</Link>
      </div>
    );
  }
}

export default Contacto;
