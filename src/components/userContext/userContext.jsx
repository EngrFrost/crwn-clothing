import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListiner } from '../../utils/firebase.utils';
import productList from '../../shop-data.json';

export const userContext = createContext();
export const allProvider = userContext.Provider;
export const allConsumer = userContext.Consumer;

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    currentUser: null,
    products: productList,
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListiner((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setData((prev) => {
        return { ...prev, currentUser: user };
      });
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setData((prev) => {
      const newcartCount = data.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      console.log(newcartCount);
      return { ...prev, cartCount: newcartCount };
    });
  }, [data.cartItems]);

  useEffect(() => {
    const newCartTotal = data.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    console.log(newCartTotal);
    setData((prev) => {
      return { ...prev, cartTotal: newCartTotal };
    });
  }, [data.cartItems]);

  const addCartItem = (cartItems, prodID) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === prodID.id);
    if (existingCartItem) {
      console.log('exist');
      return cartItems.map((cartItem) =>
        cartItem.id === prodID.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
      );
    }
    return [...cartItems, { ...prodID, quantity: 1 }];
  };

  const AddItemtoCart = (producttoAdd) => {
    console.log('test');
    setData((prev) => {
      return { ...prev, cartItems: addCartItem(data.cartItems, producttoAdd) };
    });
  };
  const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
    );
  };

  const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  };

  const clearItemFromCart = (prodID) => {
    setData((prev) => {
      return { ...prev, cartItems: clearCartItem(data.cartItems, prodID) };
    });
  };
  const removeItemToCart = (cartItemToRemove) => {
    setData((prev) => {
      return { ...prev, cartItems: removeCartItem(data.cartItems, cartItemToRemove) };
    });
  };

  return (
    <userContext.Provider value={{ data, setData, AddItemtoCart, removeItemToCart, clearItemFromCart }}>
      {children}
    </userContext.Provider>
  );
};
export default UserProvider;