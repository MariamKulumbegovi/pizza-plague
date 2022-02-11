import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideTextWrap,
  CartIcon,
  CartQTY,
  PIZZAPLAGUE
} from './SidebarElements';
import {FiShoppingCart} from 'react-icons/fi'
import {GiFullPizza} from 'react-icons/gi'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <CartIcon  to="/cart">
    <CartQTY>7</CartQTY>
    <FiShoppingCart fontSize="xx-large" />
    </CartIcon>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/pizzas'>Pizzas</SidebarLink>
        <SidebarLink to='/desserts'>Desserts</SidebarLink>
      </SidebarMenu>
      <SideTextWrap>
        <PIZZAPLAGUE> PIZZA PLAGUE </PIZZAPLAGUE><GiFullPizza fontSize="x-large" />
      </SideTextWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
