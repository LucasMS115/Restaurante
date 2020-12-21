import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { reservesTable, dishesTable } from '../../Api';


const Adm = (props) => {

    const [rows, setRows] = useState([]);
    const [dishes, setDishes] = useState([]);

    const getReserves = async () => {
        setRows(await reservesTable.getReserves()); 
    };

    const getDishes = async () => {
        console.log("Gets batata");
        setDishes(await dishesTable.getDishes()); 
    };

    const buttonFuncDel = (id) => {
        console.log("aaaa => " + dishes);
        let confirmDelete = window.confirm('Tem certeza que deseja deletar esse item?')
        if (confirmDelete) {
            /* dishesTable.deleteDish(id); */
            let leftDishes = dishes.filter(el => el.id !== parseInt(id))
            setDishes(leftDishes);
            /* getDishes(); */
        };

    };

    const buttonFuncUpdate = (id) => {
        let confirmArq = window.confirm('Tem certeza que deseja arquivar esse item?')
        if (confirmArq) {
            dishesTable.updateActive(id);
        };
    };

    useEffect(() => {
        getReserves();
        getDishes();
    }, []);

    useEffect(() => {
        setDishes(dishes)
        console.log(dishes)
        
    }, [dishes]);

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

                    {dishes.map((el) => (
                        <Card
                            key={el.id}
                            id={el.id.toString()}
                            name={el.name}
                            price={el.price}
                            description={el.description}
                            funcDel={buttonFuncDel}
                            funcUpt={buttonFuncUpdate}
                        />
                    ))}

            <Footer />
        </div>
    );
};

export default Adm;