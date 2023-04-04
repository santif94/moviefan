import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';

import Buscador from "./paginas/Buscador";
import Estrenos from "./paginas/Estrenos";
import Contacto from "./paginas/Contacto";
import Inicio from './paginas/Inicio';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Menu/>
          <div className= "container pt-5 mt-1">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Estrenos" element={<Estrenos />} />
              <Route path="/Buscador" element={<Buscador />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
