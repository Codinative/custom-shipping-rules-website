LOGOS — drop the official brand assets here
============================================

These power the "Integrates with" band on the landing page.

Add exactly these two files (filenames matter):

  public/logos/bigcommerce.svg     ← official BigCommerce logo
  public/logos/ups.svg             ← official UPS logo

Notes:
  - SVG is preferred (sharp at any size, smallest file). PNG also works — if you use
    PNG, rename the file to bigcommerce.png / ups.png AND update the src in:
        components/BigCommerceMark.tsx
        components/UpsMark.tsx
  - Use the full-colour logo on a transparent background. The band has a light
    background, so dark/colour logos read best.
  - The components size by HEIGHT (width auto), so any aspect ratio is fine.
  - Once the files are here, run `npm run dev` — the band shows the real logos with
    no code change needed.

Trademark: "UPS"/the shield and "BigCommerce" are trademarks of their owners and are
shown only to indicate the platform/carrier this app integrates with (nominative use).
