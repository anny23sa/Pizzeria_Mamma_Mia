import React, { createContext, useEffect, useState } from "react";

export const ContextImg = createContext();

const PHOTO_URL = 'pizzas.json';

export const ProviderImg = ({ children }) => {
  const [images, setImages] = useState([]);

  const toggleLike = (updatedImages) => {
    setImages(updatedImages);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }

    getData();
  }, []);

  return (
    <ContextImg.Provider value={{ images, toggleLike }}>
      {children}
    </ContextImg.Provider>
  );
};

export default ProviderImg; 


   