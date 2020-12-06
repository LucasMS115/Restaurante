import React, { Component } from 'react';
import './styles/styles.css';
import { withHooksHOC } from '../../utils/withHooksHOC';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';
import Alert from '../../components/Alert';

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
        alertDisplay: "none",

        data: "",
        horario: "",
        qntPessoas: "",
        salao: "",
        nome: "Teste",
        celular: "",
        email: "",

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
                path: "/user"
            },

        ],

        formContentConfig: [
            {
                title: "Informações",
                contentType: "Inputs"
            },
            {
                title: "Informações",
                contentType: "Inputs"
            },
            {
                title: "Concluído",
                contentType: "Text"
            },
        ],

        formContent: [
            [
                {
                    text: "Selecione o dia:",
                    name: "data",
                    type: "text"
                },
                {
                    text: "Horário:",
                    name: "horario",
                    type: "time"
                },
                {
                    text: "Mesa para:",
                    name: "qntPessoas",
                    type: "number"
                },
                {
                    text: "Salão:",
                    name: "salao",
                    type: "select",
                    options: ["", "Principal", "VIP"]
                },
            ],
            [
                {
                    text: "Seu nome completo:",
                    name: "nome",
                    type: "text"
                },
                {
                    text: "Celular (com DDD):",
                    name: "celular",
                    type: "number"
                },
                {
                    text: "Email:",
                    name: "email",
                    type: "email"
                },
            ],
            [
                "Em nome de: ",
                "Mesa para: x pessoas",
                "Celular: ",
                "Email: ",
                " ",
                "Data: ",
                "Salão"
            ]
        ],

        btns: [
            [
                {
                    path: "",
                    text: "Próximo",
                    goTo: "1",
                    type: "0"
                }
            ],
            [
                {
                    path: "",
                    text: "Voltar",
                    goTo: "0",
                    type: "0"
                },
                {
                    path: "",
                    text: "Finalizar",
                    goTo: "2",
                    type: "0"
                }
            ],
            [
                {
                    path: "/",
                    text: "Início",
                    goTo: "1",
                    type: "1"
                }
            ]
        ],
    }

    changeActiveFormState = (goTo) => {
        this.setState({activeForms: goTo});
    }

    getInputValue = (inputName) => {
        console.log("inputName")
    }

    showAlert = () => {
        this.setState({alertDisplay: "block"});
    }

    hideAlert = () => {
        console.log('entrou')
        this.setState({alertDisplay: "none"});
    }

    componentDidMount(){
        console.log("Usuário ativo => " + this.props.token);
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

                <div style={{ display: this.state.alertDisplay }}>
                    <Alert 
                        text="Por favor preencha todos os campos antes de prosseguir"
                        func={this.hideAlert}
                    />
                </div>

                <Forms
                    title={this.state.formContentConfig[this.state.activeForms].title}
                    contentType={this.state.formContentConfig[this.state.activeForms].contentType}
                    formContent={this.state.formContent[this.state.activeForms]}
                    btns={this.state.btns[this.state.activeForms]}
                    func={this.changeActiveFormState}
                    getInputValueFunc={this.getInputValue}
                />

                <Footer />

            </div>
        );
    }

};

export default withHooksHOC(Reserves);