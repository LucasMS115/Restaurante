import React, { Component } from 'react';
import TextSection from './TextSection';
import Icon from './Icon';


export class ContactSection extends Component {
    render() {
        return (
            <div>

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

            </div>
        )
    }
}

export default ContactSection;
