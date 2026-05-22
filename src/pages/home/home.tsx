import { NoData } from "../../components/noData";
import { Card } from "../common/components/card";
import data from "../pets.json";
import type { PetsList } from "./types";

export default function Home() {
  const list = data as PetsList[];

  return (
    <main>
      <h1 className="mb-10">Aumigos disponíveis para adoção</h1>

      {list.length > 0 && <Card list={list} />}

      {list?.length === 0 && (
        <NoData text="Não encontramos nenhum pet correspondente a sua busca." />
      )}
    </main>
  );
}
