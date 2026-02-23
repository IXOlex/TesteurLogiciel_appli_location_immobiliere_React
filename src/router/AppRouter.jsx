import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/About/About";
import Housing from "../pages/Housing";
import Error from "../pages/Error";

function AppRouter() {
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

