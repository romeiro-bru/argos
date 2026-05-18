import data from "../dogs.json";
import { Card } from "../common/components/card";
import type { PetsList } from "../home/types";
import { useEffect } from "react";
import { NoData } from "../../components/noData";

const foundFavorites = (list: PetsList[], savedFavorites: string[]) =>
  list.filter((dog) => savedFavorites?.includes(dog.id));

export default function Favorites() {
  const list = data as PetsList[];
  const savedFavorites = localStorage.getItem("favoriteList");

  useEffect(() => {
    console.log("savedFavorites", savedFavorites);
  }, [savedFavorites]);

  const parsedFavorites: string[] = JSON.parse(savedFavorites || "[]")

  return (
    <main>
      <h1 className="mb-10">Favorites</h1>
      {parsedFavorites.length > 0 ? (
        <Card list={foundFavorites(list, parsedFavorites)} />
      ) : (
        <NoData
          text="Você ainda não tem nenhum aumigo favorito."
          supportText="Volte para a página inicial e favorite um amigo!"
        />
      )}
    </main>
  );
}
