import React, { Component } from 'react';
import '../assets/styles/global.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Btn2 extends Component {

    state = {
        heigth: "3.5rem",
        width: "17rem",
        color1: "#E9D56F",
        color2: "#272626",
        innerHeigth: "2.3rem",
        innerWidth: "15.5rem",
        textSize: "1.5rem",
        link: "teste",
        text: "teste",
        aux: 0,

        func: this.props.func
    }

    container = {
        display: 'flex',
        alignItens: 'center',
        justifyItens: 'center',
        margin: '1rem'
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
            textDecoration:'none',
            cursor:'pointer'
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
            fontSize: this.state.textSize,
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

    defineButtonType = () => {
        if(this.props.type === '0') {
            return (
                <div style={this.outStyle()} onMouseEnter={this.mouse} onMouseLeave={this.mouse} onClick={this.state.func.bind(this, this.props.funcArgs)}> 
                    <div style={this.innerStyle()}>
                        <span style={this.text()}>{this.props.text}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <Link style={this.outStyle()} to={this.props.path} onMouseEnter={this.mouse} onMouseLeave={this.mouse} onClick={this.click}>
                    <div style={this.innerStyle()}>
                        <span style={this.text()}>{this.props.text}</span>
                    </div>
                </Link>
            )
        }
    }

    render() {
        return (
            <div style={this.container}>
                {this.defineButtonType()}
            </div>
        )
    }
}

Btn2.propTypes = {
    path: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    funcArgs: PropTypes.string,
    func: PropTypes.func
}

export default Btn2;
