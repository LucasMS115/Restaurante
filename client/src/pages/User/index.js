import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import './styles/styles.css';

import Btn2 from '../../components/Btn2';

const User = () => {

    const { token, setToken } = useContext(StoreContext);
    const history = useHistory();
    
    const logOut = () => {
        console.log("logOut");
        setToken(null);
        return history.push('/user');
    }

    return(
        <div id="title">
            <h1 className="t6">Página do usuário {token}</h1>
            <Btn2 type="0" text="Sair" func={logOut}/>
        </div>
    );
};

export default User;