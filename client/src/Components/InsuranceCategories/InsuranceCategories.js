import React from "react";
import './InsuranceCategories.css';
import { Link } from 'react-router-dom';
export default function InsuranceCategories() {
  return (
    <div className="container py-2">
      <div className="screen-2">
        <div className="inner-container-2">
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://cdn2.iconfinder.com/data/icons/medical-and-health-care-service-icons/512/1-41-512.png" />
            </span>
            <p className="text-center">Medical Insurance</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="data:image/jpeg;base64,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" />
            </span>
            <p className="text-center">Individual Insurance</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://cdn0.iconfinder.com/data/icons/medical-health-care-blue-series-set-3/64/b-26-512.png" />
            </span>
            <p className="text-center">Family Floater Plan</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://www.seekpng.com/png/detail/617-6175388_how-can-my-office-prepare-for-medical-insurance.png" />
            </span>
            <p className="text-center">Hospital Daily Cash</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://drtejasdharia.com/wp-content/uploads/health-insurance-png-5.png" />
            </span>
            <p className="text-center">Critical Illness Plan</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://p7.hiclipart.com/preview/452/190/387/health-insurance-health-care-star-health-and-allied-insurance-health-insurance.jpg" />
            </span>
            <p className="text-center">Unit Linked Health Plans</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="http://www.latmaninsurancegroup.com/images/purchase-health-insurance-policy.png" />
            </span>
            <p className="text-center">Group Mediclaim</p>
          </Link>
          <Link to="/health-insurances" className="insu-square">
            <span className="insu-dot">
              <img src="https://cdn1.iconfinder.com/data/icons/medical-services-3/500/Medical-65-512.png" />
            </span>
            <p className="text-center">Definite-Benefit Plans </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
