import React, { Component } from 'react';
import Sep from "../assets/images/icons/separator-white-line.svg";

export class SepWhite extends Component {
    
    sepStyle = {
        height: "0.3rem",
        filter: " brightness(100%)",
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

export default SepWhite;
