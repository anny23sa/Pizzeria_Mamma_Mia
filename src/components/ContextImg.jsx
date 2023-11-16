//
import React, { createContext, useEffect, useState } from "react";

export const ContextImg = createContext();

const PHOTO_URL = 'pizzas.json';

export const ProviderImg = ({ children }) => {
  const [images, setImages] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleLike = (updatedImages) => {
    setImages(updatedImages);
  };

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizza) => {
    const updatedCart = cart.filter((item) => item.name !== pizza.name);
    setCart(updatedCart);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    getData();
  }, []);

  return (
    <ContextImg.Provider value={{ images, toggleLike, cart, addToCart, removeFromCart }}>
      {children}
    </ContextImg.Provider>
  );
};

export default ProviderImg;



