import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiMarvel } from "../../api";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

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
  };

  render() {
    if (this.props.router.location.datosPersonaje) {
      const datosPersonaje = this.props.router.location.state;
    }
    const { personajes } = this.state;

    return (
      <div className="Home p-5">
        {/* <h2 className="text-center text-uppercase font-weight-bold fs-1 mb-5">Personajes</h2> */}
        <div className="d-flex flex-wrap">
          {personajes
            .map((e, key) => (
              <div className="m-3">
                <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`${e.thumbnail.path}.${e.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    {/* <Card.Text>{e.description}</Card.Text> */}
                    <div className="d-flex">
                      <Stack gap={1}>
                        <Button variant="primary" onClick={() => this.navegarDetallePersonaje(e)} key={key.toString()}>
                          Ver más
                        </Button>
                        <Button variant="outline-secondary" href={e.urls[0].url} target="_blank">
                          Web oficial
                        </Button>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
            .slice(1 - 40)}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
