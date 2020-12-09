import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DishSet from '../../components/DishSet';
import ContactSection from '../../components/ContactSection';
import { dishesTable } from '../../Api';


export class Menu extends Component {
    
    state = {
        title: "Cardápio",
        subtitle: "Tudo muito caro mesmo ;)",
        separator: "Alguma Coisa",
        dishesBase: [], //this will have all dishes in the database
        dishes: [] // this will have the dishes according to the active filter
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        const dishes = await dishesTable.getDishes();
        this.setState({dishes: dishes});
        this.setState({dishesBase: dishes});
    }
    
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