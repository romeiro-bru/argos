
import { Accordion } from "./accordion";
import { Hero } from "./hero";

export default function Landing() {
  return (
    <main className="md:flex flex-wrap lg:block">
     <Hero />
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
