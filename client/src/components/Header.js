import React, { Component } from 'react';
import img from '../assets/images/m-header-back.jpg';
import './compStyles.css';

export class Header extends Component {

    render() {
        return (

            <div>
                <div className="img-container">
                    <div className="filter"> bla </div>
                    <h1 className="title">Bem Vindo</h1>
                    <h2 className="subtitle">NOME DO RESTAURANTE</h2>
                    <span className="separator">Alguma Coisa</span>

                </div>
            </div>
            
        )
    }
}

export default Header;
