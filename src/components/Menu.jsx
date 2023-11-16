import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { ContextImg } from '../components/ContextImg';

const Menu = () => {
  const { cart } = useContext(ContextImg);

  
  let pizza = 0
  var total = 0
  for (let index = 0; index < cart.length; index++) {
    pizza = cart[index];
    total += pizza.price
  }
  return (
    <Navbar className="justify-content-between px-5" variant="light" style={{ background: "#58585a" }}>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "me-3 active" : "me-3")} to="/">
          Pizzeria Mamma Mia!
        </NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/carrito">
          🛒Carrito De Compra ({cart.length}): ${total}
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Menu;








