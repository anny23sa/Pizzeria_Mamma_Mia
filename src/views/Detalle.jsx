import { useParams } from "react-router-dom";
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

export default Detalle;








/*import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PizzasCard from "../components/PizzasCards";

const Detalle = () => {
    const { name } = useParams();
    const [pizza, setPizza] = useState({})

    const url = `../pizzas.json/${name}`

     const getPizza = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const image = data.sprites.other.dream_world.front_default
        // falta agregar los stats y los types aqui
        setPizza({image, name});
       
    }

    useEffect(() => {
        getPizza();
    }, [])

    
  return (
    <>
      <PizzasCard pizza={pizza} />
    </>
  )
}

export default Detalle*/