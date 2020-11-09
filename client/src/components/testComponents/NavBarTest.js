import React, { Component } from 'react'
import NavBtTest from './NavBtTest';

export class NavBarTest extends Component {
    render() {
        return (
            <div style={{display:'flex', float: 'right'}}>
                <NavBtTest path="/" name="Home"/>
                <NavBtTest path="/Menu" name="Cardapio"/>
                <NavBtTest path="/Reserves" name="Reservas"/>
                <NavBtTest path="/User" name="Pag. Usuario"/>
                <NavBtTest path="/Adm" name="Admin" />
            </div>
        )
    }
}

export default NavBarTest
