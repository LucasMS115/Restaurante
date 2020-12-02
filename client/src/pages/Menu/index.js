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
        dishesBase: [],
        dishes: []
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        const dishes = await this.getDishes();
        this.setState({dishes: dishes});
        this.setState({dishesBase: dishes});
    }

    /* ESSA FUNCAO TEM Q SAIR DAKI */
    getDishes = async () => {

        let dishesData;
        
        await fetch(`${url}dishesTable/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            dishesData = data;
        });
        
    
        return dishesData;
    }
    /* ESSA FUNCAO TEM Q SAIR DAKI */
    
    filter = (btnName) => {

        let filtred = [];
         this.state.dishesBase.forEach((el) => {
            if(el.type === btnName) filtred.push(el);
        })
        this.setState({dishes: filtred});
    } 

    render(){

        return(

            <div>

                <Header 
                    type="1"
                    nav={this.state.nav}

                    btns={ [{ text: "Entradas", func: this.filter, type: "function" },
                            { text: "Principais", func: this.filter, type: "function"},
                            { text: "Sobremesas", func: this.filter, type: "function" },
                            { text: "Bebidas", func: this.filter, type: "function" }
                           ]
                    }

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