import React from 'react';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { userContext } from '../userContext/userContext';
import { useSelector } from 'react-redux';
import './CartIcons.scss';
import { selectCartCount } from '../../store/cart/cartSelector';
function CartIcon({ toggleHandler }) {
  const cartCount = useSelector(selectCartCount);
  return (
    <div
      className='cart-icon-container'
      onClick={toggleHandler}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {cartCount}</span>
    </div>
  );
}

export default CartIcon;
