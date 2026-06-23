/**
 * "Certified BigCommerce Partner" badge — Codinative's partner mark.
 * Self-contained (inline styles). The shield + C is crisp SVG; the wordmark
 * inherits the page font. Colour follows the site accent (--accent-soft).
 */
const ACCENT = "var(--accent-soft, #5C7CFA)";

export default function PartnerBadge({ height = 48 }: { height?: number }) {
  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: 13 }}
      aria-label="Certified BigCommerce Partner"
      role="img"
    >
      <svg height={height} viewBox="0 0 92 120" fill="none" style={{ display: "block", flexShrink: 0 }}>
        <path
          d="M46 113C18 98 7 80 7 53V13A6 6 0 0 1 13 7H79A6 6 0 0 1 85 13V53C85 80 74 98 46 113Z"
          fill={ACCENT}
        />
        <circle cx="46" cy="54" r="17" fill="none" stroke="#fff" strokeWidth="11.5" />
        <path d="M46 54 84 38 84 70Z" fill={ACCENT} />
        <path d="M40 47l9 7-9 7z" fill="#fff" />
      </svg>
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.04, color: ACCENT }}>
        <b style={{ fontSize: Math.round(height * 0.335), fontWeight: 800, letterSpacing: ".05em" }}>CERTIFIED</b>
        <span style={{ fontSize: Math.round(height * 0.25), fontWeight: 500, letterSpacing: ".005em" }}>
          BigCommerce Partner
        </span>
      </span>
    </span>
  );
}
