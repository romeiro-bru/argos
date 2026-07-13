import { Accordion } from "./accordion";
import { Hero } from "./hero";
import { ImpactStats } from "./impactStats";
import { Steps } from "./steps";

import { PetsPreview } from "./petsPreview";
import { useGetPetsService } from "../common/hooks/useGetPetsService";
import { useMemo } from "react";

export default function Landing() {
  const { pets, isLoading } = useGetPetsService();

  const stats = useMemo(() => {
    return {
      petsCount: pets.length,
      statesCount: new Set(pets.map((item) => item.state)).size,
    };
  }, [pets]);

  return (
    <main className="md:flex flex-wrap lg:block">
      <Hero />
      <PetsPreview pets={pets} isLoading={isLoading} limit={6} />
      <ImpactStats
        petsCount={stats.petsCount}
        statesCount={stats.statesCount}
        isLoading={isLoading}
      />
      <Steps />

      <div className="flex flex-wrap justify-center gap-8 m-auto items-center">
        <Accordion />
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
