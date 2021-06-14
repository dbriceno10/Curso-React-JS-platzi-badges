import React from "react"
import { Link } from "react-router-dom" 
import "./styles/PageError.css"
import "../pages/styles/Badges.css"
import error500 from "../images/error-500.png"

function PageError(props) {
  // return <div className="PageError">❌{props.error.message}😱</div>;
  return (
    <div className="PageError">
      <Link to={`/Curso-React-JS-platzi-badges/`}>
        <img className="error-img" src={error500} alt="server-internal error" />
      </Link>
      <h1 className="h1-title">{props.error.message}, please reload the page.</h1>
      <div className="Badges__buttons">
        <Link className="btn btn-primary" to={`/Curso-React-JS-platzi-badges/`}>Home</Link>
      </div>
    </div>
  )
}

export default PageError