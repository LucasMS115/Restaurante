import React, { Component } from 'react';
import Btn2 from './Btn2';
import PropTypes from 'prop-types';

export class Btn2Set extends Component {

    render() {
        return this.props.itens.map((el) => (
            <div>
                 <Btn2
                     key={el.text} 
                     path={el.path}
                     text={el.text}
                     funcArgs={el.goTo}
                     func={this.props.func}
                     type={el.type}
                 />
            </div>
        ));
    }
}

Btn2Set.propTypes = {
    itens: PropTypes.array.isRequired,
    func: PropTypes.func.isRequired,
}

export default Btn2Set;
