import type { PetsList } from "../../home/types";
import { FavoriteButton } from "./favoriteButton";

interface CardProps {
  list: PetsList[] | null;
}

export function Card({ list }: CardProps) {

  return (
    <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 relative sm:grid-cols-2">
      {list?.map((dog: PetsList) => (
        <article
          className="grid shadow-[var(--shadow)] shadow-md w-54 pl-3 pr-2 py-2 rounded-2xl"
          key={dog.id}
          id={dog.id}
        >
          <div className="card rounded-2xl">
            <FavoriteButton             
              id={dog.id}
              name={dog.name}
            />
            <img className="h-46 w-50 object-cover" alt="dog" src={dog.img} />
            <div className="card-text">
              <span>
                {dog.name} | {dog.cidade}
              </span>
            </div>
          </div>

          <span className="divide-solid">
            {dog.genre}, {dog.age}
          </span>
          <span>Porte {dog.size}</span>

          <button className="cursor-pointer bg-[var(--secondary-color)] font-semibold hover:bg-[var(--secondary-color-hover)] text-white my-2 py-2 px-4 rounded-full">
            ver perfil
          </button>
        </article>
      ))}
    </div>
  );
}
