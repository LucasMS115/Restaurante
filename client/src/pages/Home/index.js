import React, { Component } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextSection from '../../components/TextSection';
import Btn2 from '../../components/Btn2';
import Icon from '../../components/Icon'


export class Home extends Component {
    
    state = {
        title: "Bem Vindo",
        subtitle: "NOME DO RESTAURANTE",
        separator: "Alguma Coisa",

        btns: [
            {
                text: "Cardápio",
                path: "/working"
            },
            {
                text: "Reservas",
                path: "/working"
            },
            {
                text: "Contato",
                path: "/"
            },
            
            
        ],

        nav: [
            {
                text: "Início",
                path: "/"
            },
            {
                text: "Cardápio",
                path: "/working"
            },
            {
                text: "Reservas",
                path: "/working"
            },
            {
                text: "Conta",
                path: "/working"
            },
            
        ]
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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


                <TextSection
                    type="normal"
                    titulo="Fale conosco"
                    subtitulo="ALGUMA COISA"
                    texto='Telefone: 11 9999-9999 \n E-mail: restaurante@email.com \n Endereço: Vila Sésamo,Rua dos bolos 0'
                />
                
                <div className="social-icons-middle">
                        <a href='https://www.instagram.com/' target="blank">
                            <Icon type="instagram" class="icon-medium icon-black"/>
                        </a>
                        <a href='https://www.facebook.com/' target="blank">
                            <Icon type="facebook" class="icon-medium icon-black"/>
                        </a>
                        <a href='https://www.whatsapp.com/' target="blank">
                            <Icon type="whatsapp" class="icon-medium icon-black"/>
                        </a>
                </div>

                <Footer />
            </div>
            
        );
    }
    
}

export default Home;