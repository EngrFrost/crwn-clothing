import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../../components/Category/Category';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

import './Shop.scss';
function Shop() {
  return (
    <Routes>
      <Route
        index
        element={<CategoryPreview />}
      />
      <Route
        path='/:category'
        element={<Category />}
      />
    </Routes>
  );
}

export default Shop;
