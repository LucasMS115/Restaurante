import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
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
    const [form, setForm] = useState(false);
    const [message, setMessage] = useState('');

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

    const showForm = () => {
        setForm(true);
    }

    const hideForm = () => {
        setForm(false);
    }

    const deleteUser = async () => {
        let confirmDelete = window.confirm('Tem certeza que deseja excluir PERMANENTEMENTE sua conta?');
        if(confirmDelete) await usersTable.deleteUser(user.id);
        setToken(null);
        return history.push('/user');
    };

    const onSubmit = async (data) => {

        let confirmUpdate = window.confirm('Tem certeza que deseja que estes sejam seus novos dados?');

        if(confirmUpdate){

            if(data.password === data.repeatPassword) {
                await usersTable.updateUser(data, user.id)
                setMessage('Atualização feita com sucesso!');
                window.location.reload();
            } else {
                setMessage('Senhas inseridas não coincidem!');
            };

        };
    };

    const  {register, handleSubmit, errors} = useForm();

    useEffect(() => {
        getUserData();
        getReservesData();
    }, []);


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
                        func1={showForm}
                        func2={deleteUser}
                        btnNames={["Atualizar","Excluir"]}
                    />
                }

                {form &&
                    <div>
                        <h2 className="titulo2"> Insira os novos dados </h2>

                        <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>
                            <input className='form-field' type='text' placeholder='Nome' name='name' ref={register({required:true, minLength: 5})}/>
                            {errors.name && <span style={{color: "red"}}>Nome inválido</span>}

                            <input className='form-field' type='email' placeholder='E-mail' name='email' ref={register({required:true, minLength: 8})}/>
                            {errors.email && <span style={{color: "red"}}>E-mail inválido</span>}

                            <input className='form-field' type='number' placeholder='Celular com DDD' name='cel' ref={register({required:true, minLength: 11})}/>
                            {errors.cel && <span style={{color: "red", marginBottom: "1rem"}}>Número de celular inválido</span>}

                            <input className='form-field' type='password' placeholder='Senha' name='password' ref={register({required:true, minLength: 5})}/>
                            {errors.password && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                            <input className='form-field' type='password' placeholder='Repita a senha' name='repeatPassword' ref={register({required:true, minLength: 5})}/>
                            {errors.repeatPassword && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                            <div className="flex-container">
                                <input className='form-btn' type='submit'/>
                                <button className='form-btn' onClick={hideForm}>Cancelar</button>
                            </div>  

                            {!errors.name && !errors.email && !errors.cel && !errors.password && !errors.repeatPassword && <span style={{color: "red", margin: "1rem"}}>{message}</span>}
                        </form>

                    </div>
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