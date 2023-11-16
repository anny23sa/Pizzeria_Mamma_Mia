import React, {useContext} from 'react';
import { ContextImg } from "../components/ContextImg";
import { useParams } from 'react-router-dom';
import PizzasCards from '../components/PizzasCards';

const Detalle = () => {
  const { images } = useContext(ContextImg);
  const { id } = useParams();

  let pizza = 0
  for (let index = 0; index < images.length; index++) {
    pizza = images[index];
    if(id == pizza.id){
      break
    }
  }

  return (
    <div>
      <h2>Detalles de la Pizza</h2>
      <PizzasCards pizza={pizza} />
    </div>
  );
};

export default Detalle;