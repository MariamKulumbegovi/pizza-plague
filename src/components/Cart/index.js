import React from 'react'
import { CartContainer, ProductDescription, ProductImg, ProductTitle, ProductWrapper,DetailedInfoWrapper, ProductPrice, Quantity,
   QtyWrapper, CartSummaryWrapper, CartSummaryTitle, CartTotal,CheckoutButton} from './CartElements'
import img from '../../images/pizza-1.jpg'
import {BsTrash} from 'react-icons/bs'

const Cart = () => {
  return (
    <CartContainer >
        <ProductWrapper>
            <ProductImg src={img}  />
            <DetailedInfoWrapper >
                <ProductTitle>Marinara Pizza</ProductTitle>
                <ProductDescription>'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto</ProductDescription>
                <ProductPrice>15$</ProductPrice>
            </DetailedInfoWrapper>
            <QtyWrapper>
                <Quantity type="number" />
                <BsTrash cursor="pointer" fontSize='x-large'/>
            </QtyWrapper>
        </ProductWrapper>
        <ProductWrapper>
            <ProductImg src={img}  />
            <DetailedInfoWrapper >
                <ProductTitle>Marinara Pizza</ProductTitle>
                <ProductDescription>'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto</ProductDescription>
                <ProductPrice>15$</ProductPrice>
            </DetailedInfoWrapper>
            <QtyWrapper>
                <Quantity type="number" />
                <BsTrash cursor="pointer" fontSize='x-large'/>
            </QtyWrapper>
        </ProductWrapper>
        
        <CartSummaryWrapper>
              <CartSummaryTitle>Cart Summary</CartSummaryTitle>
              <CartTotal>Total: (1 item ) 180$</CartTotal>
              <CheckoutButton > Proceed To Checkout</CheckoutButton>
            </CartSummaryWrapper>
    </CartContainer>
  )
}

export default Cart