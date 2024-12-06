import React, { useState } from "react";
import "./AccountStockfundamental.css"; // Assuming your styles are in this file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useLocation } from "react-router-dom";

import { Link } from 'react-router-dom';
import Portfoliodonut from "../Portfoliodonut/Portfoliodonut";
import Navbar from "../../Navbar/Navbar";


const AccountStockfundamental = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    location.pathname === "/accountfund"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div><Portfoliodonut/>
    <div className="portfolio-account-stock-container">
      <div className="portfolio-account-stock-header">
        <h2 className="portfolio-account-stock-title">My Accounts</h2>
        <div className="portfolio-account-stock-controls">
          {/* Filters on the left */}
          <div className="portfolio-account-stock-filters">
            <span className="filter-label">FILTER:</span>
            <button className="filter-button ">All</button>
            <button className="filter-button">Gainers</button>
            <button className="filter-button">Losers</button>
          </div>
          {/* Actions and group controls on the right */}
          <div className="portfolio-account-stock-actions-container">
            {/* Buttons */}
            <div className="portfolio-account-stock-actions">
              <button className="add-transaction-button">+ Add Transaction</button>
              <button className="my-alerts-button">My Alerts</button>
            </div>

            {/* Grouping options */}
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

      {/* Stock Table */}
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

          {/* Subcategory Row */}
          {isDropdownOpen && (
            <tr>
            <td colSpan="8" className="subcategory-row">
              {/* Render the subcategory table */}
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
                  
                  {/* Column Headers */}
                  <tr>
                  <th>Particulars</th>
            <th>Absolute Value (Cr)</th>
            <th>QoQ Chg</th>
            <th>YoY Chg</th>
            <th>2 Y Chg</th>
            <th>3 Y Chg</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
            <td>Sales</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total Revenue</td>
            <td>1016.20</td>
            <td>95.43</td>
            <td>312.3</td>
            <td>414.4</td>
            <td>42.32</td>
          </tr>
          <tr>
            <td>Operating Profit</td>
            <td>-22.31</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Other Income</td>
            <td>14.67</td>
            <td>-2.46</td>
            <td>52.65</td>
            <td>40.25</td>
            <td>12.37</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>61.65</td>
            <td>15.82</td>
            <td>-11.17</td>
            <td>22.8</td>
            <td>11.05</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>PAT</td>
            <td>-70.11</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>EPS (Basic)</td>
            <td>-0.73</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          
                </tbody>
              </table>
            </td>
          </tr>
          
          )}

          <tr className="table-total">
            <td>Total</td>
            <td>-</td>
            <td className="negative">-0.48(-0.04%)</td>
            <td>-</td>
            <td>1,170</td>
            <td>1,160</td>
            <td className="negative">-4(-0.04%)</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {/* Portfolio Note */}
      <div className="portfolio-account-stock-note">
        <p className='portfolio-account-stock-notep'>
          Note: Investment costs for Stocks include all charges mentioned while entering the transaction. The latest value is based on the exchange selected while buying. In case no exchanges (or multiple exchanges) are selected, <br/> NSE prices are the default. In case NSE prices are not available...
        </p>
      </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default AccountStockfundamental;
