import React, { Component } from 'react'
import NavBtTest from './NavBtTest';

export class NavBarTest extends Component {
    render() {
        return (
            <div style={{display:'flex', right: '1rem', top:"0", position:"absolute"}}>
                <NavBtTest path="/" name="Inicio"/>
                <NavBtTest path="/Menu" name="Cardapio"/>
                <NavBtTest path="/Reserves" name="Reservas"/>
                <NavBtTest path="/User" name="Conta"/>
            </div>
        )
    }
}

export default NavBarTest
