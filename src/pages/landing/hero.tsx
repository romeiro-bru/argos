import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

export function Hero() {
  return (
    <div className="lg:flex md:flex-wrap w-fit m-auto justify-between pl-4 bg-[var(--primary-color-light)] shadow-md rounded-md md:flex-wrap gap-2">
      <div className="lg:px-8">
        <section className="mt-8">
          <h2 className="w-fit text-3xl!">
            Cada adoção é uma vida transformada
          </h2>
          <p className="max-w-md ">
            Encontre seu novo melhor amigo! Conectamos animais resgatados a
            famílias prontas para oferecer amor e cuidado.
          </p>
        </section>

        <div className="lg:flex gap-2 my-8 md:flex-wrap md:gap-2">
          <Link to={appRoutes.HOME.path}>
            <button
              className="flex gap-2 bg-[var(--secondary-color)] border-2 border-[var(--secondary-color)] cursor-pointer rounded-lg p-[8px] lg:px-[2rem] py-[1rem] hover:bg-[var(--secondary-color-hover)] shadow-md"
              type="button"
            >
              <img src="/find.png" className="h-9" />
              <div className="flex flex-col text-left text-xl">
                <span className="font-semibold">Adotar um pet</span>
                <span className="text-xs">veja animais para adoção</span>
              </div>
            </button>
          </Link>

          <Link to={appRoutes.SIGN_UP.path}>
            <button
              className="flex gap-2 border-2 border-[var(--text-hover)] cursor-pointer border-solid rounded-lg p-[8px] lg:px-[1rem] lg:py-[1rem] lg:mt-0 mt-2 hover:bg-[var(--bg)] shadow-md"
              type="button"
            >
              <img src="/animal-care.png" className="h-9" />
              <div className="flex flex-col text-left text-xl">
                <span className="flex font-semibold">Divulgar um pet</span>
                <span className="text-xs">encontre um lar para um animal</span>
              </div>
            </button>
          </Link>
        </div>
      </div>

      <img src="/hero.png" className="lg:h-79 rounded-r-md md:h-30" />
    </div>
  );
}
