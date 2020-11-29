import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import working from '../../assets/images/working.gif';

export class Home extends Component {
    
    state = {
        title: "Ooops",
        subtitle: "ESTA PAGINA AINDA NÃO ESTÁ PRONTA",
        separator: "Alguma Coisa",
        btnsType: "link", //not used on this page

        btns: [], //not used on this page

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
            }
        ]
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div id="title">

                <Header 
                    type="2"
                    nav={this.state.nav}
                    btns={this.state.btns}
                    btnsType={this.state.btnsType} //not used on this page
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