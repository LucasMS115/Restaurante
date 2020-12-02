import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/global.css';
import './styles/Forms.css';
import InputSet from './InputSet';
import Btn2Set from './Btn2Set';

class Forms extends Component {

    /* componentDidMount() {
        console.log(this.props.getInputValueFunc)
        console.log('ta aqui')
    } */

    contentType = () => {
        if(this.props.contentType === "Inputs") {
            return(
                <InputSet 
                    inputs={this.props.formContent}
                    getInputValueFunc={this.props.getInputValueFunc}
                />
            )
        } else {
            return this.props.formContent.map((el) => (
                <p className="formsText">{el}</p>
            ));
        }
    }

    render() {
        return(
            <div className="formsPage">
                <h1 className="titulo2 formTitle">{this.props.title}</h1>

                <form className="formsContainer">

                    {this.contentType()}

                    <Btn2Set 
                        itens={this.props.btns}
                        func={this.props.func}
                    />
                </form>
            
    
            </div>
        );
    }

};

Forms.propTypes = {
    /* activeForms: PropTypes.string.isRequired, */
    title: PropTypes.string.isRequired, 
    contentType: PropTypes.string.isRequired, 
    formContent: PropTypes.array.isRequired, 
    btns: PropTypes.array.isRequired, 
    func: PropTypes.func,
    getInputValueFunc: PropTypes.func,
}

export default Forms;