import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiMarvel } from "../../api";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { personajes: [] };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(`${apiMarvel}`);
    const data = await response.json();
    const dataMarvel = data.data.results;
    this.setState({ personajes: dataMarvel });
  };

  navegarDetallePersonaje = (e) => {
    const { router } = this.props;
    router.navigate("/detalle", { state: { datosPersonaje: e } });
    // const idRoute = e.id;
    // router.navigate(`/${idRoute}`, { state: { datosPersonaje: e } });
  };

  render() {
    if (this.props.router.location.datosPersonaje) {
      const datosPersonaje = this.props.router.location.state;
    }
    // console.log("45 vengo del evento", datosPersonaje);
    const { personajes } = this.state;
    console.log("los personajes son", personajes);

    return (
      <div className="Home">
        {/* <p>Me gusto {datosPersonaje.name}</p> */}
        <h2>Personajes de Marvel</h2>
        {personajes
          .map((e, key) => (
            <div>
              <div>
                <p onClick={() => this.navegarDetallePersonaje(e)} key={key.toString()}>
                  {e.name}

                  {console.log("e", e.name)}
                  {/* {console.log("datos", datosPersonaje.name)} */}
                </p>
                <a href={e.urls[0].url} target="_blank">
                  Visitar la web oficial del personaje
                </a>
              </div>
              <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`}></img>
            </div>
          ))
          .slice(1 - 15)}
      </div>
    );
  }
}

export default withRouter(Home);
