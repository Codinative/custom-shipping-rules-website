/** Brand glyph — a stylised package + checkmark, in the amber brand gradient. */
export default function BrandMark({ size = 34, radius = 10 }: { size?: number; radius?: number }) {
  return (
    <span className="mark" style={{ width: size, height: size, borderRadius: radius }}>
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5 4 6.5v8L12 18.5l8-4v-8z" />
        <path d="M4 6.5 12 10.5l8-4M12 10.5v8" />
        <path d="m9 12.5 2 2 4-4" />
      </svg>
    </span>
  );
}
