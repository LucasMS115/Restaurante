import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';

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

        nav: [
            {
                text: "",
                path: ""
            },
            {
                text: "Início",
                path: "/"
            },
            {
                text: "Cardápio",
                path: "/menu"
            },
            {
                text: "Conta",
                path: "/working"
            },
            
        ],

        inputs: [
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

        btns: [
            {
                path: "",
                text: "Próximo"
            }
        ]
    }

    render() {
        return(
            <div>
                
            <Header 
                type="2"
                nav={this.state.nav}
                btns={[]}
                title={this.state.title}
                subtitle={this.state.subtitle}
                separator={this.state.separator}
            />

            <Forms 
                title="Informações"
                inputs={this.state.inputs}
                btns={this.state.btns}
            />

            <Footer />
    
            </div>
        );
    }

};

export default Reserves;