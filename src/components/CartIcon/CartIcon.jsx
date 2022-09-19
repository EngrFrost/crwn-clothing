import React from 'react';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { userContext } from '../userContext/userContext';
import './CartIcons.scss';
function CartIcon({ toggleHandler }) {
  const { data } = useContext(userContext);
  return (
    <div
      className='cart-icon-container'
      onClick={toggleHandler}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {data.cartCount}</span>
    </div>
  );
}

export default CartIcon;
