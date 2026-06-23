import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";
import PartnerBadge from "@/components/PartnerBadge";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#how", label: "How it works" },
      { href: "/#pricing", label: "Pricing strategies" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { href: "/docs", label: "Docs home" },
      { href: "/docs/installation", label: "Installation guide" },
      { href: "/docs/user-guide", label: "User guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: LINKS.vendor, label: "Codinative ↗", external: true },
      { href: LINKS.app, label: "Open the app", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms-of-service", label: "Terms of service" },
    ],
  },
];

/** The full Codinative app suite — shown as a cross-app strip in the footer.
 *  Icons are inline so they render identically across every site. */
const APPS = [
  {
    key: "signup",
    name: "Custom Signup Forms",
    sub: "B2B registration & approval",
    url: "https://custom-signup-forms.codinative.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 3h10l4 4v14H5z" /><path d="M15 3v4h4M8 11h8M8 15h4" /><path d="m13.5 18 2 2 4-4" />
      </svg>
    ),
  },
  {
    key: "shipping",
    name: "Custom Shipping Rules",
    sub: "Weight-based UPS quotes",
    url: "https://custom-shipping-rules.codinative.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 6.5h11v9h-11z" /><path d="M13.5 9.5h4l3 3v3h-7z" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" />
      </svg>
    ),
  },
  {
    key: "sticky",
    name: "Sticky Add to Cart",
    sub: "Storefront conversion boost",
    url: "https://sticky-add-to-cart.codinative.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.3 11.3a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L20 7H6" />
      </svg>
    ),
  },
];

/** Which app this site represents — its card is highlighted in the strip. */
const ACTIVE = "shipping";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <BrandMark size={34} radius={10} />
              <span className="brand-name"><b>{APP_NAME}</b><span>by {VENDOR}</span></span>
            </Link>
            <p>UPS weight-based shipping quotes for BigCommerce stores shipping UAE domestic — accurate, automatic, and priced in AED.</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title} className="foot-col">
              <h5>{c.title}</h5>
              {c.links.map((l) =>
                "external" in l && l.external ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener">{l.label}</a>
                ) : l.href.startsWith("mailto:") ? (
                  <a key={l.label} href={l.href}>{l.label}</a>
                ) : (
                  <Link key={l.label} href={l.href}>{l.label}</Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="foot-apps">
          <h5 className="foot-apps-h">Codinative apps for BigCommerce</h5>
          <div className="foot-apps-grid">
            {APPS.map((a) => {
              const active = a.key === ACTIVE;
              const inner = (
                <>
                  <span className="app-ic">{a.icon}</span>
                  <span className="app-tx">
                    <b>{a.name}</b>
                    <span>{a.sub}</span>
                  </span>
                  {active ? (
                    <span className="app-here">You&apos;re here</span>
                  ) : (
                    <span className="app-go"><Icon name="arrowR" size={16} /></span>
                  )}
                </>
              );
              return active ? (
                <div key={a.key} className="app-card active" aria-current="page">{inner}</div>
              ) : (
                <a key={a.key} className="app-card" href={a.url} target="_blank" rel="noopener">{inner}</a>
              );
            })}
          </div>
        </div>

        <div className="foot-cert">
          <a className="foot-cert-item" href={LINKS.vendor} target="_blank" rel="noopener" aria-label={`${VENDOR} website`}>
            <BrandMark size={32} radius={9} />
            <span className="foot-cert-name">{VENDOR}</span>
          </a>
          <span className="foot-cert-div" />
          <a className="foot-cert-item" href={LINKS.vendor} target="_blank" rel="noopener" aria-label="Certified BigCommerce Partner">
            <PartnerBadge height={42} />
          </a>
        </div>
        <div className="foot-bot">
          <span>© 2026 {VENDOR}. All rights reserved.</span>
          <span className="made">
            <Icon name="bolt" size={14} /> Built for BigCommerce · Powered by UPS UAE Domestic rates
          </span>
        </div>
      </div>
    </footer>
  );
}
