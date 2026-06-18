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
