import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index: 10;
  width: 90%;
  height: 5rem;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

`

const NavBar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default NavBar;
