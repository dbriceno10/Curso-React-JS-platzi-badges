import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
// import spaceConfLogoImage from "../images/space.png";
import spaceConfLogoImage from "../images/portal-transparent.png";
// import DrStone from "../images/Dr.Stone.jpg";
import DrStone from "../assets/images/logo@2x.png";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <div className="title-container">
                <img
                  src={spaceConfLogoImage}
                  alt="Space Conf Logo"
                  className="img-fluid mb-2 space-logo img-fluid"
                />
                <h1>
                  Space Badges: Trae a todos los personajes de Rick And Morty
                </h1>
                <Link className="btn btn-primary btn-start" to="/badges">
                  Start
                </Link>
              </div>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={DrStone}
                alt="Astronauts"
                className="img-fluid p-4 astronaut"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
