import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import './styles/Forms.css';
import InputSet from './InputSet';
import Btn2 from './Btn2';

class Forms extends Component {

    componentDidMount() {
        console.log("No forms:" + this.props.func)
    }

    render() {
        return(
            <div className="formsPage">
                <h1 className="titulo2 formTitle">{this.props.title}</h1>

                <form className="formsContainer">

                    <InputSet 
                        inputs={this.props.inputs}
                    />


                    <Btn2 
                        text={this.props.btns[0].text}
                        goTo={this.props.btns[0].goTo}
                        func={this.props.func}
                        type="0"
                    />
                </form>
            
    
            </div>
        );
    }

};

Forms.propTypes = {
    /* activeForms: PropTypes.string.isRequired, */
    title: PropTypes.string.isRequired, 
    inputs: PropTypes.array.isRequired, 
    btns: PropTypes.array.isRequired, 
    func: PropTypes.func,
}

export default Forms;