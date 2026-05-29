export function LoadingSpinner() {
  return (
    <svg viewBox="0 0 100 100" width="48" height="48">
      <style>{`
        .spin { transform-origin: 50px 50px; animation: spin 1.2s linear infinite; }
        .spin2 { transform-origin: 50px 50px; animation: spin 1.8s linear infinite reverse; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
      <g className="spin">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
          strokeDasharray="60 190"
          strokeLinecap="round"
        />
      </g>
      <g className="spin2">
        <circle
          cx="50"
          cy="50"
          r="27"
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          strokeDasharray="40 130"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
