import React, { Component } from 'react';
import './styles/styles.css';
import { withHooksHOC } from '../../utils/withHooksHOC';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';
import Alert from '../../components/Alert';
import { reservesTable } from '../../Api';

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
                        type: "date",
                        value: "",
                    },
                ],
                [
                    {
                        text: "Horário:",
                        name: "horario",
                        type: "select",
                        options: ["", "11:00:00", "12:00:00", "13:00:00","14:00:00","19:00:00",
                            "20:00:00", "21:00:00", "22:00:00"],
                        value: ""
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
                [
                    "Em nome de: ",
                    "Mesa para: x pessoas",
                    "Celular: ",
                    "Email: ",
                    " ",
                    "Data: ",
                    "Salão"
                ]
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
            let inputs = this.state.formContent;
            inputs[2] = [
                "Em nome de: " + this.state.nome,
                "Mesa para: " + this.state.qntPessoas,
                "Celular: " + this.state.celular,
                "Email: " + this.state.email,
                " ",
                "Data: " + this.state.data,
                "Salão: " + this.state.salao
            ];
            this.addReserve();
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

    addReserve = () => {
        const hour = this.state.horario;
        let id;
        this.props.token !== null ? id = this.props.token: id = 1;

        const reserve = {
            name: this.state.nome,
            cel: this.state.celular,
            email: this.state.email,
            hour: hour,
            day: this.state.data,
            room: this.state.salao,
            people: this.state.qntPessoas,
            user_id: id
        }

        reservesTable.postReserve(reserve)
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

                <Forms
                    title={this.state.formContentConfig[this.state.activeForms].title}
                    contentType={this.state.formContentConfig[this.state.activeForms].contentType}
                    formContent={this.state.formContent[this.state.activeForms]}
                    btns={this.state.btns[this.state.activeForms]}
                    func={this.changeActiveFormState}
                    getInputValueFunc={this.getInputValue}
                />

                <div style={{ display: this.state.alertDisplay, marginTop: "-4rem" }}>
                    <Alert 
                        text="Por favor preencha todos os campos antes de prosseguir"
                        func={this.hideAlert}
                    />
                </div>

                <Footer />

            </div>
        );
    }

};

export default withHooksHOC(Reserves);