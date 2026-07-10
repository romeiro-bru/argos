interface CardSkeletonLoadingProps {
  count?: number;
}

export function SkeletonLoadingCard({ count = 10 }: CardSkeletonLoadingProps) {
  return (
    <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 relative sm:grid-cols-2">
      {Array.from({ length: count }).map((_, index) => (
        <article
          key={index}
          className="grid shadow-[var(--shadow)] shadow-md w-54 pl-3 pr-2 py-2 rounded-2xl overflow-visible"
        >
          {/* imagem */}
          <div className="relative overflow-hidden rounded-2xl h-46 w-50 animate-pulse bg-gray-300" />

          {/* idade + gênero */}
          <span className="flex mt-2 gap-x-2 items-center">
            <div className="h-4 w-10 rounded animate-pulse bg-gray-300" />
            <div className="h-4 w-4 rounded-full animate-pulse bg-gray-300" />
          </span>

          {/* porte */}
          <span className="flex mt-1">
            <div className="h-4 w-24 rounded animate-pulse bg-gray-300" />
          </span>

          {/* botão */}
          <div className="h-9 w-full rounded-full my-2 animate-pulse bg-gray-300" />
        </article>
      ))}
    </div>
  );
}
