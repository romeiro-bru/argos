import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

export default function Landing() {
  return (
    <main className="relative flex justify-center">
      <div className="flex absolute top-[9rem] gap-2">
        <Link to={appRoutes.HOME.path}>
          <button
            className="flex gap-2 bg-[var(--text-hover)] cursor-pointer rounded-lg px-[2rem] py-[1rem] hover:bg-[var(--primary-color)] shadow-md"
            type="button"
          >
            <img src="/find.png" className="h-8" />
            <div className="flex flex-col text-left">
              <span className="font-semibold">Adotar um pet</span>
              <span className="text-xs">veja animais para adoção</span>
            </div>
          </button>
        </Link>

        <Link to={appRoutes.REGISTER.path}>
          <button
            className="flex gap-2 border-2 border-[var(--text-hover)] cursor-pointer border-solid rounded-lg px-[1rem] py-[1rem] hover:bg-[var(--card-bg)] shadow-md"
            type="button"
          >
            <img src="/animal-care.png" className="h-8" />
            <div className="flex flex-col text-left">
              <span className="flex font-semibold">Divulgar um pet</span>
              <span className="text-xs">encontre um lar para um animal</span>
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute top-70 right-0">
        <img src="/landing.png" className="h-90" />
      </div>
    </main>
  );
}
