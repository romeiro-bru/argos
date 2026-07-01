import data from "../pets.json";
import { Card } from "../common/components/card";
import type { PetsList } from "../common/types";
import { NoData } from "../../components/noData";
import {
  FavoritesContext,
  type FavoriteItem,
} from "../common/context/favoritesProvider";
import { useContext } from "react";
import { WarningTag } from "../../components/warningTag";

export const foundFavorites = (
  list: PetsList[],
  savedFavorites: FavoriteItem[],
) => list.filter((dog) => savedFavorites.some((fav) => fav.id === dog.id));

export default function Favorites() {
  const list = data as PetsList[];

  const context = useContext(FavoritesContext);
  if (!context) return null;
  const { favorites } = context;

  return (
    <main>
      <div className="mb-8">
        <h1 className="mb-6">Favorites</h1>
        <WarningTag
          message="É necessário estar
          logado em uma conta para finalizar o processo de adoção."
        />
      </div>

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
