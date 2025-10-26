import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export class Equipo extends Component {
    url = Global.url
    state = {
        equipo: {}
    }

    componentDidMount = () => {
        this.loadEquipo()
    }

    componentDidUpdate = (oldprops) =>{
        if(oldprops.idEquipo !== this.props.idEquipo){
            this.loadEquipo()
        }
    }

    loadEquipo = () => {
        let idEquipo = this.props.idEquipo
        let request = "api/Equipos/"+idEquipo
        axios.get(this.url+request).then(res => {
            console.log(res.data)
            this.setState({
                equipo : res.data
            })
        })
    }
    
    render() {
        return (
            <div style={{
            maxWidth: '800px',
            margin: '40px auto',
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
            }}>
            <h1 style={{
                color: '#2c3e50',
                fontSize: '2.5em',
                marginBottom: '20px',
                fontWeight: 'bold'
            }}>{this.state.equipo.nombre}</h1>
            
            <a href={this.state.equipo.web} style={{
                display: 'inline-block',
                margin: '20px 0',
                transition: 'transform 0.3s'
            }}>
                <img 
                src={this.state.equipo.imagen} 
                alt={this.state.equipo.nombre}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
                />
            </a>
            
            <h2 style={{
                color: '#e74c3c',
                fontSize: '1.8em',
                margin: '25px 0',
                fontWeight: '600'
            }}>
                🏆 {this.state.equipo.champions} Champions
            </h2>
            
            <p style={{
                color: '#555',
                fontSize: '1.1em',
                lineHeight: '1.6',
                textAlign: 'justify',
                padding: '0 20px'
            }}>{this.state.equipo.descripcion}</p>

            <NavLink className='btn btn-success' to={'/jugadores/'+this.state.equipo.idEquipo}>Jugadores</NavLink>
            <NavLink className='btn btn-danger' to={'/'}>Volver</NavLink>
            </div>
        )
    }
}

export default Equipo