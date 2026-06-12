import Icon from "@/components/Icon";

/** A realistic mock of the two UPS options as a shopper sees them at BigCommerce checkout. */
export default function CheckoutPreview() {
  return (
    <div className="cwrap">
      <div className="ccard">
        <div className="ccard-head">
          <div className="ccard-dots"><i /><i /><i /></div>
          <span className="ccard-url">checkout · shipping method</span>
        </div>
        <div className="ccard-body">
          <div className="ccard-step">Choose a delivery option</div>
          <div className="copt sel">
            <span className="copt-radio" />
            <div className="copt-body">
              <b>UPS (Delivery by Close of Business)</b>
              <span>Delivered by ~6:00 PM · Chargeable weight 2.4 kg</span>
            </div>
            <span className="copt-price"><small>AED</small>80.55</span>
          </div>
          <div className="copt">
            <span className="copt-radio" />
            <div className="copt-body">
              <b>UPS (Delivery by Midday)</b>
              <span>Delivered by 12:00 PM · Chargeable weight 2.4 kg</span>
            </div>
            <span className="copt-price"><small>AED</small>205.50</span>
          </div>
        </div>
      </div>
      <div className="cfloat">
        <Icon name="weight" size={18} />
        <div>
          <b>Weight-based</b>
          <span>Auto-calculated per cart</span>
        </div>
      </div>
    </div>
  );
}
