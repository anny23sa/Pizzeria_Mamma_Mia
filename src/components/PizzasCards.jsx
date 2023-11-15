
// Update PizzasCard.js
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ContextImg } from "../components/ContextImg";

const PizzasCards = ({ pizza }) => {
  const { img, name, ingredients, price } = pizza;
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
    <Card style={{ width: "34rem" }} className="mt-5 mx-auto flex-row p-2">
      <Card.Img height="300" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <ul className="text-left">
          <Card.Text>
            {prices?.map((price, i) => (
              <li key={i}>
                {price.name}: {price.base}
              </li>
            ))}
            {types?.map((type, i) => (
              <li key={i}>{type.name}</li>
            ))}
          </Card.Text>
        </ul>
        <Button variant={isInCart ? "danger" : "primary"} onClick={handleToggleCart}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PizzasCards;





