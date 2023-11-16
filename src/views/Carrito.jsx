import React, {useContext} from 'react';
import { Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { ContextImg } from "../components/ContextImg";
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Carrito = () => {
  const { cart } = useContext(ContextImg);
  console.log(cart)
  let pizza = 0

  const carrito = []
  var total = 0
  for (let index = 0; index < cart.length; index++) {
    pizza = cart[index];
    total += pizza.price
    const found = carrito.find((element) => element.id == pizza.id);
    pizza.cantidad = 1
    if (found) {
      pizza.cantidad = pizza.cantidad + 1
    }
    else {
      carrito.push(pizza)
    }
  }

  return (
    <div>
      <h2>Carrito:</h2>
    <Container>
          {carrito && carrito.map((pizza) => (
      <Row key={pizza.id}>
        <Col>
          <Image src={pizza.img} width={"50"} rounded  />
        </Col>
        <Col>
          {pizza.name}
        </Col>
        <Col>
          ${pizza.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Col>
        <Col>
          <Button variant={"primary"} className="m-2">+
          </Button>
        </Col>
        <Col>
          {pizza.cantidad}
        </Col>
        <Col>
          <Button variant={"primary"} className="m-2">-
          </Button>
        </Col>
      </Row>
          ))}
          TOTAL: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
    </Container>
    </div>
  );
};

export default Carrito;