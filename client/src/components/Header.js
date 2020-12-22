import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import './styles/Header.css';
import NavBt from './NavBt';
import SepWhite from "./SepWhite";
import Btn1Set from './Btn1Set';
import Icon from './Icon';
import { Link } from 'react-router-dom';

export class Header extends Component {

    state = {
        nav: [  { text: "Início", path: "/" },
                { text: "Cardápio", path: "/menu" },
                { text: "Reservas", path: "/reserves" },
                { text: "Conta", path: "/working" },    
            ]
    };

    hidden = () => {
        if(this.props.type === "2") return {
            position: "absolute",
            visibility: "hidden"
        };
    };

    render() {
        return (

            <div>
                <div className="img-container">
                    
                    <div className="filter"/>

                    <Link className="logo-container" to='/'>
                        <Icon type="logo" class="logo" />
                    </Link>

                    <div className="nav-bar"> 
                        <NavBt path={this.state.nav[0].path} name={this.state.nav[0].text}/>
                        <NavBt path={this.state.nav[1].path} name={this.state.nav[1].text}/>
                        <NavBt path={this.state.nav[2].path} name={this.state.nav[2].text}/>
                        <NavBt path={this.state.nav[3].path} name={this.state.nav[3].text}/>
                    </div>

                    <div className="social-icons-corner">
                        <a href='https://www.instagram.com/' target="blank">
                            <Icon type="instagram" class="icon-small icon-white"/>
                        </a>
                        <a href='https://www.facebook.com/' target="blank">
                            <Icon type="facebook" class="icon-small icon-white"/>
                        </a>
                        <a href='https://www.whatsapp.com/' target="blank">
                            <Icon type="whatsapp" class="icon-small icon-white"/>
                        </a>
                    </div>

                    <h1 style={{marginBottom: "-5rem"}} className="titulo1">{this.props.title}</h1>
                    <h2 className="subtitulo1">{this.props.subtitle}</h2>
                    
                    <div style={this.hidden()} className="sepContainer">
                        <SepWhite />
                        <span className="subtitulo2 separator">{this.props.separator}</span>
                        <SepWhite />
                    </div>

                    <div className="flex-container">
                        <Btn1Set btnsType={this.props.btnsType} itens={this.props.btns}/>
                    </div>
                    
                    
                </div>
            </div>
            
        )
    }
}

Header.propTypes = {
    type: PropTypes.string.isRequired, //Toggle the separator visibility 
    btns: PropTypes.array.isRequired, //Information of the buttons 
    title: PropTypes.string.isRequired, 
    subtitle: PropTypes.string.isRequired,
    separator: PropTypes.string.isRequired,
}

export default Header;
