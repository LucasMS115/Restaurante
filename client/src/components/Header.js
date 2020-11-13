import React, { Component } from 'react';
import '../assets/styles/global.css';
import './styles/Header.css';
import SepWhite from "./SepWhite";
import Btn1 from './Btn1';

export class Header extends Component {

    render() {
        return (

            <div>
                <div className="img-container">
                    
                    <div className="filter"/>

                    {/* <span className="nav-bar"> teste </span> */}

                    <h1 className="title">Bem Vindo</h1>
                    <h2 className="subtitle">NOME DO RESTAURANTE</h2>
                    
                    <div className="sepContainer">
                        <SepWhite />
                        <span className="separator-txt">Alguma Coisa</span>
                        <SepWhite />
                    </div>

                    <div className="flex-container">
                        <Btn1 text="Cardapio" path="/Menu"/>
                        <Btn1 text="Reservas" path="/Reserves"/>
                        <Btn1 text="Contato" path="/"/>
                    </div>
                    
                    
                </div>
            </div>
            
        )
    }
}

export default Header;
