import React, { useEffect, useState } from 'react'
import { CartContainer, ProductDescription, ProductImg, ProductTitle, ProductWrapper,DetailedInfoWrapper, ProductPrice, 
   QtyWrapper, CartSummaryWrapper, CartSummaryTitle, CartTotal,CheckoutButton} from './CartElements'
import {connect} from 'react-redux'
import DeleteFromCart from './DeleteFromCart'

import CartQty from './CartQty'
const Cart = ({cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  

 

  useEffect(() => {
    let items = 0;
    let price = 0;

    
    cart.map((item)=>{
        items += item.qty;
        price += item.price * item.qty
    })

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  
  return (
    <CartContainer >
       {cart.map(product =>{

           return (
             
               <ProductWrapper key={product.id}>
            <ProductImg src={product.img}  />
            <DetailedInfoWrapper >
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.desc}</ProductDescription>
                <ProductPrice>$ {product.price}</ProductPrice>
            </DetailedInfoWrapper>
            <QtyWrapper>
               <CartQty prodID={product.id} prodqty={product.qty} />
                <DeleteFromCart prodId={product.id}/>
            </QtyWrapper>
        </ProductWrapper>
           )
       })}
        
        <CartSummaryWrapper>
              <CartSummaryTitle>Cart Summary</CartSummaryTitle>
              <CartTotal>Total: ({totalItems} ) $ {totalPrice}</CartTotal>
              <CheckoutButton > Proceed To Checkout</CheckoutButton>
            </CartSummaryWrapper>
    </CartContainer>
  )
}

const mapStateToProps= state =>{

    return {
        cart: state.shop.cart,
    }
}


export default connect(mapStateToProps)(Cart)