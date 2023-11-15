//
import React, { useContext } from "react";
import { ContextImg } from "../components/ContextImg";
import PizzasCards from "../components/PizzasCards";

const Home = () => {
  const backgroundImageUrl = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c";
  const { images } = useContext(ContextImg);

  return (
    <div>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '300px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
          <h1>¡Pizzería Mamma Mia!</h1>
          <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">Pizzas Disponibles</h2>
        <div className="row">
          {images && images.map((pizza) => (
            <div key={pizza.name} className="col-md-4 mb-4">
              <PizzasCards pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;





