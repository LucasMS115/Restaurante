import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';

class ReservesConclude extends Component {

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

            

            <Footer />
    
            </div>
        );
    }

};

export default ReservesConclude;