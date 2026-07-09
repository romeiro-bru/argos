import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoData } from "../../components/noData";
import { Check } from "../../assets/check";
import { Pin } from "../../assets/pin";
import { Paw } from "../../assets/paw";
import { Cake } from "../../assets/cake";
import { Female } from "../../assets/female";
import { Male } from "../../assets/male";
import { petSizes } from "../common/helpers/petSizes";
import { FavoriteButton } from "../common/components/favoriteButton";
import { useGetPetsService } from "../common/hooks/useGetPetsService";
import type { GetPetsListResponse } from "../adoption/types";

export const findDetails = (id: string, pets: GetPetsListResponse[]) =>
  pets.filter((pet) => String(pet.id) === id) as GetPetsListResponse[];

export default function Details() {
  const { id } = useParams();
  const [pet, setPet] = useState<GetPetsListResponse>();

  const { pets, isLoading } = useGetPetsService();


  useEffect(() => {
    const found = findDetails(id ?? "", pets)[0];

    setPet(found);
  }, [id, pets]);

  return (
    <main>
      {isLoading && <p>Carregando...</p>}

      {!pet ? (
        <NoData text="Não encontramos nenhum pet correspondente a sua busca." />
      ) : (
        <div className="grid grid-cols-3 gap-10 px-4">
          <div>
            <img
              className="h-auto object-cover rounded-xl"
              src={pet.imageUrl}
              alt={pet?.name}
            />
          </div>

          <article className="col-span-2 relative w-4/5">
            <div className="flex">
              <h1 className="mb-6">{pet?.name}</h1>
              <FavoriteButton
                id={pet.id}
                name={pet.name}
                className="left-50 top-0"
              />
            </div>

            <span className="flex mb-2">
              <Pin />
              {pet?.city}, {pet?.state}.
            </span>

            <h3 className="text-lg font-semibold text-[var(--subtitle)] mb-2">
              Saúde
            </h3>
            <section className="grid mb-2">
              {pet.neutered && (
                <span className="flex items-center">
                  Castrado <Check color="green" />
                </span>
              )}

              {pet.vaccinated && (
                <span className="flex items-center">
                  Vacinado <Check color="green" />
                </span>
              )}

              {pet.dewormed && (
                <span className="flex items-center">
                  Vermifugado <Check color="green" />
                </span>
              )}
            </section>

            <h3 className="text-lg font-semibold text-[var(--subtitle)] mb-2">
              Raça
            </h3>
            <span className="flex items-center mb-4">
              <Paw /> {pet?.breed}
            </span>

            <h3 className="text-lg font-semibold text-[var(--subtitle)] mb-2">
              Características
            </h3>
            <section className="flex mb-4 gap-4">
              <div className="flex">
                <Cake /> {pet.age}
              </div>
              <div className="flex">
                {petSizes({ size: pet.size }).icon} {pet.size} (
                {petSizes({ size: pet.size }).description})
              </div>
              {pet.gender === "Fêmea" ? (
                <div className="flex">
                  <Female /> Fêmea
                </div>
              ) : (
                <div className="flex">
                  <Male /> Macho
                </div>
              )}
            </section>

            <h3 className="text-lg font-semibold text-[var(--subtitle)] mb-2">
              Temperamento
            </h3>
            <section className="flex flex-wrap gap-2">
              {pet?.temperament.map((temp) => (
                <p className="rounded-md bg-blue-100 w-fit px-2" key={temp}>
                  {temp}
                </p>
              ))}
            </section>
          </article>
        </div>
      )}
    </main>
  );
}
