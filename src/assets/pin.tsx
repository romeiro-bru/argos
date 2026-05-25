interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Pin = ({ size = 30, color = "var(--text)", className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    viewBox="0 0 30 20"
    fill={color}
    className={className}
  >
    <path d="M6.73 4.97a7.17 7.17 0 0 1 5.052-2.137h.006a7.167 7.167 0 0 1 7.11 7.225 7.24 7.24 0 0 1-2.42 5.42 11 11 0 0 0-1.615 1.948l-1.54 2.65c-.85 1.454-2.236 1.454-3.081 0L8.69 17.409a11 11 0 0 0-1.603-1.931 7.25 7.25 0 0 1-2.42-5.426A7.17 7.17 0 0 1 6.729 4.97m1.604 5.042a3.449 3.449 0 1 0 6.897 0 3.449 3.449 0 0 0-6.897 0" />
  </svg>
);

