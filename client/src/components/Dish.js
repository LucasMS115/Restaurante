import React, { Component } from 'react';
import '../assets/styles/global.css';
import Img from "../assets/images/events-back-old.jpg";
import PropTypes from 'prop-types';
import SepGold from './SepGold'



export class Dish extends Component {

    state = {
        colorBack: "#333333",
        colorText: "white"
    }

    containerStyle = () => {
        return{
            backgroundColor: this.state.colorBack,
            height: "100%",
            width: "100%",
            margin: 0
        }
    }

    textColor = () => {
        return{
            color: this.state.colorText,
        }
    }
    
    imgStyle = () => {
        return {
            display: "flex",
            height: "30vw",
            width: "auto",
            marginTop: "-1rem"
        }
    }

    imgContainerStyle = () => {
        return{
            display: "flex",
            justifyItens: "center",
            alignItens: "center",
            /* border: '1rem solid coral', */
            height: "15rem",
            width: "44vw",
            marginBottom: "3rem",
            overflow: "hidden",
            borderRadius: "25rem"
        }
    }

    setColors = () => {
        const id = parseInt(this.props.id);
        const cb = this.state.colorBack;
        if(id%2 !== 0){
            this.setState({
                colorBack: this.state.colorText,
                colorText: cb
            });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setColors();
    }

    render() {
        return (
            <div style={this.containerStyle()} className="flex-container-colum">

                <h2 className="titulo2"> {this.props.name} </h2>
                <div style={this.imgContainerStyle()}>
                    <img src={Img} alt="img" style={this.imgStyle()}></img>
                </div>
                <p style={this.textColor()} className="paragrafo-center"> {this.props.description} </p>
                <p style={this.textColor()} className="paragrafo-center"> {this.props.price} </p>

                <SepGold />

            </div>
        )
    }
}

Dish.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Dish;
