const list = [
  { title: "1324", description: "animais adotados" },
  { title: "345", description: "disponíveis agora" },
  { title: "73", description: "ONGs parceiras" },
  { title: "27", description: "estados atendidos" },
];

export function ImpactStats() {
  return (
    <div className="flex flex-wrap gap-2 mt-12 text-center m-auto w-fit">
      {list.map((item, i) => (
        <section
          key={i}
          className="grid bg-[var(--primary-color-light)] px-4 py-6 rounded-lg"
        >
          <span className="font-semibold">{item.title}</span>
          <span>{item.description}</span>
        </section>
      ))}
    </div>
  );
}
