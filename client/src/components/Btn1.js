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
        innerSize: "11vw",
        iconSize: "5.5vw",
        link: "teste",
        text: "teste",
        icon: icon1,
        legSize: "1.7vw"
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
            filter: 'opacity(33%)', 
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
            textDecoration:'none',
            cursor:'pointer'
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
            filter: 'brightness(100%)',
            fontSize: this.state.legSize,
            fontWeight:'bold' ,
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

    defineBtn = () => {
        if(this.props.type === "link")
            return (
                <Link className="btn1-out" style={this.outStyle()} to={this.props.path} onMouseEnter={this.mouse} onMouseLeave={this.mouse} onClick={this.click}>
                    <div className="btn1-back" style={this.backgroundStyle()}/>
                    <div className="btn1-in" style={this.innerStyle()}>
                        <img className="btn1-icon" style={this.iconStyle} src={icon1} alt=':('></img>
                        <span className="btn1-leg" style={this.iconLeg()}>{this.props.text}</span>
                    </div>
                </Link>
            )
        else if(this.props.type === "function")
            return (
                <div className="btn1-out" style={this.outStyle()} onMouseEnter={this.mouse} onMouseLeave={this.mouse}
                onClick={this.props.func.bind(this, this.props.text.toLowerCase())}>

                    <div className="btn1-back" style={this.backgroundStyle()}/>

                    <div className="btn1-in" style={this.innerStyle()}>
                        <img className="btn1-icon" style={this.iconStyle} src={icon1} alt=':('></img>
                        <span className="btn1-leg" style={this.iconLeg()}>{this.props.text}</span>
                    </div>

                </div>
            )
    }

    render() {
        return (
            <div style={this.container}>
                {this.defineBtn()}
            </div>
        )
    }
}

Btn1.propTypes = {
    type: PropTypes.string.isRequired,
    path: PropTypes.string,
    func: PropTypes.func,
    text: PropTypes.string.isRequired,
    icon: PropTypes.number,
}

export default Btn1;
