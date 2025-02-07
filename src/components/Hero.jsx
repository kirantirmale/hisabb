import React from "react";
import TruckImage from "../images/hero/truck.svg";
import WheelImage1 from "../images/hero/tyre1.svg";
import WheelImage2 from "../images/hero/tyre2.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>

      <section className="campaign-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">Automatic e-way bill</h2>
            <p className="mb-3">
              Now, Get an e-way bill automatically when you create an invoice.
            </p>
            <div className="d-flex gap-3">
              <Link href="" className="btn2 ">
                GET STARTED FREE
              </Link>
              <button className="btn btn-outline-secondary">
                Watch demo video
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center truck-container">
            <img
              src={TruckImage}
              alt="e-way bill image hisab"
              className="truck img-fluid"
            />
            <img
              src={WheelImage1}
              alt="e-way bill wheel hisab"
              className="wheel wheel-left"
            />
            <img
              src={WheelImage2}
              alt="e-way bill wheel hisab"
              className="wheel wheel-right"
            />
          </div>
        </div>

        {/* Road Container */}

      </section>
        <div className="road-container ">
        <div className="road-img">
          
          </div>
        </div>
   
    </>
  );
};

export default Hero;
