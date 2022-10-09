import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { datosPersonaje } = this.props.router.location.state;
    return (
      <div className="Perfil">
        <h2>PERFIL</h2>
        <Link to="/">Ir a Home</Link>
        <p>{datosPersonaje.name}</p>
        <p>{datosPersonaje.id}</p>
      </div>
    );
  }
}

export default withRouter(Perfil);
