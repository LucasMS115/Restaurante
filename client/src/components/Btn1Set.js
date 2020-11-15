import React, { Component } from 'react';
import Btn1 from './Btn1';
import PropTypes from 'prop-types';

export class Btn1Set extends Component {
    render() {
        return this.props.itens.map((el) => (
            <Btn1 key={el.text} text={el.text} path={el.path}/>
        ));
    }
}

Btn1Set.propTypes = {
    itens: PropTypes.array.isRequired,
}

export default Btn1Set;
