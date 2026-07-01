import "./tooltip.css";

type TooltipType = {
  text: string;
  tooltipText: string | React.ReactNode;
};

export function Tooltip({ text, tooltipText }: TooltipType) {
  return (
    <div className="tooltip">
      {tooltipText}
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
