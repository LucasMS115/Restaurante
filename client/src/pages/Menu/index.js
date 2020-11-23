import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DishSet from '../../components/DishSet';
import ContactSection from '../../components/ContactSection';
import config from '../../config';
import Btn1_teste from '../../components/Btn1_teste'

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
        dishesBase: [],
        dishes: []
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        const dishes = await this.getDishes();
        this.setState({dishes: dishes});
        this.setState({dishesBase: dishes});
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

    filter = (btn) => {

        let filtred = [];
         this.state.dishesBase.forEach((el) => {
            console.log(el);
            console.log(el.type);
            console.log(btn);
            if(el.type === btn) filtred.push(el);
        })
        console.log(filtred);
        this.setState({dishes: filtred});
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

                <Btn1_teste text="Sobremesa" func={this.filter}/>

                <Footer />
            </div>
            
        );
    }
    
}

export default Menu;