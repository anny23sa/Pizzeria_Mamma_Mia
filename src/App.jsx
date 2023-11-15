//
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import PizzasCards, { ProviderImg } from "./components/ContextImg";


const App = () => {
  return (
    <div className="App">
      <ProviderImg>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<PizzasCards />} />
        <Route path="/pizzas/:name" element={<Detalle />} />
      </Routes>
      </ProviderImg>
    </div>
  );
};
export default App;