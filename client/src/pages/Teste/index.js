import React, { Component } from 'react';
import './styles/styles.css';
import { withHooksHOC } from '../../utils/withHooksHOC';
import { teste, dishesTable } from '../../Api';

const url = "https://restaurante-sintese.herokuapp.com/"; ;

class Teste extends Component {

    state = {
        name: "",
        email: "",
        cel: "12 934567890",
        password: "Senha",
        users: "Nomes",

        countries: [
            {
                name: "Brazel",
                id: 0,
                color: 'black'
            },

            {
                name: "UZA",
                id: 1,
                color: 'black'
            },

            {
                name: "Xile",
                id: 2,
                color: 'black'
            }
        ]

    };

    async componentDidMount(){

        const menu = await dishesTable.getDishes();
        teste.print();
        console.log(menu);
        console.log(" Usuario ativo =>" + this.props.token);
        const id = await this.testUsers();
        console.log(id);
    }

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

    testUsers = async () => {

        let id;
        
        await fetch(`${url}users/testUser/gi@email.com/senha`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            id = data;
        });
    
        return id;
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

    // Styles
    styleVar = {
        border: '0.5rem solid green',
        display: 'flex',
        flexDirection: 'column' ,
        alignItems: 'center',
        paddingTop: '1rem'
    };

    nameStyle = {
        color: "black",
        fontSize: "2rem"
    };

    inputStyle = {
        height: "1rem",
        width: "30rem",
        margin: "1rem",
        padding: "1rem"
    };

    btnStyle = {
        display: "flex",
        textAlign:"center",
        margin: "auto",
        padding: "1rem"
    };

    // -----------------------------------------------------------------------------------------------

    render(){

        return(
            <div className="testContainer">

                <br/>
                
                <h1 className="t5">TESTE</h1> 
                
                {/* Show users */}
                <h1>Usuarios:</h1>
                <p style={this.nameStyle}>{this.state.users}</p>
                <button style={this.btnStyle} type="button" onClick={this.usersNames}>Mostrar</button><br/><br/>
                {/* Show users */}

                {/*  Create user */}
                <form >
                    <h1>Criar usuario:</h1><br/>
                    <label htmlFor="name">Nome completo:</label>
                    <input style={this.inputStyle} type="text" id="name" name="name" placeholder="Nome" value={this.state.name}
                        onChange={this.nameChange}/><br/><br/>
                    <label htmlFor="email">Email:</label>
                    <input style={this.inputStyle} type="text" id="email" name="email" placeholder="E-mail" value={this.state.email}
                        onChange={this.emailChange}/><br/><br/>
                        
                    <button style={this.btnStyle} type="button" onClick={this.addUser}>Registrar</button><br/><br/>
                </form>
                {/*  Create user */}

            </div>
        );
    }

    // *** Return style functions *** //

    styleTest = () => {
        return {
            border: '0.5rem solid purple',
            display: 'flex',
            flexDirection: 'column' ,
            alignItems: 'center',
            paddingTop: '1rem'
        }
    };

    // *** Return style functions *** //

    // *** Style change functions *** //

    changeColor = (id) => {

        this.setState({countries: this.state.countries.map((country) =>{
            if(country.id === id){
                country.color === 'black'? country.color = 'green': country.color = 'black'; 
            };  
            return country;
        }) });

    };

    // *** Style change functions *** //

};




export default withHooksHOC(Teste);