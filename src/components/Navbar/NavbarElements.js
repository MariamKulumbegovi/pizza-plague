import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  background-color:#242424;
  position:fixed;
  width:100%;
  z-index:800
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 17px;
    font-size:1.4rem;
    left: 25px;
  }
`;
export const ShoppingCartQTY=styled.span`
    position:absolute;
    top: -8px;
    right: -4px;
    z-index: 50;
    color: black;
    background-color: white;
    border-radius: 100%;
    width: 15px;
    height: 20px;
    text-align: center;
    font-weight:200
}
  
`
export const ShoppingCart=styled(Link)`
  display: block;
    position: absolute;
    top: 20px;
    right: 150px;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 700px) {
   display:none
  }
`
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
