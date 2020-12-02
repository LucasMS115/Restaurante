import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Forms.css';

export class InputSet extends Component {

    componentDidMount() {
        console.log(this.props.getInputValueFunc)
        console.log('ta aqui')
    }

    inputTypes = (el) => {
        if(el.type == "select") {
            return(
                <select onChange = {(event) => {this.props.getInputValueFunc()/* .bind(this, el.name) */}} >
                    {this.selectOptions(el)}
                </select>
            )
        } else {
            return (
                <input type={el.type} onChange = {(event) => {this.props.getInputValueFunc()/* .bind(this, el.name) */}} ></input>
            )
        }
    }

    selectOptions = (select) => {
        return select.options.map((option) => (
            <option value={option}>{option}</option>
        ))
    }

    render() {
        return this.props.inputs.map((el) => (
            <div className="itemForms">
                <label>{el.text}</label>
                {this.inputTypes(el)}
                
            </div>
        ));
    }
}

InputSet.propTypes = {
    inputs: PropTypes.array.isRequired,
    getInputValueFunc: PropTypes.func,
}

export default InputSet;
