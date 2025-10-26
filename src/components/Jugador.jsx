import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export class Jugador extends Component {
    url = Global.url
    state = {
        jugador:{}
    }
   
    componentDidMount = () =>{
        this.loadJugador()
    }

    componentDidUpdate = (oldprops) => {
        if(oldprops.idJugador != this.props.idJugador){
            this.loadJugador()
        }
    }

    loadJugador = () => {
        let idJugador = this.props.idJugador
        let request = "api/Jugadores/"+idJugador
        axios.get(this.url+request).then(res => {
            this.setState({
                jugador : res.data
            })
        })
    }


    render() {
        return (
            <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-body text-center">
                <img 
                    src={this.state.jugador.imagen} 
                    alt={this.state.jugador.nombre} 
                    style={{width: '200px', height: '200px', objectFit: 'cover'}}
                />
                <h1 className="display-4 mb-3">{this.state.jugador.nombre}</h1>
                <div className="mb-4">
                    <span className="badge bg-primary fs-5 me-2">{this.state.jugador.posicion}</span>
                    <span className="badge bg-secondary fs-6">{this.state.jugador.pais}</span>
                </div>
                <p className="text-muted fs-5">
                    <i className="bi bi-calendar"></i> {this.state.jugador.fechaNacimiento}
                </p>
                <NavLink 
                    to={'/jugadores/'+this.state.jugador.idEquipo} 
                    className="btn btn-danger btn-lg mt-3"
                >
                    ← Volver
                </NavLink>
                </div>
            </div>
            </div>
        )
    }
}

export default Jugador