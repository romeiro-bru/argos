import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useGetPetsService } from "../common/hooks/useGetPetsService";
import { SkeletonLoadingPreview } from "./skeletonLoadingPreview";

interface PetsPreviewProps {
  limit?: number;
}

export function PetsPreview({ limit = 3 }: PetsPreviewProps) {
  const { pets, isLoading: fetching } = useGetPetsService();

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
        {fetching && <SkeletonLoadingPreview count={6} />}

        {pets.slice(0, limit).map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            className="card relative overflow-hidden rounded-2xl block shadow-md"
          >
            <img
              className="h-40 w-45 object-cover"
              alt={item.name}
              src={item.imageUrl}
            />

            <div className="absolute bottom-[0.8rem] left-4 text-white z-10">
              <span>
                {item.name} | {item.state}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
