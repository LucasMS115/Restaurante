import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoreContext from '../../components/Store/Context';
import './styles/style.css';

const Login = () => {

    const [message, setMessage] = useState('');

    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    const nav = [
                   { text: "Início", path: "/"},
                   { text: "Cardápio", path: "/menu" },
                   { text: "Reservas", path: "/" },
                   { text: "", path: "/"}
                ]
    
    const  {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {

        setToken(null);
        setMessage('');
        let token = null;
        if(data.email === 'adm@email.com' && data.password === 'senhaforte') token = data.email;
        else setMessage('Usuário Inválido');

        if(token){
            console.log(data);
            console.log(token);
            setToken(token);
            return history.push('/user');
        }
    }
  
        return (
            <div>

                <Header 
                    type="2"
                    nav={nav}
                    btns={[]}
                    btnsType={'link'} //not used on this page
                    title={'Entrar'}
                    subtitle={''}
                    separator={'Alguma coisa'}
                />
    

                <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>
                    <input className='form-field' type='text' placeholder='E-mail' name='email' ref={register({required:true, minLength: 8})}/>
                    {errors.email && <span style={{color: "red"}}>E-mail inválido</span>}

                    <input className='form-field' type='password' placeholder='Senha' name='password' ref={register({required:true, minLength: 8})}/>
                    {errors.password && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                    <input className='form-btn' type='submit'/>
                    {!errors.email && !errors.password && <span style={{color: "red", margin: "1rem"}}>{message}</span>}
                </form>


                <Footer/>

            </div>

        )
    
}

export default Login;
