import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuApuestas from './MenuApuestas'
import HomeApuestas from './HomeApuestas'

export class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <MenuApuestas/>
            <Routes>
                <Route path='/' element={<HomeApuestas/>}/>
                <Route path='/equipo/:idEquipo' element={<HomeApuestas/>}/>
            </Routes>
        </BrowserRouter>
        )
    }
}

export default Router