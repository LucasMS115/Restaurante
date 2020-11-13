import React, { Component } from 'react';
import Sep from "../assets/images/icons/separator-black-line.svg";

export class SepBlack extends Component {
    
    sepStyle = {
        height: "0.3rem",
        margin: "0.8rem" 
    }

    
    render() {
        return (
            <div style={this.sepContainer}>
                <img src={Sep} style={this.sepStyle} alt="---"></img>
            </div>
        )
    }
    
}

export default SepBlack;
