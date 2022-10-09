import React, { Component } from "react";
import ejercicio from "../../iconos/exercise.png";
import alimentacion from "../../iconos/food.png";
import agua from "../../iconos/water.png";
import "./index.css";

class DetallePersona extends Component {
  render() {
    const { data, hizoClick } = this.props;
    const { id, mail, nombre, esPremium, foto, puntosEjercicio, puntosAgua, puntosComida } = data;
    const puntosTotales = puntosAgua + puntosComida + puntosEjercicio;
    return (
      <div onClick={() => hizoClick(data)} className="DetallePersona">
        <div className="id-content">
          <span>{id}</span>
        </div>
        <div>
          <img className="img-circle" src={foto} alt={mail} />
        </div>
        <div className="detalles">
          <div className="container-nombre">
            <span>{nombre}</span>
          </div>
          <div className="row">
            <div className="container-puntos">
              <div className="column">
                <img src={ejercicio} alt="" />
                <span>{puntosEjercicio}</span>
              </div>
              <div className="column">
                <img src={agua} alt="" />
                <span>{puntosAgua}</span>
              </div>
              <div className="column">
                <img src={alimentacion} alt="" />
                <span>{puntosComida}</span>
              </div>
            </div>
            <div className="column">
              <span>Total</span>
              <span>{puntosTotales}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetallePersona;
