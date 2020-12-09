import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css'
import Btn2Set from './Btn2Set';

class Card extends Component {

    state = {
        btns: [
                {
                    path: "",
                    text: "Excluir",
                    goTo: "",
                    type: "0"
                },
                {
                    path: "",
                    text: "Arquivar",
                    goTo: "",
                    type: "0"
                }
        ],
    }

    buttonFunc = () => {
        console.log('botooooes')
    }

    render() {
        return (
            <div className="card">
                <h1 className="card-title">{this.props.name}</h1>

                <p>{"Preço: " + this.props.price}</p>
                <p>{"Descrição: " + this.props.description}</p>

                <div className="flex-container">
                    <Btn2Set 
                        itens={this.state.btns}
                        func={this.buttonFunc}
                    />
                </div>
                

            </div>
        );
    }

};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card;