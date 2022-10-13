import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Home from "./paginas/home";
import Ampliacion from "./paginas/ampliacion";
import Evento from "./paginas/evento";
import { apiMarvel } from "./api";
import "./App.css";
import NotFound from "./paginas/404";

class App extends Component {
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
    const dataApi = data.data.results;
    this.setState({ personajes: dataApi });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle" element={<Ampliacion />} />
            <Route path="/evento" element={<Evento />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
