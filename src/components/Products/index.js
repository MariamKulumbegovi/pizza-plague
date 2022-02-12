import React from 'react';
import FavouriteProduct from './FavouriteProduct';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data , type}) => {

  

 console.log(data)
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product) => {
          if (product.id <=3 && product.type === type){
            return (
           <FavouriteProduct key={product.id} product={product}/>
          );
          }
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
