import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import working from '../../assets/images/working.gif';

export class Home extends Component {
    
    state = {
        title: "Ooops",
        subtitle: "ESTA PAGINA AINDA NÃO ESTÁ PRONTA",
        separator: "Alguma Coisa",

        btns: [],

        nav: [
            {
                text: "Inicio",
                path: "/"
            },
            {
                text: "Cardapio",
                path: "/working"
            },
            {
                text: "Reserves",
                path: "/working"
            },
            {
                text: "Conta",
                path: "/working"
            }
        ]
    }

    render(){
        return(
            <div id="title">

                <Header 
                    type="2"
                    nav={this.state.nav}
                    btns={this.state.btns}
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    separator={this.state.separator}
                />
    
                <div style={{textAlign:"center"}}>
                    <img style={{height: "50rem", weight: "auto"}} src={working} alt="oops"/>
                </div>
    
                <Footer />
            </div>
            
        );
    }
    
}

export default Home;