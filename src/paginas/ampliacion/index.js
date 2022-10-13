import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

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
    return (
      <div className="d-flex justify-content-center">
        <div className="Perfil m-5">
          <Card style={{ width: "50rem" }}>
            <Card.Img variant="top" src={`${datosPersonaje.thumbnail.path}.${datosPersonaje.thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{datosPersonaje.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cantidad de comics: {datosPersonaje.comics.available}</ListGroup.Item>
              <ListGroup.Item>Cantidad de series: {datosPersonaje.series.available}</ListGroup.Item>
              <ListGroup.Item>Cantidad de historias: {datosPersonaje.stories.available}</ListGroup.Item>
              <ListGroup.Item>Cantidad de eventos: {datosPersonaje.events.available}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <div className="d-flex">
                <Stack gap={1}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Eventos</Accordion.Header>
                      <Accordion.Body>
                        {datosPersonaje.events.items.map((e, key) => (
                          <div>
                            <div>
                              <p onClick={() => this.navegarDetalleEvento(e)} key={key.toString()}>
                                {e.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button variant="outline-secondary">
                    <Link to="/">Ver todos los personajes</Link>
                  </Button>
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Ampliacion);
