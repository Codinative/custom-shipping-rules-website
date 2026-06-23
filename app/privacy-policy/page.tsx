import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Custom Shipping Rules handles data when installed on your BigCommerce store.",
};

const host = LINKS.vendor.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Privacy Policy</div>
          <span className="eyebrow"><span className="dot" /> Legal</span>
          <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
          <p className="lead">How {APP_NAME} handles data when installed on your BigCommerce store. Last updated 11 June 2026.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap-narrow prose">
          <p>
            {APP_NAME} (&ldquo;the App&rdquo;) is a BigCommerce app provided by {VENDOR} (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            The App calculates UPS weight-based domestic shipping rates for a store&apos;s checkout. This policy explains
            what data the App accesses, stores, and processes.
          </p>

          <section>
            <h2>Information we access</h2>
            <p>When a merchant installs the App via BigCommerce OAuth, we request only two permissions - both needed to calculate and display shipping rates:</p>
            <ul>
              <li><strong>Fulfillment Methods</strong> - shipping zones and carrier configuration, to connect the carrier so its UPS options appear at checkout.</li>
              <li><strong>Information and Settings</strong> - the store&apos;s weight/dimension units and default currency, to convert and price rates correctly.</li>
            </ul>
            <p>The App does <strong>not</strong> access orders, customers, products, or payment data.</p>
          </section>

          <section>
            <h2>Information we store</h2>
            <p>We store the minimum required to operate the App, in Google Firebase (Firestore):</p>
            <ul>
              <li>Your <strong>store hash</strong> and the <strong>OAuth access token</strong> issued by BigCommerce at install.</li>
              <li>The <strong>store user(s)</strong> who installed or were granted access to the App (id, email, username).</li>
              <li>Your <strong>per-store app settings</strong> (pricing strategy, percentages, dimensional divisor, on/off state).</li>
            </ul>
          </section>

          <section>
            <h2>Checkout data</h2>
            <p>
              At checkout, BigCommerce sends the App a quote request containing the cart&apos;s line items (weights and
              dimensions), the destination country, and the currency, so we can return rates. We log non-identifying
              request metadata (weights, currency, timestamps, user-agent) for diagnostics only. <strong>We do not store
              shopper names, addresses, emails, or payment information.</strong>
            </p>
          </section>

          <section>
            <h2>Third-party processors</h2>
            <ul>
              <li><strong>BigCommerce</strong> - the platform the App integrates with.</li>
              <li><strong>Google Firebase / Firestore</strong> - stores the data described above.</li>
              <li><strong>Vercel</strong> - hosts the App.</li>
            </ul>
            <p>We do not sell or share your data with advertisers, and we do not use it for any purpose other than operating the App.</p>
          </section>

          <section>
            <h2>Data retention &amp; deletion</h2>
            <p>
              When you uninstall the App, BigCommerce notifies our uninstall endpoint and we remove your store record,
              access token, and associated user records. To request deletion at any other time, email us at{" "}
              <a href={LINKS.support}>{LINKS.email}</a>.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>All traffic uses HTTPS. Access tokens and credentials are stored server-side and are never exposed to the browser or to shoppers.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Email <a href={LINKS.support}>{LINKS.email}</a> or visit{" "}
              <a href={LINKS.vendor} target="_blank" rel="noopener noreferrer">{host}</a>.
            </p>
            <div className="note">{VENDOR} · {host}</div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
