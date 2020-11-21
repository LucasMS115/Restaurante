import React, { Component } from 'react';
import Dish from './Dish';
import PropTypes from 'prop-types';

let id = 1;

export class DishSet extends Component {

    price = (price) => {
        id = id+1;
        return `R$ ${price}`
    }

    render() {
        return this.props.itens.map((el) => (
            <Dish
                    key={id}
                    id={id.toString()}
                    name={el.name}
                    description={el.description}
                    price={this.price(el.price)}
                />
        ));
    }
}

DishSet.propTypes = {
    itens: PropTypes.array.isRequired
}

export default DishSet;