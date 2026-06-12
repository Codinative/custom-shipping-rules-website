/**
 * UPS shield mark — a clean recreation in UPS brand colours (brown shield, gold
 * bow + "ups"). "UPS" and the shield are trademarks of United Parcel Service;
 * shown here to indicate the carrier whose rates the app quotes. For production,
 * swap in the official UPS asset from your UPS partner brand kit.
 */
const BROWN = "#4A2C16";
const GOLD = "#FFB406";

export default function UpsMark({ height = 44 }: { height?: number }) {
  return (
    <svg height={height} viewBox="0 0 62 74" fill="none" role="img" aria-label="UPS"
      style={{ display: "block", flexShrink: 0 }}>
      {/* shield */}
      <path
        d="M31 72C13 62 6 49 6 31V12C6 8.7 8.7 6 12 6H50C53.3 6 56 8.7 56 12V31C56 49 49 62 31 72Z"
        fill={BROWN}
      />
      {/* gold bow / shield-knot */}
      <path d="M31 21c5-5 11-6 15-5 0 6-2 11-6 14 3 1 5 3 6 6-5 1-11-1-15-5-4 4-10 6-15 5 1-3 3-5 6-6-4-3-6-8-6-14 4-1 10 0 15 5Z" fill={GOLD} />
      {/* wordmark */}
      <text x="31" y="60" textAnchor="middle" fontFamily="Geist, system-ui, -apple-system, Arial, sans-serif"
        fontWeight="700" fontSize="15" letterSpacing="-0.5" fill={GOLD}>ups</text>
    </svg>
  );
}
