import { createContext, useState, useEffect, useReducer } from 'react';
import {
  addCollectionAndDocuments,
  createUserDocumentFromAuth,
  getCategiruesAndDocuments,
  onAuthStateChangedListiner,
} from '../../utils/firebase.utils';
import productList from '../../shop-data.js';
import { type } from '@testing-library/user-event/dist/type';

export const userContext = createContext();
export const allProvider = userContext.Provider;
export const allConsumer = userContext.Consumer;

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    products: productList,
    categoriesMap: [],
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  // first try to store data
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', productList);
  // }, []);

  return <userContext.Provider value={{ data, setData }}>{children}</userContext.Provider>;
};
export default UserProvider;
