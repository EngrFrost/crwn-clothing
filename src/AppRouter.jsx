import { React, useEffect, useState } from 'react';
import './categories.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Layout/Header/Header';
import SignIn from './pages/SignIn/SignIn';
import UserProvider from './components/userContext/userContext';
import Checkout from './pages/Checkout/Checkout';
function AppRouter() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default AppRouter;
