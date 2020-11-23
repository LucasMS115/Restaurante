import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Forms.css';

export class Btn1Set extends Component {

    inputTypes = (el) => {
        if(el.type == "select") {
            return(
                <select>
                    {this.selectOptions(el)}
                </select>
            )
        } else {
            return (
                <input type={el.type}></input>
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

Btn1Set.propTypes = {
    inputs: PropTypes.array.isRequired,
}

export default Btn1Set;
