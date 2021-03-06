import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { reservesTable, dishesTable } from '../../Api';
import {useForm} from 'react-hook-form';


const Adm = (props) => {

    const  {register, handleSubmit, errors, reset} = useForm();

    const onSubmit = async (data) => {
        
        await dishesTable.postDish(data);
        await getDishes();
        reset();
        setMessage("Concluído :)");

    }

    const [rows, setRows] = useState([]);
    const [arqDishes, setArqDishes] = useState([]);
    const [activeDishes, setActiveDishes] = useState([]);
    const [message, setMessage] = useState(" ");

    const getReserves = async () => {
        const data = await reservesTable.getReserves();
        setRows(data); 
    };

    const getDishes = async () => {
        const raw = await dishesTable.getDishes();
        let active = [];
        let arq = [];
        
        raw.forEach((el) => {
            if(el.active) active.push(el);
        });

        raw.forEach((el) => {
            if(!el.active) arq.push(el);
        });
        
        setActiveDishes(active); 
        setArqDishes(arq);
    };

    const buttonFuncDel = async (id) => {
        let confirmDelete = window.confirm('Tem certeza que deseja deletar PERMANENTEMENTE esse item?')
        if (confirmDelete) {
            await dishesTable.deleteDish(id);
            await getDishes();
        };

    };

    const buttonFuncUpdateActive = async (id) => {
        let confirmArq = window.confirm('Tem certeza que deseja arquivar esse item?')
        if (confirmArq) {
            await dishesTable.updateActive(id);
            await getDishes();
        };
    };

    const buttonFuncUpdateArq = async (id) => {
        let confirmArq = window.confirm('Tem certeza que deseja arquivar esse item?')
        if (confirmArq) {
            await dishesTable.updateArq(id);
            await getDishes();
        };
    };

    useEffect(() => {
        getReserves();
        getDishes();
    }, []);

    return (
        <div style={{textAlign: "center"}} id="title">
            <Header
                type="2"
                btns={[]}
                btnsType={'link'} //not used on this page
                title={'Administrador'}
                subtitle={''}
                separator={'Alguma coisa'} />

            <Table
                title="Reservas"
                columns={["Nome", "Quantidade", "Dia", "Hora", "Salão"]}
                rows={rows}
            />
            

            {activeDishes[0] && <h1 style={{margin: "1rem", fontSize:"3rem"}}> Pratos Ativos </h1>}

            {activeDishes.map((el) => (
                <Card
                    key={el.id}
                    id={el.id.toString()}
                    name={el.name}
                    firstLine={`Preço: ${el.price}`}
                    secondLine={`Descrição: ${el.description}`}
                    func1={buttonFuncDel}
                    func2={buttonFuncUpdateActive}
                    btnNames={["Excluir","Arquivar"]}
                />
            ))}

            {arqDishes[0] && <h1 style={{margin: "2rem", fontSize:"3rem"}}> Pratos Arquivados </h1>}

            {arqDishes.map((el) => (
                <Card
                    key={el.id}
                    id={el.id.toString()}
                    name={el.name}
                    firstLine={`Preço: ${el.price}`}
                    secondLine={`Descrição: ${el.description}`}
                    func1={buttonFuncDel}
                    func2={buttonFuncUpdateArq}
                    btnNames={["Excluir","Ativar"]}
                />
            ))}


                <div style={{margin: "3rem"}}>

                    <h1 style={{margin: "1rem", fontSize:"3rem"}}> Adicionar novo prato </h1>


                    <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>
                        <input className='form-field' type='text' placeholder='Nome' name='name' ref={register({required:true, minLength: 4})}/>
                        {errors.name && <span style={{color: "red"}}>Nome inválido</span>}

                        <input className='form-field' type='text' placeholder='Preço' name='price' ref={register({required:true, minLength: 2})}/>
                        {errors.price && <span style={{color: "red", marginBottom: "1rem"}}>Preço inválido</span>}

                        <textarea className='form-text-area' type='text' placeholder='Descrição' name='desc' ref={register({required:true, minLength: 10})}/>
                        {errors.desc && <span style={{color: "red", marginBottom: "1rem"}}>Descrição inválida</span>}
                        
                        <select className='form-select' name='type' ref={register({required:true, minLength: 2})}>
                            <option value="">Tipo...</option>
                            <option value="entradas">Entradas</option>
                            <option value="principais">Principais</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="sobremesas">Sobremesas</option>
                        </select>
                        {errors.type && <span style={{color: "red", marginBottom: "1rem"}}>Tipo inválido</span>}


                        <input className='form-btn' type='submit'/>
                        {!errors.name && !errors.price && !errors.desc && <span style={{color: "green", margin: "1rem", fontSize: "2rem"}}>{message}</span>}
                    </form>

                </div>

            <Footer />
        </div>
    );
};

export default Adm;