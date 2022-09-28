import { createAction } from '../../utils/reducer.utils';
import { CART_ACTION_TYPES } from './cartType';

export const setIsCartOpen = (bolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bolean);

const addCartItem = (cartItems, prodID) => {
  console.log(cartItems);
  console.log(prodID);
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === prodID.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === prodID.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }
  return [...cartItems, { ...prodID, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  );
};
const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const AddItemtoCart = (cartItems, producttoAdd) => {
  const newCartItems = addCartItem(cartItems, producttoAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, prodID) => {
  const newCartItems = clearCartItem(cartItems, prodID);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
