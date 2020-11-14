import React, { Component } from 'react';
import '../assets/styles/global.css';
import './styles/Header.css';
import logo from '../assets/images/icons/logo.svg';
import faceWhite from '../assets/images/icons/icon-face.svg';
import instaWhite from '../assets/images/icons/icon-insta.svg';
import wppWhite from '../assets/images/icons/icon-wpp.svg';
import NavBt from './NavBt';
import SepWhite from "./SepWhite";
import Btn1 from './Btn1';
import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {
        return (

            <div>
                <div className="img-container">
                    
                    <div className="filter"/>

                    <Link className="logo-container" to='/'>
                        <img src={logo} className="logo" alt="logo"/>
                    </Link>

                    <div className="nav-bar"> 
                        <NavBt path="/" name="Inicio"/>
                        <NavBt path="/Menu" name="Cardapio"/>
                        <NavBt path="/Reserves" name="Reservas"/>
                        <NavBt path="/User" name="Conta"/>
                    </div>

                    <div className="social-icons">
                        <a href='https://www.facebook.com/' target="blank"> <img src={faceWhite} className="item" alt="face"/> </a>
                        <a href='https://www.instagram.com/' target="blank">
                             <img src={instaWhite} style={{marginLeft: "-0.2rem"}} className="item" alt="insta"/>
                        </a>
                        <a href='https://www.whatsapp.com/' target="blank"> <img src={wppWhite} className="item" alt="whats"/> </a>     
                    </div>

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
