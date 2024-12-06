import React from "react";
import "./Accountstock.css";

const MyAccounts = () => {
  return (
    <div className="myAccounts-container">
      {/* Header with Title, Filters, and Buttons */}
      <div className="myAccounts-header">
        <div>
          <h2 className="myAccounts-title">My Accounts</h2>
          <div className="myAccounts-filters">
            <span className="filter-option active">FILTER:</span>
            <span className="filter-option">All</span>
            <span className="filter-option">Gainers</span>
            <span className="filter-option">Losers</span>
          </div>
        </div>
        <div className="myAccounts-buttons-group">
          <div className="myAccounts-buttons">
            <button className="add-transaction-btn">+ Add Transaction</button>
            <button className="my-alerts-btn">My Alerts</button>
          </div>
          <div className="group-by-options">
            <span>Group By:</span>
            <label>
              <input type="radio" name="groupBy" value="none" defaultChecked />
              None
            </label>
            <label>
              <input type="radio" name="groupBy" value="sector" />
              Sector
            </label>
            <label>
              <input type="radio" name="groupBy" value="mcap" />
              M-Cap
            </label>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="myAccounts-table">
        <div className="table-header">
          <div className="table-cell">Stocks Name</div>
          <div className="table-cell">Live Price<br />Weight (%)</div>
          <div className="table-cell">Day's Gain<br />Weight (%)</div>
          <div className="table-cell">Quantity<br />Per Unit Cost</div>
          <div className="table-cell">Investment Cost<br />Weight (%)</div>
          <div className="table-cell">Latest Value<br />Weight (%)</div>
          <div className="table-cell">Unrealized Gain<br />Change (%)</div>
          <div className="table-cell">Realized Profit/Loss</div>
        </div>
        <div className="table-body">
          {/* Total Row */}
          <div className="table-row">
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
            <div className="table-cell"></div> {/* Empty cell */}
          </div>

          {/* Empty Row or Next Row */}
          <div className="table-row">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cells">0%</div>
            <div className="table-cell"></div>
            <div className="table-cell">0</div>
            <div className="table-cell">0</div>
            <div className="tablecell">0%</div>
            <div className="table-cell">0</div>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="myAccounts-note">
        <p className='notepara'>
          Note: Investment costs for Stocks include all charges mentioned while
          entering transactions. The latest value is based on the exchange
          selected while buying. In case no exchanges (or multiple exchanges)
          are selected, NSE prices are the default. In case NSE prices are not
          available...
        </p>
      </div>
    
    </div>
  );
};

export default MyAccounts;
