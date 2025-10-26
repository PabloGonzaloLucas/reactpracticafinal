import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuApuestas from './MenuApuestas'
import HomeApuestas from './HomeApuestas'
import Equipo from './Equipo'
import Jugadores from './Jugadores'
import Jugador from './Jugador'
import Apuestas from './Apuestas'
import CrearApuesta from './CrearApuesta'

export class Router extends Component {
    render() {
        function EquipoElement(){
            const {idEquipo} = useParams()

            return <Equipo idEquipo={idEquipo} />
        }
        function JugadoresElement(){
            const {idEquipo} = useParams()

            return <Jugadores idEquipo={idEquipo} />
        }
        function JugadorElement(){
            const {idJugador} = useParams()

            return <Jugador idJugador={idJugador} />
        }
        return (
        <BrowserRouter>
            <MenuApuestas/>
            <Routes>
                <Route path='/' element={<HomeApuestas/>}/>
                <Route path='/equipo/:idEquipo' element={<EquipoElement/>}/>
                <Route path='/jugadores/:idEquipo' element={<JugadoresElement/>}/>
                <Route path='/jugador/:idJugador' element={<JugadorElement/>}/>
                <Route path='/apuestas' element={<Apuestas/>}/>
                <Route path='/crearApuesta' element={<CrearApuesta/>}/>
            </Routes>
        </BrowserRouter>
        )
    }
}

export default Router