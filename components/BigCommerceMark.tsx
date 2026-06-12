/**
 * BigCommerce logo for the "Integrates with" band.
 *
 * Drop the official BigCommerce asset in:  public/logos/bigcommerce.svg
 * (SVG preferred; PNG ok). "BigCommerce" is a trademark of BigCommerce Pty. Ltd. —
 * shown here only to indicate the platform this app integrates with (nominative use).
 */
export default function BigCommerceMark({ height = 24 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logos/bigcommerce.svg" alt="BigCommerce" style={{ display: "block", height, width: "auto" }} />
  );
}
