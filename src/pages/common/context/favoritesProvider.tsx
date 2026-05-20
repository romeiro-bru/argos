import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
export type FavoriteItem = {
  id: string;
  name: string;
};

type FavoritesContextType = {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
};

// cria context com valor inicial null
export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);

// cria provider, ele irá envolver os outros componentes (children) e dar acesso ao context.
export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const isMounted = useRef(false); // useRef retorna .current que persiste entre renders
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteList");

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // atualiza a lista no localStorage toda vez que a lista de favorites muda
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return; // entra no if, sai sem salvar no primeiro render
    }
    //  !isMounted.current = !true = false → NÃO entra no if
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, [favorites]);

  // verifica se o item com o id enviado está na lista de favoritos, retorna um boolean
  const isFavorite = useCallback(
    (id: string) => favorites.some((item) => item.id === id),
    [favorites],
  );

  const toggleFavorite = useCallback((item: FavoriteItem) => {
    setFavorites((prev) => {
      const alreadyExists = prev.some((fav) => fav.id === item.id);
      if (alreadyExists) return prev.filter((fav) => fav.id !== item.id);
      return [...prev, item];
    });
  }, []);

  const contextValue = useMemo(
    () => ({ favorites, toggleFavorite, isFavorite }),
    [favorites, toggleFavorite, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}
