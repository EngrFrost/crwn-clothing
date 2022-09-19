import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.scss';
import crown from '../../../assets/crown.svg';
import { useContext } from 'react';
import { userContext } from '../../userContext/userContext';
import { signOutUser } from '../../../utils/firebase.utils';
import CartIcon from '../../CartIcon/CartIcon';
import Cartdropdown from '../../CartIcon/Cartdropdown';
function Header() {
  const { data, setData } = useContext(userContext);

  const signOutHandler = async () => {
    await signOutUser();
    setData((prev) => {
      return { ...prev, currentUser: null };
    });
  };
  const toggleHandler = () => {
    console.log('check')
    setData((prev) => {
      return { ...prev, isCartOpen: !prev.isCartOpen };
    });
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
          {data.currentUser ? (
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
        {data.isCartOpen && <Cartdropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
