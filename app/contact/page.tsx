import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import PartnerBadge from "@/components/PartnerBadge";
import { VENDOR, LINKS } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Codinative — support and questions about Custom Shipping Rules.",
};

const host = LINKS.vendor.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ROWS = [
  { k: "Support email", v: LINKS.email, ic: "mail", href: LINKS.support, ext: false },
  { k: "Main website", v: host, ic: "globe", href: LINKS.vendor, ext: true },
  { k: "Open the app", v: "shipping.codinative.com", ic: "store", href: LINKS.app, ext: true },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Contact</div>
          <span className="eyebrow"><span className="dot" /> Contact</span>
          <h1 style={{ marginTop: 12 }}>Get in touch.</h1>
          <p className="lead">Built and supported by {VENDOR}. Reach out any time — we typically reply within one business day.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap-narrow">
          <div className="contact-card">
            <div className="contact-head">
              <span className="contact-logo">C</span>
              <div>
                <h2>{VENDOR}</h2>
                <p>BigCommerce-only development agency</p>
              </div>
              <a className="contact-badge" href={LINKS.vendor} target="_blank" rel="noopener"
                aria-label="Codinative — Certified BigCommerce Partner">
                <PartnerBadge height={40} />
              </a>
            </div>

            <div className="contact-rows">
              {ROWS.map((r) => (
                <a key={r.k} className="contact-row" href={r.href}
                  target={r.ext ? "_blank" : undefined} rel={r.ext ? "noopener" : undefined}>
                  <span className="contact-row-ic"><Icon name={r.ic} size={17} /></span>
                  <span className="contact-row-body">
                    <span className="contact-row-k">{r.k}</span>
                    <span className="contact-row-v">{r.v}</span>
                  </span>
                  <span className="contact-row-go"><Icon name="chevR" size={16} /></span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-links">
            <Link href="/docs/installation" className="btn btn-ghost btn-sm"><Icon name="box" size={16} /> Installation guide</Link>
            <Link href="/docs/user-guide" className="btn btn-ghost btn-sm"><Icon name="book" size={16} /> User guide</Link>
            <a href={LINKS.vendor} target="_blank" rel="noopener" className="btn btn-ghost btn-sm"><Icon name="globe" size={16} /> Visit {host}</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
