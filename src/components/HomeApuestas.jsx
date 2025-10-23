import React, { Component } from 'react'
import clasico from '../assets/images/clasico.jpeg'
export class HomeApuestas extends Component {
    render() {
        return (
        <div style={{display: "flex", justifyContent:"center", alignItems: "center", flexDirection:"column"}}>
            <img src={clasico} alt="madridBarsa" style={{width:"500px", height:"500px", marginTop:"200px"}}/>
        </div>
        )
    }
}

export default HomeApuestas