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
                [
                    {
                        text: "Selecione o dia:",
                        name: "data",
                        type: "text",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Horário:",
                        name: "horario",
                        type: "time",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Mesa para:",
                        name: "qntPessoas",
                        type: "number",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Salão:",
                        name: "salao",
                        type: "select",
                        options: ["", "Principal", "VIP"],
                        value: ""
                    },
                ]
            ],
            [
                [
                    {
                        text: "Seu nome completo:",
                        name: "nome",
                        type: "text",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Celular (com DDD):",
                        name: "celular",
                        type: "number",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Email:",
                        name: "email",
                        type: "email",
                        value: "",
                    },
                ]
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

    getInputValue = (inputName, insert) => {
        let inputs = this.state.formContent;
        let inputPosition = 0;

        if(inputName === "data") {
            this.setState({data: insert});
            inputPosition = 0;
        }
        if(inputName === "horario") {
            this.setState({horario: insert});
            inputPosition = 1;
        }
        if(inputName === "qntPessoas") {
            this.setState({qntPessoas: insert});
            inputPosition = 2;
        }
        if(inputName === "salao") {
            this.setState({salao: insert});
            inputPosition = 3;
        }
        if(inputName === "nome") {
            this.setState({nome: insert});
            inputPosition = 0;
        }
        if(inputName === "celular") {
            this.setState({celular: insert});
            inputPosition = 1;
        }
        if(inputName === "email") {
            this.setState({email: insert});
            inputPosition = 2;
        }

        let input = inputs[this.state.activeForms][inputPosition][0];
        input.value = insert;
        inputs[this.state.activeForms][inputPosition][0] = input;
        this.setState({formContent: inputs})
    }

    showAlert = () => {
        this.setState({alertDisplay: "block"});
    }

    hideAlert = () => {
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