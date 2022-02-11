import React from 'react'
import { ProductWrapper,ProductImg,DetailedInfoWrapper,
    ProductTitle,ProductDescription ,
    ProductPrice} from '../Cart/CartElements'
import {PDPContainer,PDPImage} from './PDPElements'
import img from '../../images/cruiser.png'
import { ProductButton } from '../Products/ProductsElements'
const PDP = () => {
  return (
   <PDPContainer>
      <ProductWrapper>
            <PDPImage src={img}  />
            <DetailedInfoWrapper >
                <ProductTitle>Cruiser</ProductTitle>
                <ProductDescription>'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto</ProductDescription>
                <ProductPrice>15$</ProductPrice>
                <ProductButton >Add to cart </ProductButton>
            </DetailedInfoWrapper>
        </ProductWrapper>
   </PDPContainer>
  )
}

export default PDP