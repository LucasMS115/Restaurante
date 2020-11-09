import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import PropTypes from 'prop-types';

export class NavBtTest extends Component {

    state = {
        color: 'black'
    }

    linkStyle = () => {
        return{
            textDecoration: 'none',
            color: this.state.color,
            fontSize: '0.9rem'
        }
    };

    divStyle = {
        border: '0.2rem solid black',
        width: '10vw',
        alignContent: 'center',
        justifyContent: 'center',
    };

    hover = () => {
        this.state.color === 'black' ? this.setState({color: 'gold'}) : this.setState({color: 'black'});
    };

    render() {
        return (
            <div>
                <div style={this.divStyle}> 
                    <Link style={this.linkStyle()}
                        onMouseEnter={this.hover}
                        onMouseLeave={this.hover}
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
