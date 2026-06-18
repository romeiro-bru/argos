import { Accordion } from "./accordion";
import { Hero } from "./hero";
import { ImpactStats } from "./impactStats";
import { Steps } from "./steps";

export default function Landing() {
  return (
    <main className="md:flex flex-wrap lg:block">
      <Hero />
      <ImpactStats />
      <Steps />

      <div className="flex flex-wrap justify-center gap-8 m-auto items-center">
        <Accordion />
        <img src="/cat-main.avif" className="h-[17rem] rounded-lg shadow-md" />
      </div>

      <div className="flex w-fit m-auto mt-2 gap-2 items-center text-xs text-[var(--shadow)] border bg-[#f0edf1] rounded-sm px-2 py-4">
        <img src="sign.png" className="h-4" />
        <p>
          Argos não compactua com a venda de animais de estimação. Não incentive
          esta prática.
        </p>
      </div>
    </main>
  );
}
