import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
//import platziconfLogoImage from '../images/platziconf-logo.svg'
import spaceConfLogoImage from "../images/space.png"
// import astronautsImage from '../images/astronauts.svg';
import DrStone from "../images/Dr.Stone.jpg"

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
                {/* <h1>Badge Management System</h1> */}
                <h1>Space Badges: Registrate Para la nueva convención espacial</h1>
                <Link className="btn btn-primary btn-start" to="/Curso-React-JS-platzi-badges/badges">Start</Link>
              </div>

            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                // src={astronautsImage}
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
