import React, { useState } from "react";
import "./AccountStockalerts.css"; // Assuming your styles are in this file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useNavigate, useLocation } from "react-router-dom";
import Portfoliodonut from "../Portfoliodonut/Portfoliodonut";
import Navbar from "../../Navbar/Navbar";


const AccountStockalert = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State for dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    location.pathname === "/accountalert"
  );

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div> 
      <Portfoliodonut/>
    <div className="portfolio-account-stock-container">
      {/* Header Section */}
      <div className="portfolio-account-stock-header">
        <h2 className="portfolio-account-stock-title">My Accounts</h2>
        <div className="portfolio-account-stock-controls">
          {/* Filters Section */}
          <div className="portfolio-account-stock-filters">
            <span className="filter-label">FILTER:</span>
            <button className="filter-button">All</button>
            <button className="filter-button">Gainers</button>
            <button className="filter-button">Losers</button>
          </div>

          {/* Actions and Grouping Options */}
          <div className="portfolio-account-stock-actions-container">
            {/* Buttons Section */}
            <div className="portfolio-account-stock-actions">
              <button className="add-transaction-button">+ Add Transaction</button>
              <button className="my-alerts-button">My Alerts</button>
            </div>

            {/* Grouping Options */}
            <div className="portfolio-account-stock-group">
                <label>
                  Group By:
                  <input
                    type="radio"
                    name="groupBy"
                    value="none"
                    defaultChecked
                    onClick={() => navigate("/portfoliostockaccount")}
                  />{" "}
                  None
                  <input
                    type="radio"
                    name="groupBy"
                    value="sector"
                    onClick={() => navigate("/stocksector")}
                  />{" "}
                  Sector
                  <input
                    type="radio"
                    name="groupBy"
                    value="mcap"
                    onClick={() => navigate("/stockmcap")}
                  />{" "}
                  M-Cap
                </label>
              </div>
          </div>
        </div>
      </div>

      {/* Stock Table Section */}
      <table className="portfolio-account-stock-table">
        <thead>
          <tr>
          <th>Stocks Name</th>
            <th>Live Price<br />Weight (%)</th>
            <th>Day's Gain<br />Weight (%)</th>
            <th>Quantity<br />Per Unit Cost</th>
            <th>Investment Cost<br />Weight (%)</th>
            <th>Latest Value<br />Weight (%)</th>
            <th>Unrealized Gain<br />Change (%)</th>
            <th>Realized Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {/* Main Row */}
          <tr>
            <td className="stock-name">
              <span className="dropdown-icon" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={isDropdownOpen ? faCaretDown : faCaretUp} />
              </span>
              ITI (2)
              <span className="stock-actions">
                <span className="action-text">Add | Sell</span>
                <span className="trash-icon">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </span>
            </td>
            <td className="negative">291.40<br />-0.12</td>
            <td className="negative">-0.48(-0.04%)</td>
            <td>4</td>
            <td>1,170.00</td>
            <td>1,165.60</td>
            <td className="negative">-4(-0.38%)</td>
            <td>-</td>
          </tr>

          {/* Dropdown Subcategory Row */}
          {isDropdownOpen && (
            <tr>
              <td colSpan="8" className="subcategory-row">
                <table className="subcategory-table">
                  <thead>
                  <tr>
  <th
    className="hover-effect"
    style={{
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRight: '1px solid #ccc',
      padding: '10px',
    }}
  >
    <Link
      to="/portfoliostockaccount"
      style={{ textDecoration: 'none', color: 'black' }}
    >
      Transaction History
    </Link>
  </th>
  <th
    className="hover-effect"
    style={{
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRight: '1px solid #ccc',
      padding: '10px',
    }}
  >
    <Link to="/overview" style={{ textDecoration: 'none', color: 'black' }}>
      Overview
    </Link>
  </th>
  <th
    className="hover-effect"
    style={{
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRight: '1px solid #ccc',
      padding: '10px',
    }}
  >
    <Link to="/accountfund" style={{ textDecoration: 'none', color: 'black' }}>
      Fundamentals
    </Link>
  </th>
  <th
    className="hover-effect"
    style={{
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRight: '1px solid #ccc',
      padding: '10px',
    }}
  >
    <Link to="/accountalert" style={{ textDecoration: 'none', color: 'black' }}>
      Alerts
    </Link>
  </th>
  <th
    className="hover-effect"
    style={{
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      padding: '10px',
      hovercolor:'green'
    }}
  >
    <Link to="/accountreturn" style={{ textDecoration: 'none', color: 'black' }}>
      Returns
    </Link>
  </th>
</tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                        No Alerts Found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          )}

          {/* Totals Row */}
          <tr className="table-total">
            <td>Total</td>
            <td>-</td>
            <td className="negative">-0.48(-0.04%)</td>
            <td>-</td>
            <td>1,170</td>
            <td>1,160</td>
            <td className="negative">-4(-0.38%)</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {/* Note Section */}
      <div className="portfolio-account-stock-note">
        <p className="portfolio-account-stock-notep">
          Note: Investment costs for Stocks include all charges mentioned while entering the transaction. The latest value is based on the exchange selected while buying. In case no exchanges (or multiple exchanges) are selected, <br /> NSE prices are the default. In case NSE prices are not available...
        </p>
      </div>
    </div>
    <Navbar/>
    </div>
  );
};

export default AccountStockalert;
