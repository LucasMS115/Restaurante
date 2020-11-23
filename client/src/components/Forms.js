import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import './styles/Forms.css';
import InputSet from './InputSet';
import Btn2 from './Btn2';

class Forms extends Component {

    render() {
        return(
            <div className="formsPage">
                <h1 className="titulo2 formTitle">{this.props.title}</h1>

                <form className="formsContainer">

                    <InputSet 
                        inputs={this.props.inputs}
                    />


                    <Btn2 
                        path={this.props.btns[0].path}
                        text={this.props.btns[0].text}
                    />
                </form>
            
    
            </div>
        );
    }

};

Forms.propTypes = {
    title: PropTypes.string.isRequired, 
    inputs: PropTypes.array.isRequired, 
    btns: PropTypes.array.isRequired, 
}

export default Forms;