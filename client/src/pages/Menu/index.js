import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DishSet from '../../components/DishSet';
import ContactSection from '../../components/ContactSection';
import config from '../../config';

const url = config.url;

export class Menu extends Component {
    
    state = {
        title: "Cardápio",
        subtitle: "Tudo muito caro mesmo ;)",
        separator: "Alguma Coisa",

        btns: [
            {
                text: "Entradas",
                path: "/working"
            },
            {
                text: "Principais",
                path: "/working"
            },
            {
                text: "Sobremesas",
                path: "/working"
            },
            {
                text: "Bebidas",
                path: "/working"
            }
            
            
        ],

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
                path: "/working"
            },
            {
                text: "Conta",
                path: "/working"
            },
            
        ],
        dishes: [
            {
                id: "1",
                name: "Placeholder",
                description: "Uma pequena descrição do prato blabla blabla bla blalbalbalbal lba bla",
                price: "1.000,00"
            }
        ]
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({dishes: await this.getDishes()});
    }

    getDishes = async () => {

        let dishesData;
        
        await fetch(`${url}dishesTable/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            dishesData = data;
        });
        
    
        return dishesData;
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

                <DishSet
                    itens={this.state.dishes}
                />

                <ContactSection />

                <Footer />
            </div>
            
        );
    }
    
}

export default Menu;