import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalheServico from "./pages/DetalheServico";
import Atendentes from "./pages/Atendentes";
import Favoritos from "./pages/Favoritos";
import Navbar from "./components/Navbar";
function App() {
  return (
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servico/:id" element={<DetalheServico />} />
        <Route path="/atendentes" element={<Atendentes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
