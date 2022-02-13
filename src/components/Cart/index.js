import React, { useEffect, useState } from 'react';
import {
  CartContainer,
  ProductDescription,
  ProductImg,
  ProductTitle,
  ProductWrapper,
  DetailedInfoWrapper,
  ProductPrice,
  QtyWrapper,
  CartSummaryWrapper,
  CartSummaryTitle,
  CartTotal,
  CheckoutButton,
} from './CartElements';
import { connect } from 'react-redux';
import DeleteFromCart from './DeleteFromCart';
import CartQty from './CartQty';
import { Link } from 'react-router-dom';
import { loadCurrentItem } from '../../redux/shopping/shopping-actions';

const Cart = ({ cart, loadCurrentItem }) => {
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.map(item => {
      items += item.qty;
      price += item.price * item.qty;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <CartContainer>
      {cart.map(product => {
        return (
          <ProductWrapper key={product.id}>
            <Link
              onClick={() => loadCurrentItem(product)}
              to={`/product/${product.id}`}
            >
              <ProductImg src={product.img} />
            </Link>
            <DetailedInfoWrapper>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.desc}</ProductDescription>
              <ProductPrice>$ {product.price}</ProductPrice>
            </DetailedInfoWrapper>
            <QtyWrapper>
              <CartQty prodID={product.id} prodqty={product.qty} />
              <DeleteFromCart prodId={product.id} />
            </QtyWrapper>
          </ProductWrapper>
        );
      })}

      <CartSummaryWrapper>
        <CartSummaryTitle>Cart Summary</CartSummaryTitle>
        <CartTotal>
          Total: ({totalItems} ) $ {totalPrice}
        </CartTotal>
        <CheckoutButton> Proceed To Checkout</CheckoutButton>
      </CartSummaryWrapper>
    </CartContainer>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentItem: item => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
