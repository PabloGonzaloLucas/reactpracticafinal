import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export class Jugadores extends Component {
    url = Global.url
    state = {
        jugadores : []
    }
    
    componentDidMount = () => {
        this.loadJugadores()
    }

    loadJugadores = () => {
        let idEquipo = this.props.idEquipo
        let request = "api/Jugadores/JugadoresEquipos/"+idEquipo
        axios.get(this.url+request).then(res => {
            this.setState({
                jugadores : res.data
            })
        })
    }

    render() {
        return (
        <div className="container mt-4">
            <NavLink className="btn btn-danger mb-3" to='/'>
                <i className="bi bi-arrow-left me-2"></i>Volver
            </NavLink>
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-4">Jugadores del Equipo</h2>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jugadores.map((jugador, index) => {
                                        return(
                                            <tr key={index}>
                                                <td className="align-middle fw-bold">{jugador.nombre}</td>
                                                <td>
                                                    <img 
                                                        src={jugador.imagen} 
                                                        alt={jugador.nombre} 
                                                        style={{width: '100px', height: '100px', objectFit: 'cover'}}
                                                    />
                                                </td>
                                                <td className="align-middle">
                                                    <NavLink 
                                                        className="btn btn-primary btn-sm" 
                                                        to={'/jugador/'+jugador.idJugador}>
                                                        <i className="bi bi-eye me-1"></i>Detalles
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Jugadores