import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Forms.css';

export class InputSet extends Component {

    inputTypes = (el) => {
        if(el.type === "select") {
            return(
                <select onChange={(event) => {this.props.getInputValueFunc(el.name, event.target.value)}} >
                    {this.selectOptions(el)}
                </select>
            )
        } else {
            return (
                <input type={el.type} value={el.value} onChange={(event) => {this.props.getInputValueFunc(el.name, event.target.value)}} ></input>
                
            )
        }
    }

    selectOptions = (select) => {
        return select.options.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))
    }

    render() {
        return this.props.inputs.map((el) => (
            <div key={el.text} className="itemForms">
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
