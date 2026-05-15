import data from "./dogs.json";

export default function Home() {
  return (
    <main>
      <h1 className="mb-10">Aumigos disponíveis para adoção</h1>

      <div className="grid grid-cols-5 gap-x-4 gap-y-8 relative">
        {data.map((dog) => (
          <article
            className="grid shadow-[var(--shadow)] shadow-md w-54 pl-3 pr-2 py-2 rounded-2xl"
            key={dog.id}
          >
            <div className="card rounded-2xl">
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
    </main>
  );
}
