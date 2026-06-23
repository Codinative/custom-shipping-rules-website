LOGOS - drop the official brand assets here
============================================

These power the "Integrates with" band on the landing page.

Add exactly these two files (filenames matter):

  public/logos/bigcommerce.png     ← official BigCommerce logo
  public/logos/ups.png             ← official UPS logo

Notes:
  - Components currently reference .png. If you instead have SVG versions, name them
    bigcommerce.svg / ups.svg AND change the extension in the src of:
        components/BigCommerceMark.tsx
        components/UpsMark.tsx
  - Use a TRANSPARENT background (the band is light, so a white box would show).
  - Use the full-colour logo on a transparent background. The band has a light
    background, so dark/colour logos read best.
  - The components size by HEIGHT (width auto), so any aspect ratio is fine.
  - Once the files are here, run `npm run dev` - the band shows the real logos with
    no code change needed.

Trademark: "UPS"/the shield and "BigCommerce" are trademarks of their owners and are
shown only to indicate the platform/carrier this app integrates with (nominative use).
