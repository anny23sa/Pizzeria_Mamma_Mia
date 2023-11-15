import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { ContextImg } from '../components/ContextImg';

const Menu = () => {
  const { cart } = useContext(ContextImg);

  return (
    <Navbar className="justify-content-between px-5" variant="light" style={{ background: "#58585a" }}>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "me-3 active" : "me-3")} to="/">
          Pizzeria Mamma Mia!
        </NavLink>
      </div>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/TotalCarrito">
          🛒Carrito De Compra ({cart.length})
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Menu;





