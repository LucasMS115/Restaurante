import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import PropTypes from 'prop-types';

export class NavBtTest extends Component {

    state = {
        color: 'white'
    }

    linkStyle = () => {
        return{
            textDecoration: 'none',
            color: this.state.color,
            fontSize: '1.5rem'
        }
    };

    divStyle = {
        /* border: '0.2rem solid black', */
        margin: '0.5rem',
        alignContent: 'center',
        justifyContent: 'center',
    };

    hover = () => {
        this.state.color === 'white' ? this.setState({color: '#E9D56F'}) : this.setState({color: 'white'});
    };

    render() {
        return (
            <div>
                <div style={this.divStyle}> 
                    <Link style={this.linkStyle()}
                        onMouseEnter={this.hover}
                        onMouseLeave={this.hover}
                        onClick={this.hover}
                        to={this.props.path}> {this.props.name} </Link>  
                </div>
            </div>
        )
    }
}

NavBtTest.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default NavBtTest;