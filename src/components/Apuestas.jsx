import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'

export class Apuestas extends Component {
    url = Global.url
    state = {
        apuestas : []
    }

    componentDidMount = () => {
        this.loadApuestas()
    }

    loadApuestas = () => {
        let request = "api/Apuestas"
        axios.get(this.url+request).then(res => {
            this.setState({
                apuestas: res.data
            })
        })
    }
  
    render() {
    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Apuestas del Partido</h1>
          <NavLink className="btn btn-success btn-lg shadow" to='/crearApuesta'>
            <i className="bi bi-plus-circle me-2"></i>
            Realizar Apuesta
          </NavLink>
        </div>
        
        <div className="card shadow-lg mb-4">
          <div className="card-header bg-primary text-white text-center py-3">
            <h3 className="mb-0">
              <span className="badge bg-light text-primary me-3">Local</span>
              Real Madrid
              <span className="mx-3">VS</span>
              FC Barcelona
              <span className="badge bg-light text-primary ms-3">Visitante</span>
            </h3>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover table-striped mb-0">
                <thead className="table-dark">
                  <tr>
                    <th className="py-3">Usuario</th>
                    <th className="py-3">Resultado</th>
                    <th className="py-3">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.apuestas.map((apuesta, index) => {
                      return(
                        <tr key={index}>
                          <td className="py-3">
                            <i className="bi bi-person-circle me-2"></i>
                            {apuesta.usuario}
                          </td>
                          <td className="py-3 fw-bold text-success">{apuesta.resultado}</td>
                          <td className="py-3 text-muted">{apuesta.fecha}</td>
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

export default Apuestas