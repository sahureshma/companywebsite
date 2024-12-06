import React from "react";
import "./AllocationChart.css";

const PortfolioAllocationManagerChart = () => {
  return (
    <div className="portfolio-allocation-container">
      <div className="portfolio-chart-section">
        <h3>Allocation - Investment Cost</h3>
        <p className="portfolio-amount">1,170</p>
        <div className="portfolio-chart">
          <div className="portfolio-donut"></div>
          <div className="portfolio-chart-labels">
            <p className='portchartp'>Stocks: 1,170.00</p>
            <p className='portchartp'>Mutual Funds: 0</p>
            <p className='portchartp'>Gold: 0</p>
          </div>
        </div>
      </div>

      <div className="portfolio-divider"></div>

      <div className="portfolio-chart-section">
        <h3>Allocation - Latest Value</h3>
        <p className="portfolio-amount">1,166</p>
        <div className="portfolio-chart">
          <div className="portfolio-donut"></div>
          <div className="portfolio-chart-labels">
            <p className='portchartp'>Stocks: 1,165.60</p>
            <p className='portchartp'>Mutual Funds: 0</p>
            <p className='portchartp'>Gold: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAllocationManagerChart;
