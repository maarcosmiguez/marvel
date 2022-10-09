import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../../componentes/container";
import Container2 from "../../componentes/container2";
import { people } from "../../data";
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
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3&events=321,314,315"
    );
    const data = await response.json();
    this.setState({ personajes: data.data.results });
  };

  navegarDetallePersonaje = (p) => {
    console.log("personaje:", p);
    const { router } = this.props;
    router.navigate("/perfil", { state: { datosPersonaje: p } });
  };

  render() {
    const { personajes } = this.state;
    return (
      <div className="Home">
        <h2>Hola soy home</h2>
        <Link to="/contacto">Ir a contacto</Link>
        <Container2 personas={people} />
        {personajes.map((p, key) => (
          <p onClick={() => this.navegarDetallePersonaje(p)} key={key.toString()}>
            {p.name + " " + p.id}
          </p>
        ))}
      </div>
    );
  }
}

export default withRouter(Home);
