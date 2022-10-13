import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="NotFound">
          <h2>Página no encontrada</h2>
        </div>
        <div className="NotFound">
          <Link to="/">Ir a Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
