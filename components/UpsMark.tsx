/**
 * UPS logo for the "Integrates with" band.
 *
 * Drop the official UPS asset in:  public/logos/ups.svg   (SVG preferred; PNG ok)
 * "UPS" and the shield are trademarks of United Parcel Service — shown here only to
 * indicate the carrier whose rates the app quotes (nominative use).
 */
export default function UpsMark({ height = 44 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logos/ups.svg" alt="UPS" style={{ display: "block", height, width: "auto" }} />
  );
}
