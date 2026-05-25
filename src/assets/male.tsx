export const male = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    viewBox="0 0 45 30"
    fill="var(--text)"
    stroke="var(--text)"
  >
    <path d="M12.43 10.268A5.44 5.44 0 0 0 9.25 9.25a5.5 5.5 0 1 0 5.5 5.5 5.56 5.56 0 0 0-1.018-3.208l4.685-4.666v4.207h1.833V3.75h-7.333v1.833h4.198zM5.584 14.75a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0"></path>
  </svg>
);

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Male = ({
  size = 25,
  color = "var(--text)",
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    viewBox="0 0 25 25"
    fill={color}
    className={className}
  >
    <path
      fill={color}
      stroke={color}
      d="M12.43 10.268A5.44 5.44 0 0 0 9.25 9.25a5.5 5.5 0 1 0 5.5 5.5 5.56 5.56 0 0 0-1.018-3.208l4.685-4.666v4.207h1.833V3.75h-7.333v1.833h4.198zM5.584 14.75a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0"
    ></path>
  </svg>
);
