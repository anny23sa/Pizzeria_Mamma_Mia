import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import PizzasCards, { ProviderImg } from "./components/ContextImg";


const App = () => {
  return (
    <div className="App">
      <ProviderImg>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pizzas" element={<PizzasCards />} /> */}
        <Route path="/pizza/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      </ProviderImg>
    </div>
  );
};
export default App;