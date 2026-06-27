type PulseLoadingProps = {
  variant?: "text" | "circle" | "rect";
  width?: string | number;
  height?: string | number;
  count?: number;
  label?: string;
  className?: string;
};

export function PulseLoading({
  variant = "rect",
  width,
  height,
  count = 1,
  label,
  className,
}: PulseLoadingProps) {
  const baseStyles = "animate-pulse bg-[var(--disabled)] rounded-lg";

  const variantStyles = {
    text: "h-4 rounded w-full",
    circle: "rounded-full aspect-square",
    rect: "rounded-lg w-full h-24",
  };

  const style = {
    width: width ?? "",
    height: height ?? "",
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <span className="flex flex-col font-semibold">{label}</span>}

      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={style}
          className={`${baseStyles}, ${variantStyles[variant]}`}
        />
      ))}
    </div>
  );
}
