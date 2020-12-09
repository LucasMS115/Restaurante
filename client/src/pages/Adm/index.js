import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import config from '../../config';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const url = config.url;

const Adm = (props) => {

    const [rows, setRows] = useState([]);

    const getReserves = async () => {

        let reserves;
        
        await fetch(`${url}reservesTable/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            reserves = data;
        });
        
        console.log(reserves)
        setRows(reserves)
    }

    useEffect(() => {
        getReserves()
    }, [])

    return (
        <div id="title">
            <Header
                type="2"
                btns={[]}
                btnsType={'link'} //not used on this page
                title={'Administrador'}
                subtitle={''}
                separator={'Alguma coisa'}
            />

            <Table
                title="Reservas"
                columns={["Nome", "Quantidade", "Dia", "Hora", "Salão"]}
                rows={rows}
            />

            <Card
                name="Prato 1"
                price="100,00"
                description="Top demais"
            />

            <Footer />
        </div>
    );
};

export default Adm;