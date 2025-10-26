import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { error } from 'jquery'

export class CrearApuesta extends Component {
    url = Global.url
    cajaUsuario = React.createRef()
    cajaRealMadrid = React.createRef()
    cajaBarcelona = React.createRef()
    cajaFecha = React.createRef()
    state = {
        creado : false
    }

    createApuesta = (event) => {
        event.preventDefault()
        let apuesta = {
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaRealMadrid.current.value + "-" + this.cajaBarcelona.current.value,
            fecha: this.cajaFecha.current.value
        }
        let request = "/api/Apuestas"
        axios.post(this.url+request, apuesta).then(res => {
            console.log("creado")
            console.log(res)
            this.setState({
                creado: true
            })
        }).catch(error => {
            console.log(error)
        })
    }


    render() {
        return (
        <div className="container mt-5">
            {
            this.state.creado == true &&
            <Navigate to={'/apuestas'}/>
            }
            <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
                <h1 className="mb-0">Nueva Apuesta</h1>
            </div>
            <div className="card-body">
                <form onSubmit={this.createApuesta}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Usuario</label>
                    <input type="text" className="form-control" ref={this.cajaUsuario} required/>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <label className="form-label fw-bold">Real Madrid</label>
                    <input type="number" className="form-control" ref={this.cajaRealMadrid} required/> 
                    </div>
                    <div className="col-md-6">
                    <label className="form-label fw-bold">Barcelona</label>
                    <input type="number" className="form-control" ref={this.cajaBarcelona} required/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Fecha</label>
                    <input type="date" className="form-control" ref={this.cajaFecha} required/>
                </div>
                <button className="btn btn-primary w-100">Nueva Apuesta</button>
                </form>
            </div>
            </div>
        </div>
        )
    }
}

export default CrearApuesta