import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Table from '../../components/Table';
import Card from '../../components/Card';
import {usersTable, reservesTable} from '../../Api';
import './styles/styles.css';

import Btn2 from '../../components/Btn2';

const User = () => {

    const [user, setUser] = useState();
    const [title, setTitle] = useState(" ");
    const [rows, setRows] = useState([]);

    const { token, setToken } = useContext(StoreContext);
    const history = useHistory();
    
    const logOut = () => {
        console.log("logOut");
        setToken(null);
        return history.push('/user');
    }

    const getUserData = async () => {
        let userData = await usersTable.getByID(token);
        setTitle(`Olá ${userData.name.split(" ")[0]}!`);
        setUser(userData);
    }

    const getReservesData = async () => {
        let data = await reservesTable.getByUser(token);
        setRows(data);
    }

    const updateUser = async () => {
        console.log("updateUser()");
    }

    const deleteUser = async () => {
        console.log("deleteUser()");
    }

    useEffect(() => {
        getUserData();
        getReservesData();
    }, [])


    return(
        <div >

            <Header
                type="2"
                btns={[]}
                btnsType={'link'} //not used on this page
                title={title}
                subtitle={''}
                separator={'Alguma coisa'}
            />


            <div className="page-container" style={{textAlign: "center"}}>

                {user && 
                    <Card
                        id={user.id.toString()}
                        name={"Seus dados:"}
                        firstLine={`Email: ${user.email}`}
                        secondLine={`Celular: ${user.cel}`}
                        func1={updateUser}
                        func2={deleteUser}
                        btnNames={["Atualizar","Excluir"]}
                    />
                }

                {rows[0] &&
                    <Table
                        title="Suas Reservas"
                        columns={["Nome", "Quantidade", "Dia", "Hora", "Salão"]}
                        rows={rows}
                    />
                } 

                {!rows[0] &&

                    <h1 className="titulo2">Você ainda não possui reservas!</h1>
                }

                <Btn2 type="0" text="Sair" func={logOut}/>

            </div>

            

            <Footer/>
        </div>
    );
};

export default User;