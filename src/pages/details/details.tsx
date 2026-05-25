import { useParams } from "react-router-dom";
import list from "../pets.json";
import { useEffect, useState } from "react";
import type { PetsList } from "../home/types";
import { NoData } from "../../components/noData";

export const findDetails = (id: string) => list.filter((dog) => dog.id === id) as PetsList[];

export default function Details() {
  const [pet, setPet] = useState<PetsList | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const found = findDetails(id || "")[0];
    setPet(found);
    setLoading(false);
  }, [id]);

  return (
    <main className="grid grid-cols-3 gap-6">
      {loading && <p>Carregando...</p>}

      {!pet ? (
        <NoData text="Não encontramos nenhum pet correspondente a sua busca." />
      ) : (
        <>
          <div>
            <img
              className=" h-auto object-cover rounded-xl"
              src={pet?.img}
              alt={pet?.name}
            />
          </div>

          <article className="col-span-2">
            <h1 className="mb-6">{pet?.name}</h1>

            <h3 className="text-lg font-semibold text-[var(--subtitle)] mb-2">
              Temperamento
            </h3>
            {pet?.temperament.map((temp) => (
              <p
                className="rounded-md bg-blue-100 text-blue-800 w-fit px-2"
                key={temp}
              >
                {temp}
              </p>
            ))}
          </article>
        </>
      )}
    </main>
  );
}
