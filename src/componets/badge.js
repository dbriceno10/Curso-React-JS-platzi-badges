import React from "react"
import "./styles/Badge.css"
// import confLogo from "../images/badge-header.svg"
// import confLogo from "../images/ingress5.png"
import confLogo from "../images/portal-transparent.png"
//import Gravatar from "./gravatar"
import twitterLogo from "../images/twitter.svg"
class Badge extends React.Component {
    // render() {
    //     const view = (<h1>Badge</h1>)
    //     return view
    // }
    render() {
        const {
            image,
            name, 
            species
            } = this.props
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img className="confLogo" src={confLogo} alt="Logo"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={image} alt="Avatar"/>
                    {/* <Gravatar className="Badge__avatar" email={email} alt="Avatar"/> */}
                    <h1>{name}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{species}</h3>
                    <span><img className="twitter-logo" src={twitterLogo} alt="logo de twitter"/></span><div>@{name.split(" ").join("").toLowerCase()}</div>
                    
                </div>
                <div className="Badge__footer">
                    <p>#spaceconfig</p>
                </div>
            </div>
        )
    }
}

export default Badge