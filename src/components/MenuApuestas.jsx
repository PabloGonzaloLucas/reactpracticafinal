import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export class MenuApuestas extends Component {
    url = Global.url
    
    state = {
        equipos : []
    }

    loadEquipos = () => {
        let request = "api/Equipos"
        axios.get(this.url+request).then(res=>{
            this.setState({
                equipos : res.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos()
    }
    
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CRUD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="   Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/apuestas">Apuestas</a>
                        </li>                       
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Equipos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            {
                                this.state.equipos.map((equipo, index) => {
                                    return(<li><NavLink to={"/equipo/"+equipo.idEquipo} className="dropdown-item">
                                                {equipo.nombre}
                                            </NavLink></li>)
                                   
                                })
                            }
                        </ul>
                        </li>                    
                    </ul>
                   
                    </div>
                </div>
            </nav>
        )
    }
}

export default MenuApuestas