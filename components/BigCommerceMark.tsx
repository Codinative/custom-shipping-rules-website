/**
 * BigCommerce wordmark (text representation). "BigCommerce" is a trademark of
 * BigCommerce Pty. Ltd.; shown to indicate the platform this app integrates with.
 * Swap in the official BigCommerce logo asset for production if desired.
 */
export default function BigCommerceMark({ height = 24 }: { height?: number }) {
  return (
    <span
      aria-label="BigCommerce"
      style={{
        fontSize: height,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        color: "var(--text)",
        whiteSpace: "nowrap",
      }}
    >
      Big<span style={{ color: "var(--text-2)" }}>Commerce</span>
    </span>
  );
}
