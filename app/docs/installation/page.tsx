import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "Installation guide",
  description: "Requirements and a six-step setup to install Custom Shipping Rules and go live with UPS rates at your BigCommerce checkout.",
};

const TOC = [
  { id: "requirements", t: "Before you install" },
  { id: "permissions", t: "Permissions" },
  { id: "steps", t: "Installation steps" },
  { id: "troubleshooting", t: "Troubleshooting" },
];

const REQUIREMENTS = [
  { t: "A BigCommerce store", d: "Any plan. Install from the App Marketplace or your control panel under Apps → My Apps." },
  { t: "A United Arab Emirates shipping zone", d: "These are UPS UAE Domestic rates, so checkout must have a shipping zone covering the UAE for the options to appear." },
  { t: "Product weights set", d: "Rates are calculated from weight, so products need weights. Add dimensions too for dimensional-weight pricing on light, bulky items." },
];

const STEPS = [
  { t: "Install the app", d: "Add Custom Shipping Rules from the BigCommerce App Marketplace, or from Apps → My Apps. New installs start switched off, so nothing changes at checkout until you turn it on." },
  { t: "Grant the requested permissions", d: "BigCommerce shows the two permissions the app needs and asks you to confirm. Approve them to finish — you're returned to the app dashboard." },
  { t: "Connect the carrier", d: "On the Home tab, click “Connect carrier”. This attaches the UPS options to your shipping zone(s) so they can be quoted at checkout. The setup checklist ticks green on success." },
  { t: "Review rates & pricing", d: "Open Configure. Pick a pricing strategy (a flat markup %, or fuel surcharge + VAT), browse the AED rate table, and press Test rates on a sample shipment to confirm the numbers." },
  { t: "Turn on shipping", d: "Flip the master switch on Home. The status badge turns green once the carrier is connected and the service is on." },
  { t: "Verify at checkout", d: "Add a product and check out to a UAE address. You should see two options — Close of Business and Midday — priced in AED." },
];

export default function InstallationGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> Installation guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>Installation guide</h1>
          <p className="lead">Everything you need to install Custom Shipping Rules and go live with UPS rates at your BigCommerce checkout.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/user-guide" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>User guide →</Link>
            </div>
          </aside>

          <article className="prose">
            <div className="scope-banner">
              <Icon name="info" size={18} />
              <span>This app quotes <b>UPS UAE&nbsp;Domestic</b> rates only. It&apos;s the right fit if you ship domestically within the United Arab Emirates with UPS.</span>
            </div>

            <section id="requirements">
              <h2>Before you install</h2>
              <p>Make sure your store is ready. You&apos;ll need:</p>
              <div className="dsteps" style={{ marginTop: 16 }}>
                {REQUIREMENTS.map((r) => (
                  <div key={r.t} className="dstep">
                    <span className="dstep-n check"><Icon name="check" size={15} /></span>
                    <div className="dstep-b"><b>{r.t}</b><p>{r.d}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="permissions">
              <h2>Permissions</h2>
              <p>On install the app requests only two OAuth scopes — nothing related to orders, customers, or payments:</p>
              <ul>
                <li><strong>Fulfillment Methods</strong> — to add and manage its UPS options inside your shipping zones.</li>
                <li><strong>Information and Settings (read-only)</strong> — to read your store&apos;s weight/dimension units and default currency, so rates convert and price correctly.</li>
              </ul>
              <div className="note">The app never reads or writes orders, customers, products, or payment data.</div>
            </section>

            <section id="steps">
              <h2>Installation steps</h2>
              <p>Six steps from install to live at checkout.</p>
              <div className="dsteps" style={{ marginTop: 18 }}>
                {STEPS.map((s, i) => (
                  <div key={s.t} className="dstep">
                    <span className="dstep-n">{i + 1}</span>
                    <div className="dstep-b"><b>{s.t}</b><p>{s.d}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                <a href={LINKS.app} target="_blank" rel="noopener" className="btn btn-primary btn-sm"><Icon name="store" size={16} /> Open the app</a>
                <Link href="/docs/user-guide" className="btn btn-ghost btn-sm"><Icon name="book" size={16} /> Read the User guide</Link>
              </div>
            </section>

            <section id="troubleshooting">
              <h2>Troubleshooting</h2>
              <h3>Checkout shows only &ldquo;Ship by weight&rdquo;</h3>
              <p>The carrier isn&apos;t attached to the zone yet. On Home, use <strong>Re-sync carrier</strong>, and make sure your UAE shipping zone has the UPS method enabled.</p>
              <h3>No rates appear for a non-UAE address</h3>
              <p>This is expected — the app quotes UPS <strong>UAE Domestic</strong> rates only and returns nothing for other destinations.</p>
              <h3>Rates look wrong</h3>
              <p>Check your product weights/dimensions and your pricing strategy on Configure. The charged rate uses the greater of actual vs dimensional weight, priced by your chosen strategy.</p>
              <div className="note" style={{ marginTop: 16 }}>
                Still stuck? Email <a href={LINKS.support}>{LINKS.email}</a> — we reply within one business day.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
