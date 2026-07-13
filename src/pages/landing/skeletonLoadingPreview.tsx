interface SkeletonLoadingPreviewProps {
  count?: number;
}

export function SkeletonLoadingPreview({
  count = 10,
}: SkeletonLoadingPreviewProps) {
  return (
    <div className="grid lg:grid-cols-6 gap-x-4 gap-y-8 relative sm:grid-cols-2">
      {Array.from({ length: count }).map((_, index) => (
        <article>
          {/* imagem */}
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl h-40 w-45 animate-pulse bg-gray-300"
          />
        </article>
      ))}
    </div>
  );
}
