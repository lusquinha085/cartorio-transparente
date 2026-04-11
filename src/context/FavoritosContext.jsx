import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(atendente) {
    const existe = favoritos.find((f) => f.id === atendente.id);

    if (existe) {
      setFavoritos(favoritos.filter((f) => f.id !== atendente.id));
    } else {
      setFavoritos([...favoritos, atendente]);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}