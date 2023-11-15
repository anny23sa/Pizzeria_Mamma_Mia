import React from 'react';
import { useParams } from 'react-router-dom';
import PizzasCards from '../components/PizzasCards';

const Detalle = () => {
  const { name } = useParams();
  // Aquí deberías obtener la información de la pizza según el nombre desde tu contexto o API

  const pizza = {
    name: 'Pizza de ejemplo',
    stats: [{ name: 'Calorías', base: 500 }],
    image: 'url_de_la_imagen',
  };

  return (
    <div>
      <h2>Detalles de la Pizza</h2>
      <PizzasCards pizza={pizza} />
      {/* Agrega botón para agregar al carrito */}
    </div>
  );
};

export default Detalle;




/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PizzasCard from "../components/PizzasCards";

const Detalle = () => {
  const { name } = useParams();
  const [pizza, setPizza] = useState({});

  const url = '../../pizzas.json'; // Ajusta la ruta de tu archivo de datos

  const getPizza = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      // Busca la pizza por nombre en los datos
      const foundPizza = data.photos.find((pizza) => pizza.name === name);

      if (foundPizza) {
        const { image, name, desc, ingredients, price } = foundPizza;
        setPizza({ image, name, desc, ingredients, price });
      } else {
        console.error(`No se encontró la pizza con el nombre ${name}`);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, [name]);

  return (
    <>
      <PizzasCard pizza={pizza} /> 
    </>
  );
};

export default Detalle;*/








