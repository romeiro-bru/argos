import { useNavigate } from "react-router-dom";
import { female } from "../../../assets/female";
import { male } from "../../../assets/male";
import { Tooltip } from "../../../components/tooltip/tooltip";
import type { PetsList } from "../../home/types";
import { FavoriteButton } from "./favoriteButton";

interface CardProps {
  list: PetsList[] | null;
}

export function Card({ list }: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 relative sm:grid-cols-2">
      {list?.map((dog: PetsList) => (
        <article
          className="grid shadow-[var(--shadow)] shadow-md w-54 pl-3 pr-2 py-2 rounded-2xl"
          key={dog.id}
          id={dog.id}
        >
          <div className="card rounded-2xl">
            <FavoriteButton id={dog.id} name={dog.name} />
            <img className="h-46 w-50 object-cover" alt="dog" src={dog.img} />
            <div className="card-text">
              <span>
                {dog.name} | {dog.cidade}
              </span>
            </div>
          </div>

          <span className="flex mt-2 gap-x-2">
            {dog.age}

            {dog.gender === "Fêmea" ? (
              <div className="mt-1">
                <Tooltip text="Fêmea" tooltipText={female} />
              </div>
            ) : (
              <div className="mt-1">
                <Tooltip text="Macho" tooltipText={male} />
              </div>
            )}
          </span>
          <span>Porte {dog.size}</span>

          <button
            onClick={() => navigate(`/details/${dog.id}`)}
            className="cursor-pointer bg-[var(--secondary-color)] font-semibold hover:bg-[var(--secondary-color-hover)] text-white my-2 py-2 px-4 rounded-full"
          >
            ver perfil
          </button>
        </article>
      ))}
    </div>
  );
}
