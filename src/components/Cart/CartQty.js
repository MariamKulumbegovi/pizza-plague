import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adjustItemQty } from '../../redux/shopping/shopping-actions'
import { Quantity } from './CartElements'

const CartQty = ({prodqty , adjustItemQty,prodID}) => {

    const [input,setInput]=useState(prodqty)
    const onChangeHandler=e =>{
        setInput(e.target.value)
        adjustItemQty(prodID , e.target.value)

      }

  return <Quantity min="1" name="qty" value={input} type="number" onChange={onChangeHandler} />
}

const mapDispatchToProps= (dispatch) =>{

    return {
        adjustItemQty: (id,value) => dispatch(adjustItemQty(id,value))
    }
}
export default connect(null, mapDispatchToProps)(CartQty)