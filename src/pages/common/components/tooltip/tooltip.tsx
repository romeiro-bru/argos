type TooltipPosition = "top" | "bottom" | "left" | "right";

type TooltipType = {
  text: string;
  tooltipText: React.ReactNode;
  position?: TooltipPosition;
};

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({ text, tooltipText, position = "top" }: TooltipType) {
  return (
    <div className="group relative inline-block">
      {tooltipText}
      <span
        className={`invisible absolute z-10 w-16 rounded-md bg-[#171717c1] px-0 py-[5px] text-center text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 ${positionClasses[position]}`}
      >
        {text}
      </span>
    </div>
  );
}