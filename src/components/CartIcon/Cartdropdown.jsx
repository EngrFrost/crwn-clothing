import { React } from 'react';
import { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { userContext } from '../userContext/userContext';
import { useNavigate } from 'react-router-dom';
import './Cartdropdown.scss';
function Cartdropdown() {
  const nav = useNavigate();
  const { data } = useContext(userContext);
  const goNav = () => {
    nav('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {data.cartItems.map((item) => (
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
