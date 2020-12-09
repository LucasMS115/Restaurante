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
        nome: "",
        celular: "",
        email: "",

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
                    type: "text",
                },
                {
                    text: "Horário:",
                    name: "horario",
                    type: "time",
                },
                {
                    text: "Mesa para:",
                    name: "qntPessoas",
                    type: "number",
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
                    goTo: "",
                    type: "1"
                }
            ]
        ],
    }

    changeActiveFormState = (goTo) => {
        if(goTo === "1") {
            if(this.state.data === "" || this.state.horario === "" || this.state.qntPessoas === "" || this.state.salao === "") {
                this.showAlert()
                return;
            }
        } else if (goTo === "2") {
            if(this.state.nome === "" || this.state.celular === "" || this.state.email === "") {
                this.showAlert()
                return;
            }
        }
        this.hideAlert();
        this.setState({activeForms: goTo});
    }

    getInputValue = (inputName, value) => {
        if(inputName === "data") this.setState({data: value});
        if(inputName === "horario") this.setState({horario: value});
        if(inputName === "qntPessoas") this.setState({qntPessoas: value});
        if(inputName === "salao") this.setState({salao: value});
        if(inputName === "nome") this.setState({nome: value});
        if(inputName === "celular") this.setState({celular: value});
        if(inputName === "email") this.setState({email: value});
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