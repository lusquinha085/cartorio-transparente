import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Cartório Online</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/atendentes">Atendentes</Link>
        <Link to="/favoritos">Favoritos</Link>
      </div>
    </nav>
  );
}