import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import '../pages/Menu/styles/styles.css';
import SepBlack from './SepBlack';
import './styles/TextSection.css';


function NewlineText(props) {
    let id = 0;
    const text = props.text;
    const newText = text.split('\\n').map(str => {
        id++;
        return <p style={{margin: "0.5rem"}} className='paragrafo pula-linha' key={id}>{str}</p>
    });
    return newText;
    //Solução retirada de: https://forum.freecodecamp.org/t/newline-in-react-string-solved/68484
}
export class TextSection extends Component {
    
    filter = () => {
        if(this.props.type !== "comFotoDeFundo")
             return {
                position: "absolute",
                visibility: "hidden"
             };
        else return {
                display: "flex",
                filter: "opacity(50%)",
                position: "absolute",
                width: "98.7vw",
                height: "40vh",
                backgroundColor: "black"
        }
    }

    subtitleStyle = () => {
        let subStyle = "";
        if(this.props.type !== "comFotoDeFundo") {
            subStyle = "subtitulo2"
        } else {
            subStyle = "subtitulo1"
        }

        return subStyle;
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

                        <h1 className={"titulo2"} >{this.props.titulo}</h1>
    
                        <div className="sepContainer" style={this.hidden1()}>
                            <SepBlack />
                            <span className={this.subtitleStyle()}>{this.props.subtitulo}</span>
                            <SepBlack />
                        </div>

                        <div className="sepContainer" style={this.hidden2()}>
                            <span className={this.subtitleStyle()}>{this.props.subtitulo}</span>
                        </div>

                </div>
                <NewlineText text={this.props.texto} />
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
