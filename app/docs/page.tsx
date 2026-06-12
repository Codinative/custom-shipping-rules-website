import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "Documentation",
  description: "Guides for Custom Shipping Rules — installation, day-to-day usage, pricing, and what shoppers see at checkout.",
};

const GUIDES = [
  { href: "/docs/installation", ic: "box", t: "Installation guide", d: "Requirements, a six-step setup from install to live at checkout, and troubleshooting. Reviewable before you install.", tag: "Start here" },
  { href: "/docs/user-guide", ic: "book", t: "User guide", d: "Day-to-day usage: the dashboard, connecting the carrier, pricing strategies, the rate table, testing shipments, and checkout.", tag: "Reference" },
];

const TOPICS = [
  { ic: "plug", t: "Connecting the carrier", d: "Attach the UPS options to your UAE shipping zone." },
  { ic: "calc", t: "Pricing strategies", d: "Markup, or fuel surcharge + VAT." },
  { ic: "weight", t: "Chargeable weight", d: "Actual vs dimensional, explained." },
  { ic: "tag", t: "The rate table", d: "Weight brackets and over-70 kg rules." },
  { ic: "sliders", t: "Testing a shipment", d: "Preview the exact rates a shopper sees." },
  { ic: "globe", t: "Coverage & limits", d: "UPS UAE Domestic scope." },
];

export default function DocsHome() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Docs</div>
          <span className="eyebrow"><span className="dot" /> Documentation</span>
          <h1 style={{ marginTop: 12 }}>Everything you need to ship with confidence.</h1>
          <p className="lead">Guides, references and answers for Custom Shipping Rules — the BigCommerce + UPS weight-based quote builder for UAE domestic delivery.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap">
          <div className="dgrid">
            {GUIDES.map((g) => (
              <Link key={g.href} href={g.href} className="dcard">
                <div className="fic"><Icon name={g.ic} size={22} /></div>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
                <span className="more">Read the guide <Icon name="arrowR" /></span>
              </Link>
            ))}
          </div>

          <div className="sec-head" style={{ margin: "64px auto 32px", textAlign: "left", maxWidth: "none" }}>
            <span className="eyebrow"><span className="dot" /> Topics covered</span>
            <h2 className="h-sec" style={{ marginTop: 10, fontSize: 26 }}>In these guides</h2>
          </div>
          <div className="fgrid">
            {TOPICS.map((t) => (
              <div key={t.t} className="fcard">
                <div className="fic"><Icon name={t.ic} size={22} /></div>
                <h3 style={{ fontSize: 16 }}>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </div>

          <div className="cta" style={{ marginTop: 64 }}>
            <div className="cta-in">
              <h2 style={{ fontSize: 28 }}>Still have a question?</h2>
              <p>Email our team and we&apos;ll get back to you within one business day.</p>
              <div className="cta-btns">
                <a href={LINKS.support} className="btn btn-primary btn-lg"><Icon name="mail" size={18} /> Contact support</a>
                <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-ink btn-lg"><Icon name="store" size={18} /> Get the app</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
