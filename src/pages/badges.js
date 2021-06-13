import React from "react"
import "./styles/Badges.css"
import ConfLogo from "../images/ingress5.png"
import ReactLogo from "../images/react-logo3.svg"
// import ConfLogo from "../images/space.png"
import BadgesList from "../componets/badgesList"
import {Link} from "react-router-dom"
import api from "../api"
import PageLoading from "../componets/pageLoading"
import PageError from "../componets/pageError"
import MiniLoader from "../componets/miniLoader"
import "../componets/styles/BadgesList.css"
import "bootstrap/dist/css/bootstrap.css"
import twitterLogo from "../images/twitter.svg"
// import getData from "../utils/getData"
// import getHash from "../utils/getHash"
//NOTA: Borré algunas notas sobre el ciclo de vida de los componentes, si quieres revisarlos regresa a ese commit o ve la notas

class Badges extends React.Component {
    // state = {//ahora vamos a traer los datos desde la api, se inicializan como undefinded
    //     loading: true,
    //     error: null,
    //     data: undefined
    // }

    // constructor(props) {//El constructor recibe props, el cual necesitamos para inicializar la SuperClase
    //     super(props)
    //     console.log("1.constructor()")
    //     this.state = {
    //         data: [],//estado inicial vacío
    //     }
    // }
    state = {
        loading: true,
        error: null, 
        data: {
            results: [],
        },
        nextPage: 1
    }
    componentDidMount() {
        //this.intervalID = setInterval(this.fetchData, 10000)//Hay que cancelarlo cuando la página se vaya
        this.intervalID = this.fetchData()
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })//
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
            const data = await response.json()

            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results)
                },
                nextPage: this.state.nextPage + 1
            })
        } catch (error) {
            console.error(error)
            this.setState({ loading: false, error: error })
        }

        // try {
        //     const data = await api.badges.list()
        //     this.setState({ loading: false, data: data })//si obtenemos los datos los guardamos
        // } catch(error) {
        // this.setState({ loading: false, error: error })
        // }
    }
    //junto a esa actualiación se llama a:
    // componentDidUpdate(propsPrevios, estadoPrevio){
    //     console.log("5.componentDidUpdate")
    //     console.log({
    //         prevProps: propsPrevios, PrevState:estadoPrevio
    //     })

    //     console.log({
    //         props: this.props,
    //         state: this.state,

    //     })
    // }
    // componentDidUpdate(prevProps, PrevState){
    //     console.log("5.componentDidUpdate")
    //     console.log({
    //         prevProps: prevProps, PrevState:PrevState
    //     })
    // }

    //Momento antes de que se vaya el componente de DOM
    // componentWillUnmount() {
    //     //console.log("6.componentWillUnmount")
    // }


    render() {
        //console.log("2/4.render()")
        //manejar cuando loading = true
        // if(this.state.loading === true && this.state.data === undefined) {
        //     return <PageLoading />
        // }
        if(this.state.loading === true && !this.state.data) {//Pide los datos de forma automática, la primera vez
            return <PageLoading />
        }

        if(this.state.error) {//this.state.error === true 
            //return `Error: ${this.state.error.message}`
            return <PageError error={this.state.error} />
        }
        return (
            <React.Fragment>
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <div className="Badges__list">
                            <div className="Badges__container">
                                {/* <BadgesList badges={this.state.data}/> */}
                                <ul className="list-unstyled BadgesList">
                                    {this.state.data.results.map((character) => {
                                        return (
                                            <li key = {character.id} className="BadgesListItem">
                                                <img src={character.image} alt={character.name} className="BadgesListItem__avatar" />
                                                <div>
                                                    <b>
                                                        {character.name}
                                                    </b>
                                                    <div className="Twitter__name">
                                                    <span className="Twitter__logo"><img className="Twitter__logo-img" src={twitterLogo} alt="logo de twitter"/></span>
                                                    @{character.name}
                                                    </div>
                                                    {character.species}    
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                {this.state.loading && <div className="miniloader"><MiniLoader/></div>}
                                {!this.state.loading && this.state.data.info.next && (<div className="Badges__buttons"><button className="btn btn-primary" onClick= {
                                    () => {this.fetchData()}
                                }>Loading More</button></div>)}
                                <div className="Badges">
                                    <div className="Badges__hero">
                                        <div className="Badges__container">
                                            <div className="Badges__buttons">
                                                <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                                            </div>
                                            <div className="badge-logos-container">
                                                <Link to="/comingson"><img className="Badges_conf-logo Badges_conf-logo-width" src={ConfLogo} alt="Conf Logo" /></Link>
                                                <a href="https://es.reactjs.org/" target="_blank"><img className="Badges_conf-logo react-logo" src={ReactLogo} alt="Logo de React js" /></a>
                                            </div>
                                        {/* <div className="Badges__buttons">

                                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* Añadimos un indicador si está en loading */}
                                <div className="miniloader">
                                    {this.state.loading && <MiniLoader/>}
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Badges