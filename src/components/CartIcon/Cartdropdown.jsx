import { React } from 'react';
import { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import './Cartdropdown.scss';
import { selectCartItems } from '../../store/cart/cartSelector';
function Cartdropdown() {
  const cartItems = useSelector(selectCartItems);
  const nav = useNavigate();

  const goNav = () => {
    nav('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem
            cartItem={item}
            key={item.id}
          />
        ))}
      </div>
      <Button onClick={goNav}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default Cartdropdown;
