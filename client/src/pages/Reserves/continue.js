import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';

class ReservesContinue extends Component {

    state = {
        title: "Reservas",
        subtitle: "Faça sua reserva online",
        separator: "",

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

export default ReservesContinue;