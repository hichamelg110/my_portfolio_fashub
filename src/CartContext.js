import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product, size) => {
    setCart(prevCart => [...prevCart, { ...product, selectedSize: size }]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const addToFavorites = (product) => {
    setFavorites(prevFavorites => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);