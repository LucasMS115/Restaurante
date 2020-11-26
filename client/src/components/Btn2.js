import React, { Component } from 'react';
import '../assets/styles/global.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Btn2 extends Component {

    state = {
        heigth: "3.8rem",
        width: "23rem",
        color1: "#E9D56F",
        color2: "black",
        innerHeigth: "2.3rem",
        innerWidth: "21.5rem",
        link: "teste",
        text: "teste"
    }

    container = {
        display: 'flex',
        alignItens: 'center',
        justifyItens: 'center',
        margin: '3rem'
    }

    outStyle = () => {
        return {
            border: `0.20rem solid ${this.state.color2}`,
            filter: 'brightness(100%)',
            width: this.state.width,
            height: this.state.heigth,
            margin: 'auto',
            display: 'flex',
            alignItens: 'center',
            justifyItens: 'center',
            textDecoration:'none'
        }
    }

    innerStyle = () => {
        return{     
            border: `0.20rem solid ${this.state.color1}`,
            filter: 'brightness(100%)', 
            width: this.state.innerWidth,
            height: this.state.innerHeigth,
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'center',
            justifyItens: 'center',
            margin: 'auto'
        }
    }

    text = () => {
        return {
            color: this.state.color2,
            fontSize:'1.5rem',
            margin: 'auto'
        }
    }

    mouse = () => {
        let temp = this.state.color1;
        this.setState({color1: this.state.color2});
        this.setState({color2: temp});
    }

    click = () => {
        this.setState({color1: "black"});
        this.setState({color2: "black"});
    }

    render() {
        return (
            <div style={this.container}>
                <Link style={this.outStyle()} to={this.props.path} onMouseEnter={this.mouse} onMouseLeave={this.mouse} onClick={this.click}>
                    <div style={this.innerStyle()}>
                        <span style={this.text()}>{this.props.text}</span>
                    </div>
                </Link>
                
            </div>
        )
    }
}

Btn2.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Btn2;
