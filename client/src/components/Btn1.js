import React, { Component } from 'react';
import '../assets/styles/global.css';
import icon1 from '../assets/images/icons/icon-happy.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Btn1 extends Component {


    state = {
        btnSize: "12.5vw",
        innerSize: "10.2vw",
        iconSize: "6vw",
        link: "teste",
        text: "teste",
        icon: icon1
    }

    container = {
        display: 'flex',
        alignItens: 'center',
        justifyItens: 'center',
        margin: '2vw'
    }

    backgroundStyle = {
        position: 'absolute',
        backgroundColor: '#E9D56F',
        filter: 'opacity(16%)', 
        width: this.state.btnSize,
        height: this.state.btnSize,
        margin: 'auto'
    }

    outStyle = {
        border: '0.23rem solid white',
        filter: 'brightness(100%)',
        width: this.state.btnSize,
        height: this.state.btnSize,
        margin: 'auto',
        display: 'flex',
        alignItens: 'center',
        justifyItens: 'center',
        textDecoration:'none'
    }

    innerStyle = {
        border: '0.23rem solid #E9D56F',
        filter: 'brightness(100%)', 
        width: this.state.innerSize,
        height: this.state.innerSize,
        display: 'flex',
        flexDirection: 'column',
        alignItens: 'center',
        justifyItens: 'center',
        margin: 'auto'
    }

    iconStyle = {
        width: this.state.iconSize,
        height: this.state.iconSize,
        margin: 'auto'
    }

    iconLeg = {
        color: 'white',
        fontSize:'1rem',
        margin: 'auto'
    }

    render() {
        return (
            <div style={this.container}>
                <Link style={this.outStyle} to={this.props.path}>
                    <div style={this.backgroundStyle}/>
                    <div style={this.innerStyle}>
                        <img style={this.iconStyle} src={icon1} alt=':('></img>
                        <span style={this.iconLeg}>{this.props.text}</span>
                    </div>
                </Link>
                
            </div>
        )
    }
}

Btn1.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.number
}

export default Btn1;
