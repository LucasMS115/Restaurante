import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoreContext from '../../components/Store/Context';
import { usersTable } from '../../Api';
import './styles/style.css';


const Login = () => {

    const [message, setMessage] = useState('');

    const {setToken} = useContext(StoreContext);
    const history = useHistory();
    
    const  {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {

        setToken(null);
        setMessage('');
        let token = await usersTable.validateUser(data.email, data.password);

        console.log(data.email);
        console.log(data.password)
        
        if(Number.isInteger(token)){
            console.log(data);
            console.log(token);
            setToken(token);
            return history.push('/user');
        }
        else setMessage('Usuário Inválido');
    }
  
        return (
            <div>

                <Header 
                    type="2"
                    btns={[]}
                    btnsType={'link'} //not used on this page
                    title={'Entrar'}
                    subtitle={''}
                    separator={'Alguma coisa'}
                />
    

                <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>
                    <input className='form-field' type='text' placeholder='E-mail' name='email' ref={register({required:true, minLength: 8})}/>
                    {errors.email && <span style={{color: "red"}}>E-mail inválido</span>}

                    <input className='form-field' type='password' placeholder='Senha' name='password' ref={register({required:true, minLength: 3})}/>
                    {errors.password && <span style={{color: "red", marginBottom: "1rem"}}>Senha inválida</span>}

                    <input className='form-btn' type='submit'/>
                    {!errors.email && !errors.password && <span style={{color: "red", margin: "1rem"}}>{message}</span>}
                </form>


                <Footer/>

            </div>

        )
    
}

export default Login;
