import React from 'react'
import '../styles/Pricing/Pricing.css'
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
function Pricing() {
  const featuresList = [
    "Manage customers & vendors",
    "Track your incomes & expenses",
    "Manage your bank accounts",
    "Generate financial reports",
    "Unlimited user access",
    "Email support"
  ];
  const featuresData = [
    "Manage customers & vendors",
    "Track your incomes & expenses",
    "Manage your bank accounts",
    "Generate financial reports",
    "Unlimited user access",
    "Manage inventory"
  ]
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Card 1 */}

          <div className="col-md-4">
            <div className="card pricing-card">
              <div className="card-body text-center ">
                <h5 className="card-title">Trial</h5>
                <div className='flex layout vertical justify-content-center mt-5'>
                  <h6 className="card-price">
                    <BsCurrencyRupee className="currency-symbol" />
                    <span className="price">0</span>
                    <span className="days">/14 Days</span>
                  </h6>
                  <p className="card-text">All features of professional plan</p>
                </div>
                <button className="freetrial-btn position-absolute bottom-0 start-50 translate-middle-x">
                  Get Started For Free
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card pricing-card">
              <div className="card-body text-center">
                <h5 className="card-title">Basic</h5>
                <h6 className="card-price mt-5">
                  <BsCurrencyRupee className='currency-symbol' />
                  <span className='price'>1500</span>
                  <span className='days'>  /year  <br /> Per Comapny </span>
                </h6>
                <div className="features">
                  {featuresList.map((feature, index) => (
                    <div key={index} className="feature layout horizontal center d-flex align-items-center">
                      <span className="features-icon d-flex align-items-center justify-content-center">
                        <FaCheck />
                      </span>
                      <p className="features-p mb-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card pricing-card">
              <div className="card-body text-center">
                <h5 className="card-title">Professional</h5>
                <h6 className="card-price mt-5">
                  <BsCurrencyRupee className='currency-symbol' />
                  <span className='price'>2500</span>
                  <span className='days'>  /year  <br /> Per Comapny </span>
                </h6>
                <div className="features">
                  {featuresData.map((feature, index) => (
                    <div key={index} className="feature layout horizontal center d-flex align-items-center">
                      <span className="features-icon d-flex align-items-center justify-content-center">
                        <FaCheck />
                      </span>
                      <p className="features-p mb-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ SECTION  */}
        <div className='container'>
          <div className='faq-contain'>
            <h2 className='faq-h2'>FAQ (Frequently asked questions)</h2>
          </div>
          <div className='row'>
            <div className='col-md-6'>
          <h4 className='faq-'>How can I start?</h4>
            </div>
            <div className='col-md-6'>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Pricing