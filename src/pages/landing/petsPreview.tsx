import data from "../pets.json";
import type { PetsList } from "../common/types";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

interface PetsPreviewProps {
  limit?: number;
}

export function PetsPreview({ limit = 3 }: PetsPreviewProps) {
  const list = data as PetsList[];

  return (
    <article className="m-auto w-fit my-10">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-2">Procurando um lar agora:</h3>

        <Link to={appRoutes.ADOPTION.path}>
          <span className="flex gap-2 items-center text-xs">
            Ver todos
            <img src="/arrow-right.png" className="h-3" />
          </span>
        </Link>
      </div>
      <div className="flex flex-wrap  gap-4">
        {list.slice(0, limit).map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            className="card rounded-2xl block shadow-md"
          >
            <img
              className="h-40 w-45 object-cover"
              alt={item.name}
              src={item.img}
            />

            <div className="card-text">
              <span>{item.name} | {item.state}</span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
