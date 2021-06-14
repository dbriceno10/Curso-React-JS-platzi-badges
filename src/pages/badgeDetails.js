import React from "react"
//import confLogo from "../images/platziconf-logo.svg"
import "./styles/BadgeDetails.css"
import PageLoading from "../componets/pageLoading"
import PageError from "../componets/pageError"
//import api from "../api"
import Badge from "../componets/badge"
import { Link } from "react-router-dom" 
import swal from 'sweetalert'
//import DeleteBadgeModal from "../componets/deleteBadgeModal"
import "./styles/BadgeDetails.css"
import getID from "../componets/GetID"
class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null, 
        data: {
            results: [],
        },
    }

    componentDidMount() {
        const id = getID()
        this.intervalID = this.fetchData(id)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    fetchData = async (id) => {
        this.setState({ loading: true, error: null })
            
        try { 
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            this.setState({ loading: false, data: data })
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
            }
        
            if (this.state.error) {
            return <PageError error={this.state.error} />;
            }
        
            const badge = this.state.data;
        return (
            <React.Fragment>
                <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                    </div>
                    </div>
                </div>
                </div>
        
                <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge
                    image={badge.image}
                    name={badge.name}
                    species={badge.species}
                />
                    </div>
                    <div className="col container-actions">
                    <h2>Actions</h2>
                    <div>
                        <div className="button-container">
                        {/* <Link
                            className="btn btn-primary btn-action"
                            to={`/badges/${badge.id}/edit`}
                        >
                            Edit
                        </Link> */}
                        <button 
                                className="btn btn-primary btn-action"
                                onClick={() => {
                                    swal({
                                        title: "Coming Soon",
                                        text: "We hope to activate this soon",
                                        icon: "info",
                                    })
                                }}
                            >Edit</button>
                        {/* <button onClick={props.onOpenModal} className="btn btn-danger btn-action">Delete</button>
                        <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                            /> */}
                            <Link
                            className="btn btn-primary btn-action"
                            to={`/Curso-React-JS-platzi-badges/badges`}
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeDetails