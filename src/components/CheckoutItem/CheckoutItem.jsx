import React, { useContext } from 'react';
import { userContext } from '../userContext/userContext';
import './CheckoutItem.scss';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemToCart, AddItemtoCart, clearItemFromCart } = useContext(userContext);

  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

  const removeITemToCartHandler = () => removeItemToCart(cartItem);

  const addItemHandler = () => AddItemtoCart(cartItem);
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
