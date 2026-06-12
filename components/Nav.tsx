import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

const LINKS_NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="brand">
          <BrandMark size={36} radius={11} />
          <span className="brand-name">
            <b>{APP_NAME}</b>
            <span>by {VENDOR}</span>
          </span>
        </Link>
        <nav className="nav-links">
          {LINKS_NAV.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </nav>
        <span className="nav-sp" />
        <div className="nav-cta">
          <Link href="/docs" className="btn btn-ghost btn-sm">Documentation</Link>
          <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
            <Icon name="store" size={16} /> Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
