import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';
import Btn2 from '../../components/Btn2';

/* import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'; */

class Reserves extends Component {

    state = {
        title: "Reservas",
        subtitle: "Faça sua reserva online",
        separator: "",
        activeForms: "0",

        nav: [
            {
                text: "Início",
                path: "/"
            },
            {
                text: "Cardápio",
                path: "/menu"
            },
            {
                text: "Reservas",
                path: "/reserves"
            },
            {
                text: "Conta",
                path: "/working"
            },

        ],

        inputs: [
            [
                {
                    text: "Selecione o dia:",
                    type: "text"
                },
                {
                    text: "Horário:",
                    type: "time"
                },
                {
                    text: "Mesa para:",
                    type: "number"
                },
                {
                    text: "Salão:",
                    type: "select",
                    options: ["", "Principal", "VIP"]
                },
            ],
            [
                {
                    text: "Seu nome completo:",
                    type: "text"
                },
                {
                    text: "Celular (com DDD):",
                    type: "number"
                },
                {
                    text: "Email:",
                    type: "email"
                },
            ]

        ],

        btns: [
            [
                {
                    path: "",
                    text: "Próximo",
                    goTo: "1"
                }
            ],
            [
                {
                    path: "",
                    text: "Voltar",
                    goTo: "0"
                }
            ]
            
        ]
    }

    /* increaseActiveFormState = () => {
        console.log('increase')
        this.state.activeForms++
    }

    decreaseActiveFormState = () => {
        console.log('decrease')
        this.state.activeForms--
    } */

    changeActiveFormState = () => {
        console.log('Entrou pra mudar')
        /* this.setState({activeForms: newState}) */
    }

    selectForm = () => {

        let call
        if(this.state.activeForms === "0")

        return (
            <Forms
                /* activeForms= {this.state.activeForms} */
                title="Informações"
                inputs={this.state.inputs[this.state.activeForms]}
                btns={this.state.btns[this.state.activeForms]}
                func={this.changeActiveFormState}
            />
        )
    }

    render() {
        return (
            <div>

                <Header
                    type="2"
                    nav={this.state.nav}
                    btns={[]}
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    separator={this.state.separator}
                />

                {this.selectForm()}

                {/* <Forms 
                title="Informações"
                inputs={this.state.inputs}
                btns={this.state.btns}
                style={{position: "absolute",
                visibility: "hidden"}}
            />

            <Forms 
                title="Informações"
                inputs={this.state.inputs}
                btns={this.state.btns}
                
            /> */}

                <Btn2 
                        text={this.state.btns[0].text}
                        func={this.increaseActiveFormState}
                        type="0"
                    />

                <Footer />

            </div>
        );
    }

};

export default Reserves;