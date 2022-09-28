import React, { useContext } from 'react';
import { userContext } from '../userContext/userContext';
import './CheckoutItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemtoCart, removeItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';
function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  // const { removeItemToCart, AddItemtoCart, clearItemFromCart } = useContext(userContext);
  const dispatch = useDispatch();
  const clearItemFromCartHandler = () => dispatch(clearItemFromCartHandler(cartItems, cartItem));

  const removeITemToCartHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(AddItemtoCart(cartItems, cartItem));
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img
          src={imageUrl}
          alt='img'
        />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={removeITemToCartHandler}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={addItemHandler}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-item'
        onClick={clearItemFromCartHandler}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
