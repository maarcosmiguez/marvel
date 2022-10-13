import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";
import { parametrosComunes } from "../../api";

class Ampliacion extends Component {
  constructor(props) {
    super(props);
    this.state = { eventos: [] };
  }

  componentDidMount() {
    this.getDataEvento();
  }

  getDataEvento = async () => {
    const { datosPersonaje } = this.props.router.location.state;
    const response = await fetch(`${datosPersonaje.resourceURI}?${parametrosComunes}`);
    const data = await response.json();
    const dataEvento = data.data.results;
    this.setState({ eventos: dataEvento });
    this.formatDate(dataEvento[0].start, dataEvento[0].end);
  };

  navegarHome = (x) => {
    const { router } = this.props;
    router.navigate("/", { state: { datosPersonaje: x } });
    console.log("devuelvo a home", x);
  };

  formatDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    start = {
      date: startDate.toLocaleDateString(),
    };

    end = {
      date: endDate.toLocaleDateString(),
    };
    console.log("formatDate", start, end, startDate, endDate);
    this.setState({ dateStart: start, dateEnd: end });
  };

  render() {
    const { datosPersonaje, e } = this.props.router.location.state;
    const { eventos } = this.state;
    const { dateStart, dateEnd } = this.state;
    console.log("en render", eventos);
    console.log("en render date", dateStart, dateEnd);
    console.log("datos personaje son", datosPersonaje);
    return (
      <div className="Evento">
        <Link to="/">Ir a Home</Link>
        {eventos.map((e, key) => (
          <div>
            <div>
              <h2 key={key.toString()}>{datosPersonaje.name}</h2>
              <a href={e.urls[0].url} target="_blank">
                Web del evento
              </a>
            </div>
            <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`}></img>

            <div>
              <h6>Inicio el {dateStart.date}</h6>
              <h6>Finalizó el {dateEnd.date}</h6>
            </div>

            <div>
              <p> {e.description}</p>

              <h6>Participaron:</h6>

              <ul>
                {e.characters.items.map((x, key) => (
                  <li onClick={() => this.navegarHome(x)} key={key.toString()}>
                    {x.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Ampliacion);
