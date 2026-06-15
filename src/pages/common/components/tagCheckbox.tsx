type Color = "purple" | "green";

interface TagCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  color?: Color;
}

const colorMap: Record<Color, { base: string; active: string }> = {
  purple: {
    base: "border-[var(--text-hover)] text-gray-500 hover:border-[var(--text-hover)] hover:text-purple-700 hover:bg-purple-50",
    active:
      "border-purple-300 bg-[var(--text-hover)] text-[-[var(--text)]] font-medium",
  },
  green: {
    base: "border-[var(--secondary-color-hover)] text-gray-500 hover:border-[var(--secondary-color)] hover:text-green-700 hover:bg-green-50",
    active:
      "border-[var(--secondary-color)] bg-[var(--secondary-color-hover)]  text-green-800 font-medium",
  },
};

export function TagCheckbox({
  label,
  checked,
  onChange,
  onBlur,
  color = "purple",
}: TagCheckboxProps) {
  const variant = colorMap[color];
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      onBlur={onBlur}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border
        cursor-pointer transition-all duration-150 shadow-sm
        ${checked ? variant.active : variant.base}`}
    >
      {checked && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {label}
    </button>
  );
}
