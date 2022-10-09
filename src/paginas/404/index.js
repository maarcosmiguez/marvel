import React, { Component } from "react";
import "./index.css";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="NotFound">
        <h2>404 NOT FOUND</h2>
      </div>
    );
  }
}

export default NotFound;
