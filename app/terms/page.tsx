import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description: "The terms for using Custom Shipping Rules, a BigCommerce app by Codinative.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Terms of Service</div>
          <span className="eyebrow"><span className="dot" /> Legal</span>
          <h1 style={{ marginTop: 12 }}>Terms of Service</h1>
          <p className="lead">The terms for using {APP_NAME}. Last updated 11 June 2026.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap-narrow prose">
          <p>
            By installing or using {APP_NAME} (&ldquo;the App&rdquo;), provided by {VENDOR} (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
            you (&ldquo;the merchant&rdquo;) agree to these terms.
          </p>

          <section>
            <h2>1. The service</h2>
            <p>
              The App is a custom BigCommerce shipping provider that calculates weight-based UPS domestic shipping rates and
              presents them as two delivery options at checkout. Rates are derived from the merchant&apos;s configured pricing
              strategy applied to a fixed UPS domestic rate table.
            </p>
          </section>

          <section>
            <h2>2. Merchant responsibilities</h2>
            <ul>
              <li>Maintaining accurate product weights and dimensions, on which rates depend.</li>
              <li>Configuring the carrier on the correct shipping zone(s) and reviewing pricing before going live.</li>
              <li>Verifying that displayed rates meet your commercial and legal requirements before charging customers.</li>
            </ul>
          </section>

          <section>
            <h2>3. Rate accuracy</h2>
            <p>
              Rates are estimates generated from the configured table and the merchant&apos;s pricing settings. They are
              provided &ldquo;as is&rdquo;. We are not responsible for discrepancies between quoted rates and amounts later
              charged by a carrier, nor for losses arising from misconfiguration.
            </p>
          </section>

          <section>
            <h2>4. Trademarks</h2>
            <p>
              &ldquo;UPS&rdquo; and related marks are the property of their respective owners. The App is not affiliated with,
              endorsed by, or sponsored by United Parcel Service. References to UPS describe the carrier rate set the merchant
              has chosen to offer.
            </p>
          </section>

          <section>
            <h2>5. Availability &amp; changes</h2>
            <p>
              We aim for high availability but do not guarantee uninterrupted service. We may update the App and these terms;
              continued use after a change constitutes acceptance.
            </p>
          </section>

          <section>
            <h2>6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, {VENDOR} is not liable for any indirect, incidental, or
              consequential damages arising from use of the App. Our total liability is limited to the fees (if any) paid for
              the App in the preceding three months.
            </p>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>
              You may stop using the App at any time by uninstalling it from your BigCommerce control panel, which removes the
              carrier&apos;s options from checkout and deletes your stored data (see the <Link href="/privacy">Privacy Policy</Link>).
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>Questions about these terms? Email <a href={LINKS.support}>{LINKS.email}</a>.</p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
