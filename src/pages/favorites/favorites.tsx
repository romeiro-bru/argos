import { Card } from "../common/components/card";
import { NoData } from "../../components/noData";
import {
  FavoritesContext,
  type FavoriteItem,
} from "../common/context/favoritesProvider";
import { useContext } from "react";
import { WarningTag } from "../../components/warningTag";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { useGetPetsService } from "../common/hooks/useGetPetsService";
import type { GetPetsListResponse } from "../adoption/types";

export const foundFavorites = (
  list: GetPetsListResponse[],
  savedFavorites: FavoriteItem[],
) => list.filter((dog) => savedFavorites.some((fav) => fav.id === dog.id));

export default function Favorites() {
  const { pets } = useGetPetsService();

  const context = useContext(FavoritesContext);
  if (!context) return null;
  const { favorites } = context;
  const { session } = useUserSupabase();

  return (
    <main>
      <div className="mb-8">
        <h1 className="mb-6">Favoritos</h1>
        {!session && (
          <WarningTag
            message="É necessário estar
          logado em uma conta para finalizar o processo de adoção."
          />
        )}
      </div>

      {favorites.length > 0 ? (
        <Card list={foundFavorites(pets, favorites)} />
      ) : (
        <NoData
          text="Você ainda não tem um aumigo favorito."
          supportText="Volte para a página inicial e favorite um amigo!"
        />
      )}
    </main>
  );
}
