import React, { Component } from 'react';
import {ReactComponent as Logo} from '../assets/images/icons/logo.svg';
import {ReactComponent as Facebook} from '../assets/images/icons/icon-face.svg';
import {ReactComponent as Instagram} from '../assets/images/icons/icon-insta.svg';
import {ReactComponent as Wpp} from '../assets/images/icons/icon-wpp.svg';
import PropTypes from 'prop-types';

export class Icon extends Component {

    state = {
        class: this.props.class
    }


    mouseEnter = () => {
        this.setState({class: this.state.class + "-gold"});
    }

    mouseLeave = () => {
        this.setState({class: this.props.class});
    }

    icon = () => {
        const type = this.props.type;

        switch(type){ 
            case "logo": return <Logo className={this.props.class}/>;
            case "facebook": return <Facebook onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={this.state.class}/>;
            case "instagram": return <Instagram onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={this.state.class}/>;
            case "whatsapp": return <Wpp onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={this.state.class}/>;
            default: return console.log("Unsigned icon");
        }
        
    }

    render() {
        return this.icon();
    }

}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
}

export default Icon;
