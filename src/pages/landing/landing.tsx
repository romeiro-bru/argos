import { Accordion } from "./accordion";
import { Hero } from "./hero";
import { Steps } from "./steps";

export default function Landing() {
  return (
    <main className="md:flex flex-wrap lg:block">
      <Hero />

      <div className="flex flex-wrap gap-2 mt-12 text-center m-auto w-fit">
        <section className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg">
          <span className="font-semibold">1324</span>
          <span>animais adotados</span>
        </section>
        <section className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg">
          <span className="font-semibold">345</span>
          <span>disponíveis agora</span>
        </section>
        <section className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg">
          <span className="font-semibold">73</span>
          <span>ONGs parceiras</span>
        </section>
        <section className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg rounded-lg">
          <span className="font-semibold">27</span>
          <span>estados atendidos</span>
        </section>
      </div>
      <Steps />

      {/* <div className="absolute top-80 right-0">
        <img src="/landing.png" className="h-90" />
      </div> */}

      <div className="flex flex-wrap">
        <Accordion />
        <img src="/cat-main.avif" className="h-[18rem] rounded-lg shadow-md" />
      </div>

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
