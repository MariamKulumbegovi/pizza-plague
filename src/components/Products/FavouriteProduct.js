import React from 'react';
import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElements';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AddInCart } from './ProductsElements';
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../redux/shopping/shopping-actions';
import { Link } from 'react-router-dom';

const FavouriteProduct = ({ product, addToCart, loadCurrentItem }) => {
  const Location = window.location.pathname;

  return (
    <ProductCard key={product.id}>
      <Link onClick={() => loadCurrentItem(product)} to={`/product/${product.id}`}>
        <ProductImg src={product.img} alt={product.alt} />
      </Link>
      {Location != '/' ? (
        <AddInCart onClick={() => addToCart(product.id)}>
          <BsFillCartPlusFill color="#ffff" cursor="grab" />
        </AddInCart>
      ) : (
        ''
      )}
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        {Location === '/' ? <ProductDesc>{product.desc}</ProductDesc> : ''}
        <ProductPrice>$ {product.price}</ProductPrice>
        {Location === '/' ? (
          <ProductButton onClick={() => addToCart(product.id)}>
            {product.button}
          </ProductButton>
        ) : (
          ''
        )}
      </ProductInfo>
    </ProductCard>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    loadCurrentItem: item => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(FavouriteProduct);
