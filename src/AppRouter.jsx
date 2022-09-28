import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './categories.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Layout/Header/Header';
import SignIn from './pages/SignIn/SignIn';

import Checkout from './pages/Checkout/Checkout';

import { createUserDocumentFromAuth, onAuthStateChangedListiner } from './utils/firebase.utils';
import { USER_ACTION_TYPES } from './store/user/userType';
import { setCurrentUser } from './store/user/userAction';

function AppRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListiner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  
  return (
    <Routes>
      <Route
        path='/'
        element={<Header />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='shop/*'
          element={<Shop />}
        />
        <Route
          path='sign-in'
          element={<SignIn />}
        />
        <Route
          path='checkout'
          element={<Checkout />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
