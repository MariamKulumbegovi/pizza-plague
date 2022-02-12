import React from 'react'
import { connect } from 'react-redux'
import {removeFromCart} from '../../redux/shopping/shopping-actions'
import {BsTrash} from 'react-icons/bs'
const DeleteFromCart = ({removeFromCart, prodId}) => {
  return <BsTrash  onClick={()=>removeFromCart(prodId)} cursor="pointer" fontSize='x-large'/>
    
 
}
const mapDispatchToProps= (dispatch) =>{

    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}
export default connect(null, mapDispatchToProps)(DeleteFromCart)