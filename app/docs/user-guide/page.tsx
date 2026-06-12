import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "User guide",
  description: "How to configure, price, test and manage Custom Shipping Rules day to day — the dashboard, carrier, pricing, rate table, and checkout.",
};

const TOC = [
  { id: "home", t: "The Home dashboard" },
  { id: "carrier", t: "Connecting the carrier" },
  { id: "pricing", t: "Pricing strategies" },
  { id: "table", t: "The rate table" },
  { id: "test", t: "Testing a shipment" },
  { id: "checkout", t: "What shoppers see" },
  { id: "switch", t: "On / off & coverage" },
];

export default function UserGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> User guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>User guide</h1>
          <p className="lead">How to configure, price, test and manage Custom Shipping Rules day to day.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/installation" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>← Installation</Link>
            </div>
          </aside>

          <article className="prose">
            <section id="home">
              <h2>The Home dashboard</h2>
              <p>Home is your activation centre. At a glance it tells you whether shipping is <strong>live</strong>, <strong>needs action</strong>, or is <strong>off</strong>:</p>
              <ul>
                <li><strong>Status hero</strong> — green means shoppers are seeing your UPS options; amber means the service is on but the carrier isn&apos;t connected yet; grey means shipping is off.</li>
                <li><strong>Setup checklist</strong> — three steps (connect carrier → review rates → turn on) with a progress bar.</li>
                <li><strong>At a glance</strong> — your carrier, quote currency, active pricing strategy, and checkout status.</li>
                <li><strong>Preview at checkout</strong> — opens a mock of exactly what a shopper sees, using your live rates.</li>
              </ul>
            </section>

            <section id="carrier">
              <h2>Connecting the carrier</h2>
              <p><strong>Connect carrier</strong> attaches the UPS shipping options to your store&apos;s shipping zone(s) so they can appear at checkout. Run it once after installing.</p>
              <p>If the options ever stop showing, use <strong>Re-sync carrier</strong> (the same button). It refreshes the connection and updates the checkout method name without a reinstall. The checklist shows how many zones the carrier is attached to.</p>
            </section>

            <section id="pricing">
              <h2>Pricing strategies</h2>
              <p>On Configure you choose how the UPS base rate becomes the price a shopper pays. Pick one:</p>
              <ul>
                <li><strong>UPS rate + markup</strong> — adds a single flat percentage on top of the UPS rate. Example: a 50% markup turns an AED&nbsp;100 base into AED&nbsp;150.</li>
                <li><strong>UPS rate + fuel surcharge + VAT</strong> — layers a fuel surcharge and UAE VAT onto the base in sequence: <span className="formula">base × (1 + <span className="v">fuel%</span>) × (1 + <span className="v">VAT%</span>)</span></li>
              </ul>
              <p>Set your percentages, press <strong>Save pricing</strong>, and the rate table and tester immediately reflect the change. Shoppers only ever see the final price — never the markup, fuel, or VAT breakdown.</p>
            </section>

            <section id="table">
              <h2>The rate table</h2>
              <p>The table on Configure shows every weight bracket and its price for each delivery tier, after your pricing is applied:</p>
              <ul>
                <li>Weight is normalised to <strong>kilograms</strong>.</li>
                <li>Any fraction over a listed weight rounds <strong>up</strong> to the next bracket.</li>
                <li>Over 70&nbsp;kg is billed at the per-kilogram over-size rate (with a minimum), shown automatically.</li>
              </ul>
            </section>

            <section id="test">
              <h2>Testing a shipment</h2>
              <p>The <strong>Test a shipment</strong> tool shows the exact rates a shopper would see for a given parcel. Enter an actual weight and the dimensions, then press <strong>Test rates</strong>.</p>
              <p>The result makes the calculation transparent. It compares two numbers and marks which one was <strong>used</strong>:</p>
              <ul>
                <li><strong>Actual weight</strong> — the parcel&apos;s real weight.</li>
                <li><strong>Dimensional weight</strong> — <span className="formula">L × W × H ÷ <span className="v">5000</span></span>, which accounts for light, bulky parcels.</li>
              </ul>
              <p>The <strong>chargeable weight</strong> is always the greater of the two — that&apos;s the one the price is based on. The two AED quotes below it are exactly what the shopper is charged.</p>
            </section>

            <section id="checkout">
              <h2>What shoppers see at checkout</h2>
              <p>When a shopper enters a UAE delivery address, the shipping step shows two UPS options, priced in AED:</p>
              <ul>
                <li><strong>UPS (Delivery by Close of Business)</strong> — the dependable everyday service (UPS Domestic Express Saver).</li>
                <li><strong>UPS (Delivery by Midday)</strong> — priority delivery for urgent orders (UPS Domestic Express).</li>
              </ul>
              <p>Each option carries the delivery time and the chargeable weight on its sub-line. The shopper picks whichever speed they prefer.</p>
            </section>

            <section id="switch">
              <h2>Turning shipping on / off</h2>
              <p>The master switch on Home controls everything. When it&apos;s <strong>off</strong>, the app returns no quotes and shoppers don&apos;t see these options — useful for pausing without uninstalling. When it&apos;s <strong>on</strong> and the carrier is connected, rates go live immediately.</p>
              <h3>Coverage &amp; limitations</h3>
              <p>This app quotes UPS <strong>UAE Domestic</strong> rates only. Shoppers with a delivery address outside the United Arab Emirates won&apos;t see these options. More carriers and destinations are planned.</p>
              <div className="note" style={{ marginTop: 16 }}>
                New here? Start with the <Link href="/docs/installation">Installation guide</Link>. For anything else, email <a href={LINKS.support}>{LINKS.email}</a>.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
