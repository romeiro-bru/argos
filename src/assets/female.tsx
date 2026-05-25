export const female = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    viewBox="0 0 44 30"
    fill="var(--text)"
    stroke="var(--text)"
  >
    <path d="M17.5 9.25a5.5 5.5 0 1 0-11 0 5.51 5.51 0 0 0 4.583 5.427v1.906H9.25v1.834h1.833v1.833h1.834v-1.833h1.833v-1.834h-1.833v-1.906A5.51 5.51 0 0 0 17.5 9.25m-9.167 0a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0"></path>
  </svg>
);

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Female = ({
  size = 25,
  color = "var(--text)",
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    viewBox="0 0 25 23"
    fill={color}
    className={className}
  >
    <path
      fill={color}
      stroke={color}
      d="M17.5 9.25a5.5 5.5 0 1 0-11 0 5.51 5.51 0 0 0 4.583 5.427v1.906H9.25v1.834h1.833v1.833h1.834v-1.833h1.833v-1.834h-1.833v-1.906A5.51 5.51 0 0 0 17.5 9.25m-9.167 0a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0"
    ></path>
  </svg>
);
