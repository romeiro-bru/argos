import data from "../pets.json";
import { Card } from "../common/components/card";
import type { PetsList } from "../common/types";
import { NoData } from "../../components/noData";
import {
  FavoritesContext,
  type FavoriteItem,
} from "../common/context/favoritesProvider";
import { useContext } from "react";

export const foundFavorites = (list: PetsList[], savedFavorites: FavoriteItem[]) =>
  list.filter((dog) => savedFavorites.some((fav) => fav.id === dog.id));

export default function Favorites() {
  const list = data as PetsList[];

  const context = useContext(FavoritesContext);
  if (!context) return null;
  const { favorites } = context;

  return (
    <main>
      <h1 className="mb-10">Favorites</h1>

      {favorites.length > 0 ? (
        <Card list={foundFavorites(list, favorites)} />
      ) : (
        <NoData
          text="Você ainda não tem um aumigo favorito."
          supportText="Volte para a página inicial e favorite um amigo!"
        />
      )}
    </main>
  );
}
