import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Forms.css';

export class InputSet extends Component {

    state = {
        value: ""
    }

    componentDidMount() {
        console.log('ta aqui')
        console.log(this.props.inputs)
    }

    teste = (name) => {
        this.setState({value: name});
        console.log(this.state.value);
    }

    inputTypes = (el) => {
        if(el.type === "select") {
            return(
                <select onChange={(event) => {this.props.getInputValueFunc.bind(this, el.name)}} >
                    {this.selectOptions(el)}
                </select>
            )
        } else {
            return (
                <input type={el.type} onChange={(event) => {this.teste.bind(this, el.name) }} ></input>
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
