import { CART_ACTION_TYPES } from './cartType';

export const CART_INITIAL_STATE = { isCartOpen: false, cartItems: [], cartCount: 0, cartTotal: 0 };

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
};
