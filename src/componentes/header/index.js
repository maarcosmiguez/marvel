import React, { Component } from "react";
import "./index.css";
import logo from "../../iconos/logotipo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <div className="px-3 py-2 text-white App-header">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center  space-between">
                <img src={logo}></img>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <a className="nav-link text-dark">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                      Customers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
