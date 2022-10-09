import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Home from "./paginas/home";
import Perfil from "./paginas/perfil";
import Contacto from "./paginas/contacto";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
