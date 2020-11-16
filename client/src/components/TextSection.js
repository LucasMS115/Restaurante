import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import '../pages/Menu/styles/styles.css';
import SepBlack from './SepBlack';
import './styles/TextSection.css';

export class TextSection extends Component {

    state = {
        
    }

    filter = () => {
        if(this.props.type !== "comFotoDeFundo") return {
            position: "absolute",
            visibility: "hidden"
        }; else return {
                display: "flex",
                filter: "opacity(50%)",
                position: "absolute",
                width: "98.7vw",
                height: "33vh",
                backgroundColor: "black"
        }
    }

    subtitleColor = () => {
        let color = "";
        if(this.props.type !== "comFotoDeFundo") {
            color = "subtitulo2"
        } else {
            color = "subtitulo1"
        }

        return color;
    }

    hidden1 = () => {
        if(this.props.type === "comFotoDeFundo") return {
            position: "absolute",
            visibility: "hidden"
        }
    }

    hidden2 = () => {
        if(this.props.type !== "comFotoDeFundo") return {
            position: "absolute",
            visibility: "hidden"
        }
    }

    render() {
        return (

            <div className="especialidade">
                <div className={this.props.type}>
                    <div style={this.filter()} />

                    <div>
                        <h1 className="titulo2" >{this.props.titulo}</h1>
    
                        <div className="sepContainer" style={this.hidden1()}>
                            <SepBlack />
                            <span className={this.subtitleColor()}>{this.props.subtitulo}</span>
                            <SepBlack />
                        </div>

                        <div className="sepContainer" style={this.hidden2()}>
                            <span className={this.subtitleColor()}>{this.props.subtitulo}</span>
                        </div>

                        
                    </div>
                    
                </div>
                    
                <p className="paragrafo" >{this.props.texto}</p>
            </div>
        )
    }
}

TextSection.propTypes = {
    type: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired, 
    texto: PropTypes.string.isRequired,
}

export default TextSection;
