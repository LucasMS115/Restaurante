import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SepBlack from '../../components/SepBlack';

export class Home extends Component {
    
    state = {
        title: "Bem Vindo",
        subtitle: "NOME DO RESTAURANTE",
        separator: "Alguma Coisa",

        btns: [
            {
                text: "Cardapio",
                path: "/working"
            },
            {
                text: "Reserves",
                path: "/working"
            },
            {
                text: "Contato",
                path: "/"
            },
            
            
        ],

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
            },
            
        ]
    }

    render(){
        return(
            <div>

                <Header 
                    type="1"
                    nav={this.state.nav}
                    btns={this.state.btns}
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    separator={this.state.separator}
                />
    
                <div className="especialidade">
                    <h1>Nossa especialidade</h1>
    
                    <div className="sepContainer">
                        <SepBlack/>
                        <span className="separator">ALGUMA COISA</span>
                        <SepBlack/>
                    </div>
    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt.</p>
                </div>
    
                <Footer />
            </div>
            
        );
    }
    
}

export default Home;