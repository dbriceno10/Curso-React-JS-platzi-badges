import React from "react"
import { Link } from "react-router-dom"
//import logo from "../images/logo.svg"
import logo from "../images/space.png"
import "./styles/Navbar.css"
class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/Curso-React-JS-platzi-badges/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="fw-light">Space</span>
                        <span className="fw-bold">Badges</span>
                    </Link>
                    {/* <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </a> */}
                </div>
            </div>

        )
    }
}

export default Navbar 