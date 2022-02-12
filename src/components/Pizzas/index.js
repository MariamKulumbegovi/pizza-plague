import React from 'react'
import { PizzasContainer,ProductWrapper,AddToCart,Img_cart} from './PizzasElements'
import FavouriteProduct from '../Products/FavouriteProduct'


const Pizzas = ({data}) => {

  const Location=window.location.pathname.toString().split("/")[1]
 
   
  return (
    <PizzasContainer>
   
       <ProductWrapper>
        {data.map((product) => {
          
            {/* return (
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
          ); */}
        if(Location === product.type){
          return <FavouriteProduct key={product.id} product={product} />
        }
      
        })}
      </ProductWrapper>
    </PizzasContainer>
  )
}

export default Pizzas