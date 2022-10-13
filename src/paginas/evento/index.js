import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import "./index.css";
import "../ampliacion/index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
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
    this.setState({ dateStart: start, dateEnd: end });
  };

  render() {
    const { datosPersonaje, e } = this.props.router.location.state;
    const { eventos } = this.state;
    const { dateStart, dateEnd } = this.state;

    return (
      <div className="Evento">
        {eventos.map((e, key) => (
          <div className="d-flex justify-content-center">
            <div className="Perfil m-5">
              <Card style={{ width: "50rem" }}>
                <Card.Img variant="top" src={`${e.thumbnail.path}.${e.thumbnail.extension}`} />

                <Card.Body>
                  <Card.Title>{datosPersonaje.name}</Card.Title>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{e.description}</ListGroup.Item>
                  <ListGroup.Item>Inicio el {dateStart.date}</ListGroup.Item>
                  <ListGroup.Item>Finalizó el {dateEnd.date}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <div className="d-flex">
                    <Stack gap={1}>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Participaron</Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              {e.characters.items.map((x, key) => (
                                <li>{x.name}</li>
                              ))}
                            </ul>
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
        ))}
      </div>
    );
  }
}

export default withRouter(Ampliacion);
