import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class SubCompTest extends Component {

    getDivStyle = () => {
        return {
            background: this.props.country.color,
            width: '50vw',
            margin: '1rem',
        }
    };

    getTextStyle = () => {
        return {
            color: 'white',
            fontSize: '1rem'
        };
    };

    render() {
        return (
            <div style={this.getDivStyle()}>
                <p style={this.getTextStyle()}>{this.props.country.name}</p>
            </div>
        )
    }
}

SubCompTest.propTypes = {
    country: PropTypes.object.isRequired,
};


export default SubCompTest;
