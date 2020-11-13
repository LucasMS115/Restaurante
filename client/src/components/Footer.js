import React, { Component } from 'react';
import './styles/Footer.css';

function NewlineText(props) {
    let id = 0;
    const text = props.text;
    const newText = text.split('\n').map(str => {
        id++;
        return <p className='pula-linha' key={id}>{str}</p>
    });
  
    return newText;
    //Solução retirada de: https://forum.freecodecamp.org/t/newline-in-react-string-solved/68484
}

export class Footer extends Component {

    render() {
        return (

            <div>
                <div className="black-container">
                    <div className="footer-itens">
                        <p>NOME DO RESTAURANTE</p>
                        <NewlineText text={'HORÁRIO DE ATENDIMENTO\nAberto todos os dias\ndas 5h às 24h'} />
                        <h2 className="title">Bom Apetite</h2>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Footer;
