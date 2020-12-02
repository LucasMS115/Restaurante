import React, { Component } from 'react';
import './styles/Alert.css';
import PropTypes from 'prop-types';

class Alert extends Component {

    teste() {
        console.log('Função do alert')
    }

    render() {
        return (
            <div className="alert-container" >
                <div class="alert" onclick={this.teste}>
                    <span class="closebtn" >&times;</span>
                        {this.props.text}
                </div>

            </div>
        );
    }

};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    alertDisplay: PropTypes.string.isRequired,
}

export default Alert;