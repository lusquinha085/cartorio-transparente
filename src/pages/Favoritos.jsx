import { useFavoritos } from "../context/FavoritosContext";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div>
      <h1>Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>Nenhum favorito</p>
      ) : (
        favoritos.map((f) => (
          <div key={f.id}>
            <h3>{f.nome}</h3>
            <p>{f.setor}</p>
            <h3>{f.ramal}</h3>
          </div>
        ))
      )}
    </div>
  );
}
