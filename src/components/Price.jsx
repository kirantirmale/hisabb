import React from "react";
import "../styles/Pricing/Pricing.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

function Price() {
  const featuresList = [
    "Manage customers & vendors",
    "Track your incomes & expenses",
    "Manage your bank accounts",
    "Generate financial reports",
    "Unlimited user access",
    "Email support",
  ];
  const featuresData = [
    "Manage customers & vendors",
    "Track your incomes & expenses",
    "Manage your bank accounts",
    "Generate financial reports",
    "Unlimited user access",
    "Manage inventory",
  ];

  return (
    <>
      <div className="container mt-5 ">
        <div className="row justify-content-center card-main">
          {/* Card 1 - Trial */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card">
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">Trial</h5>
                <div className="pricing-info1">
                  <h6 className="card-price">
                    <BsCurrencyRupee className="currency-symbol" />
                    <span className="price">0</span>
                    <span className="days">/14 Days</span>
                  </h6>
                  <p className="card-text">All features of the Professional plan</p>
                </div>

                <div className="mt-auto">
                  <button className="freetrial-btn">Get Started For Free</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Basic */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card">
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">Basic</h5>
                <div className="pricing-info2">
                  <h6 className="card-price">
                    <BsCurrencyRupee className="currency-symbol" />
                    <span className="price">1500</span>
                    <span className="days">/year <br /> Per Company</span>
                  </h6>
                </div>
                <div className="features">
                  {featuresList.map((feature, index) => (
                    <div key={index} className="feature">
                      <span className="features-icon">
                        <FaCheck />
                      </span>
                      <p className="features-p">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Professional */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card pricing-card">
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">Professional</h5>
                <div className="pricing-info3">
                  <h6 className="card-price">
                    <BsCurrencyRupee className="currency-symbol" />
                    <span className="price">2500</span>
                    <span className="days">/year <br /> Per Company</span>
                  </h6>
                </div>
                <div className="features">
                  {featuresData.map((feature, index) => (
                    <div key={index} className="feature">
                      <span className="features-icon">
                        <FaCheck />
                      </span>
                      <p className="features-p">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        <div className="tax">
          <p>
          * Price excludes tax
          </p>
          <p>
          * “Automatic e-way bill generation” is add-on feature. See FAQ for more detail.
          </p>

        </div>
        </div>


        {/* FAQ Section */}
        <div className="container">
          <div className="faq-contain">
            <h2 className="faq-h2">FAQ (Frequently Asked Questions)</h2>
          </div>

          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="faq-item">
                <h4 className="faq-question">How can I start?</h4>
                <p className="faq-answer">
                  Just Sign up for our trial plan. You will get 14 days free trial. During the trial, you can access all features of the application.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">Can I change my plan after subscribing?</h4>
                <p className="faq-answer">
                  Yes. You can upgrade or downgrade your plan anytime you want. Just click on the "CHANGE PLAN" button from the subscription tab. It will take you to the buy page, where you can choose the right plan for your business.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">What happens if I don’t renew my subscription?</h4>
                <p className="faq-answer">
                  When you don’t renew your subscription, you can still view your records, but you can’t edit them or create new ones. You can upgrade your plan anytime you want.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="faq-item">
                <h4 className="faq-question">What happens after the free trial ends?</h4>
                <p className="faq-answer">
                  When the trial ends, you can still view the records you have added during the trial. However, you won’t be able to edit them or create new ones. You can upgrade your plan anytime.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">Can I get a refund?</h4>
                <p className="faq-answer">
                  No, currently not. At the time of upgrade, you get a prorated refund of your current plan so that you only need to pay the difference amount. During downgrade, your new plan's validity will be adjusted based on the prorated refund amount.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">What are the charges involved with e-way bill generation?</h4>
                <p className="faq-answer">
                  During the trial plan, you can generate up to 10 e-way bills. With each "Professional" plan purchase/renewal, you get 250 free e-way bills. After that, you need to buy additional e-way bills. The rate is 250 e-way bills for Rs 500.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Price;
