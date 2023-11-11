
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
//import Pokemones from "./views/Pokemones";
import PizzasCard from "./components/PizzasCards";


const App = () => {
  return (
    <div className="App">
      <Menu />
      <Routes>
        {/* DEFINIR LAS RUTAS HOME, POKEMONES, DETALLE */}
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<PizzasCard />} />
        <Route path="/pizzas/:name" element={<Detalle />} />
      </Routes>
    </div>
  );
};
export default App;