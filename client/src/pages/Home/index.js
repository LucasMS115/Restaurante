import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextSection from '../../components/TextSection';
import ContactSection from '../../components/ContactSection';
import Btn2 from '../../components/Btn2';

export class Home extends Component {
    
    state = {
        title: "Bem Vindo",
        subtitle: "NOME DO RESTAURANTE",
        separator: "Alguma Coisa",
        contactRef: React.createRef(),

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
                path: "/user"
            },
            
        ]
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toContact = () => {
        window.scrollTo({
            top: this.state.contactRef.current.offsetTop,
            behavior: 'smooth'
          })
    }

    render(){

        return(

            <div>

                <Header 
                    type="1"
                    nav={this.state.nav}
                    btns={ [{ text: "Cardápio", path: "/menu", type: "link" },
                        { text: "Reservas", path: "/working", type: "link"},
                        { text: "Contato", func: this.toContact , type: "function"},
                    ]}
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    separator={this.state.separator}
                />
    
                <TextSection
                    type="normal"
                    titulo="Nossa especialidade"
                    subtitulo="ALGUMA COISA"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt."
                />

                <TextSection
                    type="comFotoDeFundo"
                    titulo="Eventos"
                    subtitulo="ALGUMA COISA"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt."
                />
        
                <Btn2 
                    path="/working"
                    text="Faça uma reserva"
                />


                <div ref={this.state.contactRef}><ContactSection/></div>

                <Footer />
            </div>
            
        );
    }
    
}

export default Home;