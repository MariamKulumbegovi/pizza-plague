import React from 'react'
import { ProductWrapper,DetailedInfoWrapper,
    ProductTitle,ProductDescription ,
    ProductPrice} from '../Cart/CartElements'
import {PDPContainer,PDPImage} from './PDPElements'
import {addToCart} from '../../redux/shopping/shopping-actions'
import { ProductButton } from '../Products/ProductsElements'
import {connect} from 'react-redux'

const PDP = ({currentItem, addToCart}) => {
    console.log(currentItem)
  return (
   <PDPContainer>
      <ProductWrapper>
            <PDPImage src={currentItem.img}  />
            <DetailedInfoWrapper >
                <ProductTitle>{currentItem.name}</ProductTitle>
                <ProductDescription>{currentItem.desc}</ProductDescription>
                <ProductPrice> $ {currentItem.price}</ProductPrice>
                <ProductButton onClick={()=> addToCart(currentItem.id)} > {currentItem.button} </ProductButton>
            </DetailedInfoWrapper>
        </ProductWrapper>
   </PDPContainer>
  )
}

const mapStateToProps= state =>{
    return {
        currentItem:state.shop.currentItem
    }
}
const mapDispatchToProps= dispatch =>{
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PDP)