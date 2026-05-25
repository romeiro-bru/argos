interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Check = ({ size = 40, color = "var(--text)", className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    viewBox="0 0 40 25"
    fill={color}
    className={className}
  >
    <path d="m19.233 8.782-7.249 7.874c-.911.981-2.387.981-3.298 0l-3.473-3.707a1.066 1.066 0 0 1 0-1.423l.66-.711a.89.89 0 0 1 1.32 0l2.783 3.002a.447.447 0 0 0 .66 0l6.625-7.17a.89.89 0 0 1 1.32 0l.66.711c.362.394.362 1.03 0 1.423z" />
  </svg>
);