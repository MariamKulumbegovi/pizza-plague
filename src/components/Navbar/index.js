import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar';
import { Nav, NavLink, NavIcon, Bars,ShoppingCart ,ShoppingCartQTY} from './NavbarElements';
import {FiShoppingCart} from 'react-icons/fi'
import {connect} from 'react-redux'

const Navbar = ({cart}) => { 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [cartCount,setCartCount]=useState(0)

  useEffect(()=>{
    let count=0;
    cart.forEach(item =>{
      count += item.qty
    })
    setCartCount(count)
  },[cart, cartCount])
  return (
    <>
      <Nav>
        <NavLink to='/'>PIZZA PLAGUE</NavLink>
        <ShoppingCart to="/cart" >
        <ShoppingCartQTY>{cartCount}</ShoppingCartQTY>
          <FiShoppingCart fontSize="xx-large" />
        </ShoppingCart>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
      <Sidebar ShoppingCartQTY={cartCount} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart:state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)
