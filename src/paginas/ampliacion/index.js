import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";

class Ampliacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navegarDetalleEvento = (e) => {
    const { router } = this.props;
    router.navigate("/evento", { state: { datosPersonaje: e } });
  };

  render() {
    const { datosPersonaje } = this.props.router.location.state;
    console.log("ampliacion datos", datosPersonaje);
    return (
      <div className="Perfil">
        <Link to="/">Ir a Home</Link>

        <h2>{datosPersonaje.name}</h2>

        <img src={`${datosPersonaje.thumbnail.path}.${datosPersonaje.thumbnail.extension}`}></img>

        <p>{datosPersonaje.description}</p>
        <h4>Cantidad de comics: {datosPersonaje.comics.available}</h4>
        <h4>Cantidad de series: {datosPersonaje.series.available}</h4>
        <h4>Cantidad de historias: {datosPersonaje.stories.available}</h4>

        <div>
          <h4>Cantidad de eventos: {datosPersonaje.events.available}</h4>

          {datosPersonaje.events.items.map((e, key) => (
            <div>
              <div>
                <p onClick={() => this.navegarDetalleEvento(e)} key={key.toString()}>
                  {e.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Ampliacion);
