interface ImpactStatsProps {
  petsCount: number;
  statesCount: number;
  isLoading: boolean;
}

export function ImpactStats({
  petsCount,
  statesCount,
  isLoading,
}: ImpactStatsProps) {
  const list = [
    { title: petsCount, description: "disponíveis agora" },
    { title: "246", description: "animais adotados" },
    { title: "12", description: "ONGs parceiras" },
    { title: statesCount, description: "estados atendidos" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-12 m-auto w-fit text-center">
      {list.map((item, i) => (
        <section
          key={i}
          className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg"
        >
          <span className="font-semibold">
            {isLoading ? (
              <img src="/loading.png" className="h-4 animate-spin m-auto" />
            ) : (
              item.title
            )}
          </span>
          <span className="mt-2">{item.description}</span>
        </section>
      ))}
    </div>
  );
}
