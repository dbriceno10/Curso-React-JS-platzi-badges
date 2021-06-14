import React from "react"
import "./styles/badgeForm.css"
import { Link } from "react-router-dom"
class BadgeForm extends React.Component {
    
    // handleChange = (e) =>{
    //     // console.log({e}) //Recordar que cuando se trabaja con react, muchas cosas se van a manejar como si de objetos se tratasen
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value})
    //     this.setState({//función de la clase component llamada setState, nos sirve paraguardar información
    //         // firstName: e.target.value, // en lugar de guardar todo en first name, vamos a pasar una llave, una variable para guardar la 
    //         [e.target.name]: e.target.value,
    //     })
    // }
    //handleChange, el cuál es el método que maneja la información del evento lo vamos a eliminar de acá, puesto que ahora esto se va a manejar desde la página, es decir, BadgeNew
    handleClick = e => {
        // e.preventDefault()
        console.log("El formulario fue enviado")
        console.log(this.state)
    }

    // handleSubmit = (e) =>{
    //     console.log("Click en el botón")
    //     console.log(this.state)
    // }
    render() {
        return (
            <React.Fragment>
                <form className="form-container" onSubmit={this.props.onSubmit}>
                {/*Ya no vamos a usar el método declarado, usaremos el prop que maneja el cambio  */}
                    <div className="form-group">
                        <label>Frist Name</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}
                            required
                        />
                        {/*Eventos con react, en un input cuando escribimos, obtenemos un evento onChange, la vamos a manejar con un método de la clase que se debe crear, suele llamarse handleChange */}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}  className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}
                            required
                        />
                    </div>
                    <div>
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                            required
                        />
                        <div>
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}
                            required
                        />
                    </div>
                    </div>
                    <div className="save-button-container">
                        <button onClick={this.handleClick} className="btn btn-primary action-btn">Save</button>
                        <Link className="btn btn-danger action-btn" to="/Curso-React-JS-platzi-badges/badges">Cancel</Link>
                    </div>
                    {/* vamos a desplegar un elmento condicionalmente, si el error existe (true, no es nulo), vamos a desplegra el siguiente párrafo */}
                    {this.props.error && <p className="text-danger" >{this.props.error.message}</p>}
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm