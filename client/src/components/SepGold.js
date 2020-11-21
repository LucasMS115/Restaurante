import React, { Component } from 'react';
import Sep from "../assets/images/icons/separator-golden-line.svg";

export class SepGold extends Component {
    
    sepContainer = {
        display: "flex",
        aliginItens: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: ".2rem"
    }

    sepStyle = {
        height: "0.5rem",
        filter: "brightness(100%)",
        position: "absolute",
        margin: "auto"
    }

    
    render() {
        return (
            <div style={this.sepContainer}>
                <img src={Sep} style={this.sepStyle} alt="---"></img>
            </div>
        )
    }
    
}

export default SepGold;
