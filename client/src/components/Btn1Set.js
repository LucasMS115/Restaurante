import React, { Component } from 'react';
import Btn1 from './Btn1';
import PropTypes from 'prop-types';

export class Btn1Set extends Component {

    state = {
        btns: ""
    }

    componentDidMount(){
        if(this.props.btnsType === "link")
            this.setState({btns:
                this.props.itens.map((el) => (
                    <Btn1 key={el.text} type="link" text={el.text} path={el.path}/>
                ))
            })
        else if (this.props.btnsType === "function")
            this.setState({btns:
                this.props.itens.map((el) => (
                    <Btn1 key={el.text} type="function" text={el.text} func={el.func}/>
                ))
            })
    }

    render() {
        return this.state.btns;
    }
}

Btn1Set.propTypes = {
    itens: PropTypes.array.isRequired,
    btnsType: PropTypes.string.isRequired
}

export default Btn1Set;
