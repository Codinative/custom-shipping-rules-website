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
      { href: LINKS.vendor, label: "Codinative", external: true },
      { href: LINKS.app, label: "Open the app", external: true },
      { href: LINKS.support, label: "Support" },
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
            <a href={LINKS.vendor} target="_blank" rel="noopener" style={{ display: "inline-block", marginTop: 18 }}
              aria-label="Codinative — Certified BigCommerce Partner">
              <PartnerBadge height={34} />
            </a>
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
