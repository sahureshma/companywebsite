import React from "react";
import "./DealOfTheYearSection.css";

const DealOfTheYearSection = () => {
  return (
    <div className="deal-section-container">
      <div className="deal-chart-text">
        <h2 className="deal-highlight-text">
          It’s now or never—don’t miss your<br/> chance at the ultimate deal.
        </h2>
      </div>
      <div className="deal-offer-box">
        <h3 className="deal-title">Deal Of The Year</h3>
        <p className="deal-plan-description">With Elite & Premium Plan</p>
        <button className="deal-explore-button">Explore Offers</button>
      </div>
    </div>
  );
};

export default DealOfTheYearSection;
