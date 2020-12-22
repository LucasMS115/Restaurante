import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoreContext from '../../components/Store/Context';
import { usersTable } from '../../Api';

const Sign_up = () => {

    const [message, setMessage] = useState('');
    const history = useHistory();
    
    const  {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
        if(data.password === data.repeatPassword) {
            setMessage('Cadastro completo com sucesso!');
            usersTable.postUser(data)
            return history.push('/user');
        } else {
            setMessage('Favor inserir senhas iguais, otario!')
        }
    }
  
        return (
            <div>

                <Header 
                    type="2"
                    btns={[]}
                    btnsType={'link'} //not used on this page
                    title={'Cadastro'}
                    subtitle={''}
                    separator={'Alguma coisa'}
                />
    
                <div style={{textAlign:"center"}} className="page-container">

                    
                    <h2 className="titulo2"> Alguma coisa </h2>

                    <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>
                        <input className='form-field' type='text' placeholder='Nome' name='name' ref={register({required:true, minLength: 8})}/>
                        {errors.name && <span style={{color: "red"}}>Nome inválido</span>}

                        <input className='form-field' type='email' placeholder='E-mail' name='email' ref={register({required:true, minLength: 8})}/>
                        {errors.email && <span style={{color: "red"}}>E-mail inválido</span>}

                        <input className='form-field' type='number' placeholder='Celular com DDD' name='cel' ref={register({required:true, minLength: 11})}/>
                        {errors.cel && <span style={{color: "red", marginBottom: "1rem"}}>Número de celular inválido</span>}

                        <input className='form-field' type='password' placeholder='Senha' name='password' ref={register({required:true, minLength: 3})}/>
                        {errors.password && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                        <input className='form-field' type='password' placeholder='Repita a senha' name='repeatPassword' ref={register({required:true, minLength: 3})}/>
                        {errors.repeatPassword && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                        <input className='form-btn' type='submit'/>
                        {!errors.name && !errors.email && !errors.cel && !errors.password && !errors.repeatPassword && <span style={{color: "red", margin: "1rem"}}>{message}</span>}
                    </form>

                    <span style={{fontSize:"2rem"}}>Já pussui uma conta? </span>
                    <Link style={{color:"black"}} to={"/login"} >
                        <span style={{fontSize:"2rem"}}>Faça login aki!</span>
                    </Link>

                </div>


                <Footer/>

            </div>

        )
    
}

export default Sign_up;
