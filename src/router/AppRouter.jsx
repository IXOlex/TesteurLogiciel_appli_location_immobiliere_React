import { Routes, Route } from "react-router-dom";// Importation des composants nécessaires pour le routage avec React Router
import Home from "../pages/Home/Home";// Importation des pages pour le routage
import About from "../pages/About/About";
import Housing from "../pages/Housing/Housing";
import Error from "../pages/Error/Error";

function AppRouter() {// Composant de routage pour l'application
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;

