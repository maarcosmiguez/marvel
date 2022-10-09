import React, { Component } from "react";

import "./index.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNombres = () => {
    const { nombres } = this.props;
    const nuevoArray = nombres.map((i, index) => {
      return <h6 key={index.toString()}>{i}</h6>;
    });

    return nuevoArray;
  };

  renderPersona = () => {
    const { persona } = this.props;
    const { nombre, edad, nacionalidad } = persona;
    return (
      <div>
        <h2>Persona</h2>
        <p>{nombre}</p>
        <p>{edad}</p>
        <p>{nacionalidad}</p>
      </div>
    );
  };

  render() {
    const { children, color, titulo, mostrarIzquierda } = this.props;
    //console.log("mostrarIzquierda", mostrarIzquierda);
    return (
      <div className={`Container ${color}`}>
        <h2>{titulo}</h2>
        {this.renderNombres()}
        {this.renderPersona()}
        <div className="row">
          {mostrarIzquierda && <div>izquierda</div>}
          <div>{children}</div>
        </div>
      </div>
    );
  }
}

export default Container;
