import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'; 
import PropTypes from 'prop-types';

export class NavBt extends Component {

    state = {
        color: 'white',
        location: ""        
    }

    linkStyle = () => {
        return{
            textDecoration: 'none',
            color: this.state.color,
            /* fontSize: '1.9rem' */
        }
    };

    mouseEnter = () => {
        this.setState({color: '#E9D56F'});
    };

    mouseLeave = () => {
        console.log(this.state.location);
        if(this.state.location !== this.props.path) this.setState({color: 'white'});
    };

    componentDidMount(){
        const location = window.location.href.split("#")[1];
        if(location === this.props.path) this.setState({color: '#E9D56F'});
        else this.setState({color: 'white'});
        this.setState({ location: location });
    };

    render() {
        return (
            <div>
                <div className="nav-btn"> 
                    <NavLink
                        className="nav-text"
                        style={this.linkStyle()}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onClick={this.mouseEnter}
                        to={this.props.path} > {this.props.name} </NavLink>  
                </div>
            </div>
        )
    }
}

NavBt.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default NavBt;
