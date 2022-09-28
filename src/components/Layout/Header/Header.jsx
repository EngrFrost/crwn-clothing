import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import crown from '../../../assets/crown.svg';
import { useContext } from 'react';
import { userContext } from '../../userContext/userContext';
import { signOutUser } from '../../../utils/firebase.utils';
import CartIcon from '../../CartIcon/CartIcon';
import Cartdropdown from '../../CartIcon/Cartdropdown';
import { selectCurrentUser } from '../../../store/user/userSelector';
import { selectIsCartOpen } from '../../../store/cart/cartSelector';
import { setIsCartOpen } from '../../../store/cart/cartAction';
import { setCurrentUser } from '../../../store/user/userAction';
function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutHandler = async () => {
    await signOutUser();

    dispatch(setCurrentUser(null));
  };
 
  const toggleHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    // console.log(isCartOpen);
  };
  return (
    <Fragment>
      <div className='navigation'>
        <Link
          to='/'
          className='logo-container'
        >
          <div>
            <img
              src={crown}
              alt='crown'
            />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link
            to='shop'
            className='nav-link'
          >
            Shop
          </Link>
          {currentUser ? (
            <span
              className='nav-link'
              onClick={signOutHandler}
            >
              {' '}
              SIGN OUT
            </span>
          ) : (
            <Link
              to='sign-in'
              className='nav-link'
            >
              Sign In
            </Link>
          )}
          <CartIcon toggleHandler={toggleHandler} />
        </div>
        {isCartOpen && <Cartdropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
