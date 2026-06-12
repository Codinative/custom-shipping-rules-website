import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import CheckoutPreview from "@/components/CheckoutPreview";
import UpsMark from "@/components/UpsMark";
import BigCommerceMark from "@/components/BigCommerceMark";
import { LINKS } from "@/lib/site";

const FEATURES = [
  { ic: "weight", t: "Weight-based accuracy", d: "Every quote is calculated from the cart's chargeable weight — the greater of actual and dimensional weight — exactly how UPS bills you. No flat fees that over- or under-charge." },
  { ic: "truck", t: "Two UPS delivery tiers", d: "Shoppers choose between Delivery by Close of Business and priority Delivery by Midday, each priced independently for the parcel." },
  { ic: "calc", t: "Flexible pricing", d: "Apply a simple percentage markup on the UPS base rate, or layer a fuel surcharge and UAE VAT. Set it once — every quote follows." },
  { ic: "dirham", t: "Always in AED", d: "Rates are quoted in UAE dirhams, matched to your store currency. Shoppers see a clean final price with no surcharge breakdown." },
  { ic: "zap", t: "Live at checkout", d: "A native BigCommerce Shipping Provider. When a shopper reaches the shipping step, the app returns rates in real time." },
  { ic: "rocket", t: "Minutes to set up", d: "Connect the carrier to your UAE zone, review the rate table, flip the master switch on. A built-in preview shows exactly what shoppers will see." },
];

const FLOW = [
  { t: "Shopper checks out", d: "A customer reaches the shipping step with a UAE delivery address." },
  { t: "BigCommerce posts the cart", d: "BigCommerce sends the cart's items, weights and destination to the app's quote endpoint." },
  { t: "Rates are calculated", d: "The app reads the chargeable weight, looks up your UPS rate table, and applies your pricing." },
  { t: "Two AED options return", d: "Close of Business and Midday appear at checkout, priced in dirhams, ready to select." },
];

const FAQS = [
  { q: "Which carriers and destinations are supported?", a: "Currently UPS UAE Domestic only. Shoppers with a delivery address outside the United Arab Emirates won't see these options at checkout. More carriers and destinations are planned." },
  { q: "How is the shipping price calculated?", a: "From the cart's chargeable weight — the greater of actual weight and dimensional weight (L×W×H ÷ 5000). The app finds the matching weight bracket in your UPS rate table, then applies your chosen pricing strategy." },
  { q: "Can I control the final price shoppers pay?", a: "Yes. Choose a flat percentage markup on the UPS base rate, or layer a fuel surcharge and UAE VAT. You set the percentages; shoppers only ever see the final AED amount." },
  { q: "What does it cost to install?", a: "Install the app from the BigCommerce App Marketplace. New installs start switched off, so nothing changes at checkout until you connect the carrier and turn it on." },
  { q: "What permissions does the app need?", a: "Only two: Fulfillment Methods (to connect the carrier and add its UPS options to your shipping zones) and Information and Settings (to read your store's units and currency). Nothing about orders, customers, or payments." },
  { q: "How do I verify it's working?", a: "Use the in-app checkout preview and the Test a shipment tool, then place a test order to a UAE address. You should see the two UPS options priced in AED." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-ink"><span className="dot" /> BigCommerce Shipping App</span>
            <h1>UPS weight-based shipping quotes, <span className="hl">built for BigCommerce</span>.</h1>
            <p className="lead">
              Custom Shipping Rules turns your UPS UAE&nbsp;Domestic contract rates into accurate,
              weight-based quotes at checkout — two delivery speeds, priced in AED, live in minutes.
            </p>
            <div className="hero-cta">
              <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                <Icon name="store" size={18} /> Get it on BigCommerce
              </a>
              <Link href="/docs" className="btn btn-ink btn-lg">
                <Icon name="book" size={18} /> Read the docs
              </Link>
            </div>
            <div className="trust">
              <span className="trust-item"><Icon name="check" /> Native shipping provider</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> Real UPS contract rates</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> No code required</span>
            </div>
          </div>
          <CheckoutPreview />
        </div>
      </section>

      {/* ---------- Integrates with ---------- */}
      <section className="integ">
        <div className="wrap integ-in">
          <span className="integ-label">Integrates with</span>
          <div className="integ-logos">
            <span className="integ-item"><BigCommerceMark height={28} /></span>
            <span className="integ-x"><Icon name="plus" size={16} /></span>
            <span className="integ-item"><UpsMark height={54} /></span>
          </div>
          <p className="integ-sub">
            Custom Shipping Rules installs as a <b>native BigCommerce shipping provider</b> and quotes
            your real <b>UPS UAE&nbsp;Domestic</b> contract rates live at checkout.
          </p>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Why merchants use it</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Accurate shipping, on autopilot.</h2>
            <p className="lead">Stop maintaining rate tables by hand and stop guessing on flat fees. Every quote is calculated from the real weight of the cart.</p>
          </div>
          <div className="fgrid">
            {FEATURES.map((f) => (
              <div key={f.t} className="fcard">
                <div className="fic"><Icon name={f.ic} size={22} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> The quote flow</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>From cart to checkout in real time.</h2>
            <p className="lead">A native BigCommerce + UPS quote builder. Here&apos;s what happens the moment a shopper reaches the shipping step.</p>
          </div>
          <div className="flow">
            {FLOW.map((s, i) => (
              <div key={s.t} className="fstep">
                <div className="fstep-n">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="fstep-arrow"><Icon name="arrowR" size={22} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Delivery tiers ---------- */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Shown at checkout</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Two delivery speeds, one clear choice.</h2>
            <p className="lead">Both options are quoted from the same parcel weight and presented to the shopper in AED.</p>
          </div>
          <div className="tiers">
            <div className="tier cob">
              <div className="tier-top">
                <div className="tier-ic"><Icon name="sunrise" size={24} /></div>
                <div style={{ flex: 1 }}>
                  <h3>Close of Business</h3>
                  <div className="tier-svc">UPS Domestic Express Saver</div>
                </div>
                <span className="tier-chip">Everyday</span>
              </div>
              <p className="tier-desc">The dependable everyday option — same-day delivery by close of business for orders placed before the daily cut-off.</p>
              <div className="tier-foot">
                <span className="promise"><Icon name="clock" /> Delivered by ~6:00 PM</span>
              </div>
            </div>
            <div className="tier mid">
              <div className="tier-top">
                <div className="tier-ic"><Icon name="bolt" size={24} /></div>
                <div style={{ flex: 1 }}>
                  <h3>Midday</h3>
                  <div className="tier-svc">UPS Domestic Express</div>
                </div>
                <span className="tier-chip">Priority</span>
              </div>
              <p className="tier-desc">Priority delivery guaranteed by 12:00 PM — for urgent shipments that need to arrive first thing.</p>
              <div className="tier-foot">
                <span className="promise"><Icon name="clock" /> Delivered by 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing strategies ---------- */}
      <section id="pricing" className="sec alt">
        <div className="wrap split">
          <div>
            <span className="eyebrow"><span className="dot" /> Pricing strategies</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Price every rate, your way.</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              The UPS base rates are fixed and accurate. You decide how they become the price a shopper pays — set it once on the Configure screen and every quote follows.
            </p>
            <ul className="checks">
              <li><span className="ck"><Icon name="check" /></span><div><b>Transparent to you, clean for shoppers.</b><br /><span>You see the formula; shoppers see only the final AED amount.</span></div></li>
              <li><span className="ck"><Icon name="check" /></span><div><b>Instant preview.</b><br /><span>The rate table and shipment tester update the moment you save.</span></div></li>
            </ul>
          </div>
          <div className="split-list">
            <div className="pcard">
              <h4>UPS rate + markup <span className="tag">Default</span></h4>
              <p>Add a single flat percentage on top of the UPS rate. Simple and predictable.</p>
              <div className="formula">base × (1 + <span className="v">markup%</span>) — e.g. 100 → <span className="v">150</span></div>
            </div>
            <div className="pcard">
              <h4>UPS rate + fuel surcharge + VAT</h4>
              <p>Layer a fuel surcharge and UAE VAT onto the base, calculated in sequence.</p>
              <div className="formula">base × (1 + <span className="v">fuel%</span>) × (1 + <span className="v">VAT%</span>)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Docs ---------- */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Documentation</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Guides for every step.</h2>
            <p className="lead">Everything prospective and current merchants need — reviewable before you install.</p>
          </div>
          <div className="dgrid">
            <Link href="/docs/installation" className="dcard">
              <div className="fic"><Icon name="box" size={22} /></div>
              <h3>Installation guide</h3>
              <p>Requirements, a six-step setup from install to live at checkout, and troubleshooting — everything you need before and during installation.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
            <Link href="/docs/user-guide" className="dcard">
              <div className="fic"><Icon name="book" size={22} /></div>
              <h3>User guide</h3>
              <p>Day-to-day usage: the dashboard, connecting the carrier, pricing strategies, the rate table, testing shipments, and what shoppers see.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Questions, answered.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q} <span className="ic"><Icon name="plus" size={18} /></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Ready to quote real UPS rates at checkout?</h2>
              <p>Install Custom Shipping Rules, connect your UAE zone, and go live in minutes — with accurate, weight-based pricing your margins will thank you for.</p>
              <div className="cta-btns">
                <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                  <Icon name="store" size={18} /> Get it on BigCommerce
                </a>
                <Link href="/docs/installation" className="btn btn-ink btn-lg">
                  <Icon name="box" size={18} /> Installation guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
