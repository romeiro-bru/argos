import data from "../dogs.json";
import { Card } from "../common/components/card";
import type { PetsList } from "../home/types";

const foundFavorites = (list: PetsList[], savedFavorites: string[]) => list.filter((dog) => savedFavorites?.includes(dog.id));

export default function Favorites() {
  const list = data as PetsList[];
  const savedFavorites = localStorage.getItem("favoriteList");

  return (
    <main>
      <h1 className="mb-10">Favorites</h1>

      <Card list={foundFavorites(list, savedFavorites)} />
    </main>
  );
}
