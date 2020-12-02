import React, { Component } from 'react';
import Btn1 from './Btn1';
import PropTypes from 'prop-types';

export class Btn1Set extends Component {

    state = {
        btns: ""
    }

    componentDidMount(){

        let temp = [];

        this.props.itens.forEach( el => {
            if(el.type === "link") temp.push(<Btn1 key={el.text} type="link" text={el.text} path={el.path}/>);
            else if(el.type === "function") temp.push(<Btn1 key={el.text} type="function" text={el.text} func={el.func}/>);;
        });

        this.setState({btns: temp});
    }

    render() {
        return this.state.btns;
    }
}

Btn1Set.propTypes = {
    itens: PropTypes.array.isRequired,
}

export default Btn1Set;
