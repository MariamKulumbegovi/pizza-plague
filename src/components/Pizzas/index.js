import React from 'react'
import { PizzasContainer,ProductWrapper,AddToCart,Img_cart} from './PizzasElements'
import {
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductPrice,
   } from '../Products/ProductsElements'
   import {BsFillCartPlusFill} from 'react-icons/bs'
const Pizzas = ({data}) => {
   
  return (
    <PizzasContainer>
       <ProductWrapper>
        {data.map((product) => {
          
            return (
            <ProductCard key={product.id}>
              <Img_cart>
              <ProductImg src={product.img} alt={product.alt} />
              <AddToCart>
                <BsFillCartPlusFill  color='#ffff' cursor="grab" />
              </AddToCart>
              </Img_cart>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
      
        })}
      </ProductWrapper>
    </PizzasContainer>
  )
}

export default Pizzas