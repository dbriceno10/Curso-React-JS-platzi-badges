import React from "react"
//import header from "../images/platziconf-logo.svg"
import "./styles/BadgeEdit.css"
import Badge from "../componets/badge"
import BadgeForm from "../componets/badgeForm"
import api from "../api"
import PageLoading from "../componets/pageLoading"
class BadgeEdit extends React.Component {
        state = { 
            loading: true,//este loading se inicializa en verdadero ya que estamos iniciando con una petición, estamos usando el id creado con el badge para que la página nos devuelva el resultado de la página del badge en badgeEdit
            error: null,
            form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        } 
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async (e) => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )//read va a tomar el id del badge que nos interesa, usando los props, cada una de esas variables que insertamos en el path que declaramos en la ruta lo podemos acceder dentro del objeto params
            this.setState({ loading: false, form: data })
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
            [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(
                this.props.match.params.badgeId,
                this.state.form)//El handleSubmit ya no es de crear (create), es de actualizar (update),que recibe el id y la información que queremos actualizar
            this.setState({ loading: false })
            this.props.history.push("/badges")

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    {/* <img className="BadgeEdit__hero-img img-fluid" src={header} alt="Logo"/> */}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName || "First Name"} 
                                lastName={this.state.form.lastName || "Last Name"} 
                                jobTitle={this.state.form.jobTitle || "Job Title"}       
                                twitter={this.state.form.twitter || "Twitter"}
                                email={this.state.form.email}
                                avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />
                        </div>
                        <div className="col-6">
                        <h1 className="h1-title">Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit