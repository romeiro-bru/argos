import type { PetsList } from "../home/types";
import dogsBreed from "../../dogsBreed.json";
import { temper } from "./temper";

interface AgeInterface {
  label: string;
  value: PetsList["age"];
}
interface SizeInterface {
  label: string;
  value: PetsList["size"];
}

// TODO: barra de progresso
const health = [
  { label: "Castrado", value: "neutered" },
  { label: "Vacinado", value: "vaccinated" },
  { label: "Vermifugado", value: "dewormed" },
];

const age: AgeInterface[] = [
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];

const size: SizeInterface[] = [
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];

export default function Registration() {
  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4">
        <div>
          <span>Selecione a espécie</span>

          <div>
            <label className="mr-1" htmlFor="gato">
              gato
            </label>
            <input id="gato" name="species" value="Gato" type="radio" />
          </div>

          <div>
            <label className="mr-1" htmlFor="cachorro">
              cachorro
            </label>
            <input id="cachorro" name="species" value="Cachorro" type="radio" />
          </div>
        </div>

        <div>
          <label className="flex flex-col mb-2" htmlFor="name">
            Nome do pet para adoção
          </label>
          <input type="text" id="name" className="p-2 rounded-lg text-sm w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="breed">Raça</label>
          <select className="text-sm" id="breed">
            {dogsBreed.map((breed) => (
              <option value={breed.name}>{breed.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="age">Idade</label>
          <select id="age" className="text-sm">
            {age.map((pet) => (
              <option value={pet.value}>{pet.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Sexo</label>
          <select id="gender" className="text-sm">
            <option value="macho">macho</option>
            <option value="fêmea">fêmea</option>
          </select>
        </div>

        <div>
          <span className="flex flex-col mb-4">
            Informações sobre a saúde do animal:
          </span>
          {health.map((pet) => (
            <>
              <label className="mr-1" htmlFor={pet.value}>
                {pet.label}
              </label>
              <input
                type="checkbox"
                value={pet.value}
                name={pet.value}
                id={pet.value}
                className="mr-4"
              />
            </>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="size">Porte</label>
          <select id="size" className="text-sm">
            {size.map((pet) => (
              <option value={pet.value}>{pet.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="state">Estado</label>
          <select id="state" className="text-sm">
            <option value="RJ">Rio de Janeiro</option>
            <option value="SP">São Paulo</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="city">Cidade</label>
          <select id="city" className="text-sm">
            <option value="Gato">Rio de Janeiro</option>
            <option value="Cachorro">São Paulo</option>
          </select>
        </div>


        <div>
          <span className="mr-2">Temperamento</span>
          <div className="flex flex-wrap">
            {temper.map((item) => (
              <>
                <label className="mr-1" htmlFor={item}>
                  {item}
                </label>
                <input
                  type="checkbox"
                  value={item}
                  name={item}
                  id={item}
                  className="mr-2"
                />
              </>
            ))}
          </div>
        </div>
      </form>
    </main>
  );
}
