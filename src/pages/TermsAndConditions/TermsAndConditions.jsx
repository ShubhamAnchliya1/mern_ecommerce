import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

function TermsAndConditions() {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrumb title="Terms And Conditions" />
      <div className="terms-conditions-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <div>
                  <div>
                    <h2>TERMS AND CONDITIONS</h2>

                    <h5>What are the delivery charges?</h5>
                    <p>
                      Delivery charge varies with each Seller. Sellers incur
                      relatively higher shipping costs on low value items. In
                      such cases, charging a nominal delivery charge helps them
                      offset logistics costs. Please check your order summary to
                      understand the delivery charges for individual products.
                      For Products listed as Flipkart Plus, a Rs 40 charge for
                      delivery per item may be applied if the order value is
                      less than Rs 500. While, orders of Rs 500 or above are
                      delivered free.
                    </p>

                    <h5>
                      Why does the delivery date not correspond to the delivery
                      timeline of X-Y business days?
                    </h5>
                    <p>
                      It is possible that the Seller or our courier partners
                      have a holiday between the day your placed your order and
                      the date of delivery, which is based on the timelines
                      shown on the product page. In this case, we add a day to
                      the estimated date. Some courier partners and Sellers do
                      not work on Sundays and this is factored in to the
                      delivery dates.
                    </p>

                    <h5>What is the estimated delivery time?</h5>
                    <p>
                      Sellers generally procure and ship the items within the
                      time specified on the product page. Business days exclude
                      public holidays and Sundays.
                    </p>
                    <p>
                      Estimated delivery time depends on the following factors:
                    </p>

                    <ul>
                      <li>The Seller offering the product</li>
                      <li>Product's availability with the Seller</li>
                      <li>
                        The destination to which you want the order shipped to
                        and location of the Seller.
                      </li>
                    </ul>

                    <h5>
                      Are there any hidden costs (sales tax, octroi etc) on
                      items sold by Sellers on Flipkart?
                    </h5>
                    <p>
                      There are NO hidden charges when you make a purchase on
                      Flipkart. List prices are final and all-inclusive. The
                      price you see on the product page is exactly what you
                      would pay. Delivery charges are not hidden charges and are
                      charged (if at all) extra depending on the Seller's
                      shipping policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
