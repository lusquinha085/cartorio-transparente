import { useEffect, useState } from "react";
import { fetchServicos } from "../services/api";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
export default function Home() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    fetchServicos().then(setServicos);
  }, []);

  return (
          <div className="container">
        <h1>Serviços do Cartório</h1>

        {servicos.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          servicos.map((s) => (
            <Card key={s.id}>
              <h3>{s.nome}</h3>
              <p>R$ {s.preco}</p>

              <Link to={`/servico/${s.id}`} className="btn-detalhes">
                 🔍 Ver detalhes
              </Link>
            </Card>
          ))
        )}
      </div>
  );
}