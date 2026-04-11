import { useEffect, useState } from "react";
import { fetchAtendentes } from "../services/api";
import { useFavoritos } from "../context/FavoritosContext";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Atendentes() {
  const [atendentes, setAtendentes] = useState([]);
  const { toggleFavorito } = useFavoritos();

  useEffect(() => {
    fetchAtendentes()
      .then((data) => {
        setAtendentes(data || []);
      })
      .catch(() => {
        setAtendentes([]);
      });
  }, []);

  return (
    <div className="container">
      <h1>Atendentes</h1>

      {atendentes.length === 0 ? (
        <p>Carregando ou nenhum atendente...</p>
      ) : (
        atendentes.map((a) => (
          <Card key={a.id}>
            <h3>{a.nome}</h3>
            <p>{a.setor}</p>
            <p>Ramal: {a.ramal}</p>

            <Button onClick={() => toggleFavorito(a)}>
              Favoritar
            </Button>
          </Card>
        ))
      )}
    </div>
  );
}