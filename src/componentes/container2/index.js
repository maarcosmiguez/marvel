import React, { Component } from "react";
import DetallePersona from "../detallePersona";
import { withRouter } from "../../hooks/withRouter";

import "./index.css";

class Container2 extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0, ultimoClickeado: null };
  }

  hizoClick = (data) => {
    console.log(data.nombre);
    //this.irAPerfil(data);
    this.setState({ contador: this.state.contador + 1, ultimoClickeado: data });
  };

  irAPerfil = (persona) => {
    const { router } = this.props;
    router.navigate("/perfil", { state: { datosPersona: persona } });
  };

  render() {
    const { personas } = this.props;
    const { contador, ultimoClickeado } = this.state;
    return (
      <div className="Container2">
        <h6>{`Contador: ${contador}`}</h6>
        <h6>{`Ultimo Clickeado: ${JSON.stringify(ultimoClickeado)}`}</h6>
        {personas.map((p, index) => {
          return <DetallePersona hizoClick={this.hizoClick} key={index.toString()} data={p} />;
        })}
      </div>
    );
  }
}

export default withRouter(Container2);
