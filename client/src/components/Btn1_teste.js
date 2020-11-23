import React, { Component } from 'react';
import '../assets/styles/global.css';
import icon1 from '../assets/images/icons/icon-happy.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Btn1 extends Component {

    state = {
        btnSize: "12.5vw",
        color1: "#E9D56F",
        color2: "white",
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

    backgroundStyle = () => {
        return {
            position: 'absolute',
            backgroundColor: this.state.color1,
            filter: 'opacity(16%)', 
            width: this.state.btnSize,
            height: this.state.btnSize,
            margin: 'auto'
        }
    }

    outStyle = () => {
        return {
            border: `0.23rem solid ${this.state.color2}`,
            filter: 'brightness(100%)',
            width: this.state.btnSize,
            height: this.state.btnSize,
            margin: 'auto',
            display: 'flex',
            alignItens: 'center',
            justifyItens: 'center',
            textDecoration:'none'
        }
    }

    innerStyle = () => {
        return{     
            border: `0.23rem solid ${this.state.color1}`,
            filter: 'brightness(100%)', 
            width: this.state.innerSize,
            height: this.state.innerSize,
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'center',
            justifyItens: 'center',
            margin: 'auto'
        }
    }

    iconStyle = {
        width: this.state.iconSize,
        height: this.state.iconSize,
        margin: 'auto'
    }

    iconLeg = () => {
        return {
            color: this.state.color2,
            fontSize:'1rem',
            margin: 'auto'
        }
    }

    mouse = () => {
        let temp = this.state.color1;
        this.setState({color1: this.state.color2});
        this.setState({color2: temp});
    }

    click = () => {
        this.setState({color1: "white"});
        this.setState({color2: "white"});

    }

    render() {
        return (
            <div style={this.container}>
                <div style={this.outStyle()} onMouseEnter={this.mouse}
                 onMouseLeave={this.mouse} onClick={this.props.func.bind(this, this.props.text.toLowerCase())}>
                    <div style={this.backgroundStyle()}/>
                    <div style={this.innerStyle()}>
                        <img style={this.iconStyle} src={icon1} alt=':('></img>
                        <span style={this.iconLeg()}>{this.props.text}</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

Btn1.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.number,
    func: PropTypes.func
}

export default Btn1;
