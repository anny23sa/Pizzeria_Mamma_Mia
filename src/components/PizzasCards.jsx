
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ContextImg } from "../components/ContextImg";
import { NavLink } from 'react-router-dom';

const PizzasCards = ({ pizza }) => {
  // const { id, desc, img, name, ingredients, price } = pizza;
  const { addToCart, removeFromCart, cart } = useContext(ContextImg);

  const isInCart = cart.some((item) => item.name === pizza.name);

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(pizza);
    } else {
      addToCart(pizza);
    }
  };

  return (
    <Card style={{height:"100%"}} className="mt-5 mx-auto p-2">
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title className="fw-bold">{pizza.name}</Card.Title>
            <ul className="text-left">
          <Card.Text>
            {pizza.desc}
              {pizza.ingredients?.map((type, i) => (
                <li key={i}>{type}</li>
              ))}
            ${pizza.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Card.Text>
            </ul>
        <NavLink to={"/pizza/"+pizza.id} >
          Ver más
        </NavLink>
        <Button variant={isInCart ? "danger" : "primary"} onClick={handleToggleCart} className="m-2">
          {isInCart ? "Eliminar" : "Añadir"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PizzasCards;





