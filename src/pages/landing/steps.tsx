import { Link } from "react-router-dom";
import { Paw } from "../../assets/paw";
import { appRoutes } from "../../routes";

const list = [
  {
    title: "Cadastre-se",
    description: "Crie seu perfil e conte seu estilo de vida",
    icon: <img src="/user-yellow.png" className="h-5 mr-2" />,
  },
  {
    title: "Encontre um match",
    description: "Veja pets compatíveis com você",
    icon: <Paw color="#eea900" size={35} />,
  },

  {
    title: "Adote",
    description: "Finalize o processo e leve para o seu lar",
    icon: <img src="/house-yellow.png" className="h-6 mr-2" />,
  },
];

export function Steps() {
  return (
    <section className="m-auto w-fit my-8">
      <div className="flex justify-between">
        <h3 className="font-semibold">Como funciona</h3>

        <Link to={appRoutes.HOME.path}>
          <span className="flex gap-2 items-center text-xs">
            Ver todos
            <img src="/arrow-right.png" className="h-3" />
          </span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 text-[var(--subtitle)] mt-2">
        {list.map((item, i) => (
          <div key={i} className="grid border-1 border-[var(--subtitle)] px-4 py-6 rounded-lg">
            <span className="flex font-semibold">
              {item.icon}
              {item.title}
            </span>
            <p className="text-xs text-[var(--shadow)]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
