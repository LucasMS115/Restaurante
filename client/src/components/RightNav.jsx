import React from 'react';
import styled from 'styled-components';
import NavBt from './NavBt';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .teste{
    margin-top: 6rem;
    visibility: hidden;
    position: absolute;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #272626;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 75vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .teste{
      /* visibility: ${({ open }) => open ? 'block' : 'block'}; */
      visibility: visible;
      position: relative;
    }

  }
`;

const RightNav = ({ open }) => {
  return (
    <div>
      <div className="logo-container">
        <Link to='/'>
            <Icon type="logo" class="logo" />
        </Link>
      </div>

      <div className="nav-bar">
        <Ul open={open}>
            <NavBt path="/" name="Início"/>
            <NavBt path="/menu" name="Cardápio"/>
            <NavBt path="/reserves" name="Reservas"/>
            <NavBt path="/user" name="Conta"/>

            <div className="teste">
              <div className="flex-container-column ">
                <p style={{fontSize: "2rem", margin:"0"}} className="subtitulo2">NOME DO RESTAURANTE</p>
                <p style={{margin:"0"}} className="subtitulo2">HORÁRIO DE ATENDIMENTO</p>
                <p style={{margin:"0"}} className="subtitulo2">Aberto todos os dias</p>
                <p style={{margin:"0"}} className="subtitulo2">das 5h às 24h</p>
                <h2 style={{fontSize: "8rem", margin:"0"}} className="titulo2">Bom Apetite</h2>
              </div>
            </div>

        </Ul>

      </div>
    </div>
  )
}

export default RightNav
