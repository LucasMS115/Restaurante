import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css'
import Btn2 from './Btn2';

class Card extends Component {

    state = {
        btns: [
                {
                    path: "",
                    text: "Excluir",
                    goTo: "22",
                    type: "0"
                },
                {
                    path: "",
                    text: "Arquivar",
                    goTo: "23",
                    type: "0"
                }
        ],
    }

    render() {
        return (
            <div className="card">
                <h1 className="card-title">{this.props.name}</h1>

                <p className="paragrafo">{this.props.firstLine}</p>
                <p className="paragrafo">{this.props.secondLine}</p>

                <div className="flex-container">
                    <Btn2 
                        text={this.props.btnNames[0]}
                        funcArgs={this.props.id}
                        func={this.props.func1}
                        type="0"
                    />
                    <Btn2 
                        text={this.props.btnNames[1]}
                        funcArgs={this.props.id}
                        func={this.props.func2}
                        type="0"
                    />
                </div>
                

            </div>
        );
    }

};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    firstLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
    /* thirdLine: PropTypes.string,
    forthLine: PropTypes.string, */
    func1: PropTypes.func,
    func2: PropTypes.func,
    btnNames: PropTypes.array
}

export default Card;