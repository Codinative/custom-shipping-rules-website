# Custom Shipping Rules - marketing website

The marketing + documentation site for **Custom Shipping Rules**, a BigCommerce app by
[Codinative](https://codinative.com) that quotes real **UPS UAE Domestic** shipping rates
at checkout - calculated from cart weight, priced in AED, as two delivery tiers.

Built with **Next.js 15** (App Router) + **React 19** + TypeScript. No database, no API -
a static, fast marketing SPA intended for `custom-shipping-rules.codinative.com`.

## Live site & links

🌐 **Live site:** https://custom-shipping-rules.codinative.com/

| Page | Link |
|------|------|
| Home (marketing) | https://custom-shipping-rules.codinative.com/ |
| Documentation home | https://custom-shipping-rules.codinative.com/docs |
| Installation guide | https://custom-shipping-rules.codinative.com/docs/installation |
| User guide | https://custom-shipping-rules.codinative.com/docs/user-guide |
| The app (embedded) | https://shipping.codinative.com/ |
| Codinative | https://codinative.com/ |

## Structure

```
app/
  page.tsx                 Landing (hero, features, how-it-works, tiers, pricing, FAQ, CTA)
  docs/page.tsx            Docs home
  docs/installation/       Installation guide
  docs/user-guide/         User guide
  layout.tsx               Metadata + Geist fonts
  globals.css              Brand design system (amber accent, light/dark)
components/                Nav, Footer, Icon, BrandMark, CheckoutPreview
lib/site.ts                Single source of truth for copy + links
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy

Deploy to Vercel as a separate project and point `custom-shipping-rules.codinative.com`
at it. No environment variables are required.

## Editing copy & links

Update product links (marketplace listing, app URL, support email) in
[`lib/site.ts`](lib/site.ts). The marketplace URL is a placeholder until the app is published.

---

This is the **marketing site only**. The embedded BigCommerce app itself lives in a
separate repository and is hosted at `shipping.codinative.com`.
