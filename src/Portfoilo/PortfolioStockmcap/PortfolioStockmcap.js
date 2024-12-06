import React, { useState } from "react";
import "./PortfolioStockmcap.css"; // Assuming your styles are in this file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaEdit, FaTrashAlt} from 'react-icons/fa'; 
import { BiPlusCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import {useNavigate, useLocation } from "react-router-dom";
import Portfoliodonut from "../Portfoliodonut/Portfoliodonut";
import Navbar from "../../Navbar/Navbar";


const PortfolioStockmcap = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(
      location.pathname === "/portfoliostockaccount"
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
      Large Cap
    </td>
    <td></td>
    
    <td className="positive">3(-0.27%)</td>
    <td></td>
    <td>1,170<br/>100%</td>
    <td>1,160<br/>100%</td>
    <td className="negative">-4(-0.04%)</td>
    <td>-</td>
  </tr>

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
            <td className="negative">291.40(-0.12)</td>
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
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Date</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Type</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Quantity</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Amount</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Charges</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Net Amount</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Realized Gain/Loss</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Holding Balance</th>
                    <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18/11/2024</td>
                    <td>Buy My Account</td>
                    <td>2</td>
                    <td>584.40</td>
                    <td>0.60</td>
                    <td>585</td>
                    <td>-</td>
                    <td>4</td>
                    <td>
                      <span className="icon-container">
                        <FaEdit className="edit-icon" />
                        <span className="border"></span>
                        <FaTrashAlt className="delete-icon" />
                        <span className="border"></span>
                        <BiPlusCircle className="add-icon" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>18/11/2024</td>
                    <td>Buy My Account</td>
                    <td>2</td>
                    <td>584.40</td>
                    <td>0.60</td>
                    <td>585</td>
                    <td>-</td>
                    <td>4</td>
                    <td>
                      <span className="icon-container">
                        <FaEdit className="edit-icon" />
                        <span className="border"></span>
                        <FaTrashAlt className="delete-icon" />
                        <span className="border"></span>
                        <BiPlusCircle className="add-icon" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
          )}

         
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

export default PortfolioStockmcap; 
                