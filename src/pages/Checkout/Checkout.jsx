import React from 'react';
import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { userContext } from '../../components/userContext/userContext';
import './Checkout.scss';
function Checkout() {
  const { data, AddItemtoCart } = useContext(userContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {data.cartItems.map((cartItems) => {
        return (
          <CheckoutItem
            key={cartItems.id}
            cartItem={cartItems}
          />
        );
      })}
      <span className='total'>Total:{data.cartTotal} </span>
    </div>
  );
}

export default Checkout;
