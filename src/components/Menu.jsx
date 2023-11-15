import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar
      className="justify-content-between px-5"
      variant="light"
      style={{ background: "#58585a" }}
    >
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
          to="/"
        >
          Pizzeria Mamma Mia!
        </NavLink>
      </div>

      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/TotalCarrito"
        >
          🛒Carrito De Compra
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Menu;




/*import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "#58585a" }}
    >
      
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/pokemones"
        >
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
    </Navbar>
  );
};
export default Menu;*/