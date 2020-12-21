import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Forms.css';

export class InputSet extends Component {

    inputTypes = (el) => {
        if(el.type === "select") {
            return(
                <select className="form-select" value={el.value} onChange={(event) => {this.props.getInputValueFunc(el.name, event.target.value)}} >
                    {this.selectOptions(el)}
                </select>
            )
        } else {
            return (
                <input className="form-field" type={el.type} value={el.value} onChange={(event) => {this.props.getInputValueFunc(el.name, event.target.value)}} ></input>
                
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
            <div key={el[0].text} className="itemForms">
                <label className="form-label">{el[0].text}</label>
                {this.inputTypes(el[0])}
            </div>
        ));
    }
}

InputSet.propTypes = {
    inputs: PropTypes.array.isRequired,
    getInputValueFunc: PropTypes.func,
}

export default InputSet;
