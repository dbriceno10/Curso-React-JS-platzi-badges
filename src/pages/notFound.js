import React from "react"
import "./styles/Home.css"
import "./styles/notFound.css"
import "bootstrap/dist/css/bootstrap.css"
import Error404 from "../images/Error404.jpg"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className="Home">
            <div className="container-error">
                <div>
                    <Link to="/">
                        <img className="Error404-img" src={Error404} alt="Error404: Not Found" />
                    </Link>
                        <h1 className="error-mesagge">Page Not Found</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound