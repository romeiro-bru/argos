export function ErrorIconCircle() {
  return (
    <svg
      className="size-14 text-[var(--error)]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}