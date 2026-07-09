import { useNavigate } from "react-router-dom";
import { Tooltip } from "./tooltip/tooltip";
import { FavoriteButton } from "./favoriteButton";
import { female } from "../../../assets/female";
import { male } from "../../../assets/male";
import { petSizes } from "../helpers/petSizes";
import { truncateText } from "../helpers/truncateText";
import type { GetPetsListResponse } from "../../adoption/types";

interface CardProps {
  list: GetPetsListResponse[] | null;
}

export function Card({ list }: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 relative sm:grid-cols-2">
      {list?.map((pet: GetPetsListResponse) => (
        <article
          className="grid shadow-[var(--shadow)] shadow-md w-54 pl-3 pr-2 py-2 rounded-2xl overflow-visible"
          key={pet.id}
          id={pet.id}
        >
          <div className="card rounded-2xl">
            <FavoriteButton
              id={pet.id}
              name={pet.name}
              className="top-2 right-2"
            />
            <img
              className="h-46 w-50 object-cover"
              alt="pet"
              src={pet.imageUrl}
            />
            <div className="card-text text-sm">
              <Tooltip
                text={pet.name}
                tooltipText={truncateText(pet.name, 10)}
                position="top"
              />{" "}
              | {truncateText(pet.city, 14)}
            </div>
          </div>

          <span className="flex mt-2 gap-x-2">
            {pet.age}

            {pet.gender === "Fêmea" ? (
              <div className="mt-1">
                <Tooltip text="Fêmea" tooltipText={female} position="right" />
              </div>
            ) : (
              <div className="mt-1">
                <Tooltip text="Macho" tooltipText={male} position="right" />
              </div>
            )}
          </span>
          <span className="flex">
            Porte {pet.size} {petSizes({ size: pet.size }).icon}
          </span>

          <button
            onClick={() => navigate(`/details/${pet.id}`)}
            className="cursor-pointer bg-[var(--secondary-color)] font-semibold hover:bg-[var(--secondary-color-hover)] text-white my-2 py-2 px-4 rounded-full"
          >
            ver perfil
          </button>
        </article>
      ))}
    </div>
  );
}
