import React, { Component } from 'react';
import SubCompTest from './SubCompTest';
import PropTypes from 'prop-types';

class CompTest extends Component {

    state = {
        myState: "Hello :)"
    };

    getDivStyle = () => {
        return {
            border: '1rem solid coral',
            display: 'flex',
            flexDirection: 'column' ,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margin: '1rem',
            padding: '1rem',
            maxWidth: '1000px'
        }
    };

    render(){
        
        return this.props.countries.map((country) => (
            <div style={this.getDivStyle()} key={country.id}>
                <SubCompTest country={country} changeColor={this.props.changeColor}/>
                <button type="button" onClick={this.props.changeColor.bind(this, country.id)}> Toggle </button>
            </div>
        ));

    }
};

CompTest.propTypes = {
    countries: PropTypes.array.isRequired,
    changeColor: PropTypes.func.isRequired
}

export default CompTest;
