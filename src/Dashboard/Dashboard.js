import React from 'react';
import './Dashboard.css';

const AssetAllocation = () => (
  <div className="assest-box">
    <h2 className="title">Assets Allocation</h2>
    <p className="subtitle">Assets you have in your account</p>
    <div className="pie-chart">
      <div className="pie-section stocks">52.67%</div>
      <div className="pie-section mutual-fund">31.33%</div>
      <div className="pie-section gold">16%</div>
    </div>
    <ul className="assets-list">
      <li className="asset-item">
        <span className="legend-circle stocks"></span> Stocks
        <span className="asset-value">$26,869</span>
      </li>
      <li className="asset-item">
        <span className="legend-circle mutual-fund"></span> Mutual Fund
        <span className="asset-value">$16,455</span>
      </li>
      <li className="asset-item">
        <span className="legend-circle gold"></span> Gold
        <span className="asset-value">$8,374</span>
      </li>
    </ul>
  </div>
);

const InvestmentSummary = () => (
  <div className="box">
    <h2 className="title">Investment</h2>
    <div className="investment-item">
      <span className="investment-label">
        <span className="icon gain-icon"></span> Total Gain
      </span>
      <span className="investment-value">$43,854</span>
    </div>
    <div className="investment-item">
      <span className="investment-label">
        <span className="icon loss-icon"></span> Total Losses
      </span>
      <span className="investment-value">$10,412</span>
    </div>
    <div className="investment-item">
      <span className="investment-label">
        <span className="icon returns-icon"></span> Annual Returns
      </span>
      <span className="investment-value">$40,846</span>
    </div>
    <div className="investment-item">
      <span className="investment-label">
        <span className="icon net-worth-icon"></span> Net worth
      </span>
      <span className="investment-value">$53,598</span>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="dashboard-container">
    <AssetAllocation />
    <InvestmentSummary />
  </div>
);

export default Dashboard;
