import React from "react";
import "./Portfoliodashboard.css";

import PortfolioAllocationManagerChart from "../AllocationChart/AllocationChart";

const PortfolioManagerDashboard = () => {
  return (
    <div className="portfolio-dashboard-container">
      <h3 className="portfoliomanager-h3">My Accounts</h3>
      <div className="portfolio-action-buttons">
        <button className="portfolio-action-button">+ Add Transaction</button>
        <button className="portfolio-action-button portfolio-alert-button">
          My Alerts
        </button>
      </div>
      <div className="portfolio-accounts-section">
        <table className="portfolio-accounts-table">
          <thead>
            <tr>
              <th>
                Specifications
                <br />
                <span>Action</span>
              </th>
              <th>
                Investment Cost
                <br />
                <span>Weight (%)</span>
              </th>
              <th>
                Latest Value
                <br />
                <span>Weight (%)</span>
              </th>
              <th>
                Today's Gain
                <br />
                <span>Change (%)</span>
              </th>
              <th>
                Unrealized Gain
                <br />
                <span>Change (%)</span>
              </th>
              <th>Realized Profit/Loss</th>
              <th>Dividend/Interest</th>
              <th>Total Gain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Stocks
                <br />
                <span className="portfolio-add">Add</span>
              </td>
              <td>
                1,170
                <br />
                <span>100.0%</span>
              </td>
              <td>
                1,166
                <br />
                <span>100.0%</span>
              </td>
              <td style={{ color: -0.48 < 0 ? "red" : "green" }}>
             -0.48
            <br />
           <span style={{ color: -0.48 < 0 ? "red" : "green" }}>
         (-0.04%)
       </span>
        </td>
              <td style={{ color: -4 < 0 ? "red" : "green" }}>
                -4
                <br />
                <span style={{ color: "-0.04" < 0 ? "red" : "green" }}>(-0.04%)</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td style={{ color: '-4' < 0 ? 'red' : 'black' }}>-4</td>
            </tr>
            <tr>
              <td>
                Mutual Funds
                <br />
                <span className="portfolio-add">Add</span>
              </td>
              <td colSpan="7" className="portfolio-add-link">
                No data: + Click to Add Mutual Funds in your Portfolio
              </td>
            </tr>
            <tr>
              <td>
                Gold
                <br />
                <span className="portfolio-add">Add</span>
              </td>
              <td colSpan="7" className="portfolio-add-link">
                No data: + Click to Add Gold in your Portfolio
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="portfolio-allocation-section">
        <PortfolioAllocationManagerChart />
      </div>
    </div>
  );
};

export default PortfolioManagerDashboard;
