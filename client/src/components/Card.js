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

                <p>{"Preço: " + this.props.price}</p>
                <p>{"Descrição: " + this.props.description}</p>

                <div className="flex-container">
                    <Btn2 
                        text={this.props.btnNames[0]}
                        funcArgs={this.props.id}
                        func={this.props.funcDel}
                        type="0"
                    />
                    <Btn2 
                        text={this.props.btnNames[1]}
                        funcArgs={this.props.id}
                        func={this.props.funcUpt}
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
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    funcDel: PropTypes.func,
    funcUpt: PropTypes.func,
    btnNames: PropTypes.array
}

export default Card;