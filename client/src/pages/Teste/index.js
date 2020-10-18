import React, { Component } from 'react';
import config from '../../config';
import './styles/styles.css';

const url = config.url;

class teste extends Component {

    state = {
        name: "",
        email: "",
        cel: "12 934567890",
        password: "Senha",
        users: "Nomes"
    };

    /* Show names */
    getUsers = async () => {

        let usersData;
        
        await fetch(`${url}users/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            usersData = data;
        });
        
    
        return usersData;
    }

    usersNames = async () => {
        let usersData = await this.getUsers();
        let users = '';
        usersData.forEach(element => {
            users += ` | ${element.name} | `;
        });
        this.setState({users: users});
    }
    /* Show names */

    /* Create user */
    nameChange = (e) => {
        this.setState({name: e.target.value});
    }
    
    emailChange = (e) => {
        let email = String(e.target.value);
        this.setState({email: email});
    }
    
    addUser = async () => {
        console.log(`${this.state.name} | ${this.state.email}`);

        try {
            await fetch(`${url}users/`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name : this.state.name,
                    email: this.state.email,
                    cel: '00 99999-9999',        
                    password: 'senha'
                })
            })
        } catch (err) {
            console.log(err);
        }

        this.usersNames();

    }

    /* Create user */

    render(){

        return(
            <div className="testContainer">
                <h1 className="t5">TESTE</h1>  

                {/* Show users */}
                <h1>Usuarios:</h1>
                <p>{this.state.users}</p>
                <button type="button" onClick={this.usersNames}>Mostrar</button><br/><br/>
                {/* Show users */}

                {/*  Create user */}
                <form >
                    <h1>Criar usuario:</h1><br/>
                    <label htmlFor="name">Nome completo:</label>
                    <input type="text" id="name" name="name" placeholder="Nome" value={this.state.name}
                        onChange={this.nameChange}/><br/><br/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="E-mail" value={this.state.email}
                        onChange={this.emailChange}/><br/><br/>
                        
                    <button type="button" onClick={this.addUser}>Registrar</button><br/><br/>
                </form>
                {/*  Create user */}



            </div>
        );
    }
};


export default teste;