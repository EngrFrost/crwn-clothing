import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Category from '../../components/Category/Category';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { getCategiruesAndDocuments } from '../../utils/firebase.utils';

import './Shop.scss';
import { fetchCategoriesAsync, setCategoriesMap } from '../../store/categories/categoryAction';
function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
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
