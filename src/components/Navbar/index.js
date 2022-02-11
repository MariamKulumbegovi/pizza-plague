import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Nav, NavLink, NavIcon, Bars,ShoppingCart ,ShoppingCartQTY} from './NavbarElements';
import {FiShoppingCart} from 'react-icons/fi'
const Navbar = () => { 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <NavLink to='/'>PIZZA PLAGUE</NavLink>
        <ShoppingCart to="/cart" >
        <ShoppingCartQTY>7</ShoppingCartQTY>
          <FiShoppingCart fontSize="xx-large" />
        </ShoppingCart>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
      <Sidebar ShoppingCartQTY={2} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
