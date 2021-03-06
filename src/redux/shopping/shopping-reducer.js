import { productData } from '../../components/Products/data';
import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [productData], //{id,title.desc.price,img}
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [], //check if the item is in localStorage{id,title.desc.price,img,qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products[0].find(
        product => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
