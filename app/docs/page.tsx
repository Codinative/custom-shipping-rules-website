import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "Documentation",
  description: "All guides, policies and support for Custom Shipping Rules in one place.",
};

const RESOURCES = [
  { href: "/docs/installation", external: false, ic: "box", t: "Installation guide",
    d: "Requirements, a six-step setup from install to live at checkout, and troubleshooting." },
  { href: "/docs/user-guide", external: false, ic: "book", t: "User guide",
    d: "Day-to-day usage: the dashboard, carrier, pricing, rate table, testing, and checkout." },
  { href: "/docs/privacy-policy", external: false, ic: "shield", t: "Privacy policy",
    d: "What data the app accesses and stores - and what it never touches." },
  { href: "/docs/terms-of-service", external: false, ic: "doc", t: "Terms of service",
    d: "The terms for using the app: service, responsibilities, rate accuracy, liability." },
  { href: "/contact", external: false, ic: "mail", t: "Contact & support",
    d: "Questions or issues? Reach the Codinative team - we reply within one business day." },
  { href: LINKS.marketplace, external: true, ic: "store", t: "Get the app",
    d: "Install Custom Shipping Rules on your BigCommerce store from the App Marketplace." },
];

export default function DocsHome() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Docs</div>
          <span className="eyebrow"><span className="dot" /> Documentation</span>
          <h1 style={{ marginTop: 12 }}>Everything in one place.</h1>
          <p className="lead">Guides, policies and support for Custom Shipping Rules - the BigCommerce + UPS weight-based quote builder for UAE domestic delivery.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap">
          <div className="hub-grid">
            {RESOURCES.map((r) =>
              r.external ? (
                <a key={r.t} href={r.href} target="_blank" rel="noopener" className="dcard">
                  <div className="fic"><Icon name={r.ic} size={22} /></div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <span className="more">Open <Icon name="arrowR" /></span>
                </a>
              ) : (
                <Link key={r.t} href={r.href} className="dcard">
                  <div className="fic"><Icon name={r.ic} size={22} /></div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <span className="more">Read <Icon name="arrowR" /></span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
