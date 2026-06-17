import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";
import { Accordion } from "./accordion";

export default function Landing() {
  return (
    <main className="md:flex flex-wrap lg:block">
      <div className="lg:flex justify-center gap-2 md:flex-wrap gap-2">
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

      {/* <div className="absolute top-80 right-0">
        <img src="/landing.png" className="h-90" />
      </div> */}

      <Accordion />

      <div className="flex w-fit m-auto gap-2 items-center text-xs text-[var(--shadow)] border bg-[#f0edf1] rounded-sm px-2 py-4">
        <img src="sign.png" className="h-4" />
        <p>
          Argos não compactua com a venda de animais de estimação. Não incentive
          esta prática.
        </p>
      </div>
    </main>
  );
}
