import React, { useState } from "react";
import "./OverviewPortfoliograph.css"; // Assuming your styles are in this file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"; // Importing Chart.js components

import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Portfoliodonut from "../Portfoliodonut/Portfoliodonut";
import Navbar from "../../Navbar/Navbar";

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const OverviewPortfolioManager = () => {
  const location = useLocation();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    location.pathname === "/portfoliostockaccount"
  );
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Example chart data for stock price
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Stock Price',
        data: [291, 292, 293, 290, 291],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  // Additional graph for intraday chart
  const title = "Intraday Chart";

  // Labels for the time intervals
  const labels = [
    "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"
  ];

  // Simulating an up and down trend in the dataset
  const dataset = [
    300, 305, 295, 290, 296, 300, 305, 295, 300, 302 // Fluctuating values
  ];

  const borderColor = "#90EE90";  // Light Green color for the line (representing volatility)
  const backgroundColor = "rgba(144, 238, 144, 0.2)";  // Light Green background fill for the chart

  // Intraday chart data configuration
  const intradayData = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        data: dataset, // Fluctuating data (up and down)
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        fill: true, // Fill under the line for better visualization
        tension: 0.4, // Smooth curve for gradual transitions
        pointRadius: 3, // Small dots on the line
        borderWidth: 2, // Thicker line for better visibility
      },
    ],
  };

  // Intraday chart options configuration
  const intradayOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `Price: ₹${context.raw}`, // Custom tooltip format
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#666", // Label color for X-axis
        },
      },
      y: {
        beginAtZero: false, // No need to start from zero
        ticks: {
          color: "#666", // Label color for Y-axis
        },
        grid: {
          borderDash: [5], // Dashed grid lines for readability
        },
      },
    },
  };

  return (
    <div>
        <Portfoliodonut/>
    <div className="portfolio-account-stock-container">
      <div className="portfolio-account-stock-header">
        <h2 className="portfolio-account-stock-title">My Accounts</h2>
        <div className="portfolio-account-stock-controls">
          {/* Filters on the left */}
          <div className="portfolio-account-stock-filters">
            <span className="filter-label">FILTER:</span>
            <button className="filter-button">All</button>
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
                <input type="radio" name="groupBy" value="none" defaultChecked /> None
                <input type="radio" name="groupBy" value="sector" /> Sector
                <input type="radio" name="groupBy" value="mcap" /> M-Cap
              </label>
            </div>
          </div>
        </div>
      </div>
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
            <>
              <tr>
                <td colSpan="8" className="subcategory-row">
                  <table className="subcategory-table">
                    <thead>
                      <tr>
                        <th className="hover-effect" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                          <Link to="/portfoliostockaccount" style={{ textDecoration: 'none', color: 'black' }}>Transaction History</Link>
                        </th>
                        <th className="hover-effect" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                          <Link to="/overview" style={{ textDecoration: 'none', color: 'black' }}>Overview</Link>
                        </th>
                        <th className="hover-effect" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                          <Link to="/accountfund" style={{ textDecoration: 'none', color: 'black' }}>Fundamentals</Link>
                        </th>
                        <th className="hover-effect" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                          <Link to="/accountalert" style={{ textDecoration: 'none', color: 'black' }}>Alerts</Link>
                        </th>
                        <th className="hover-effect" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', padding: '10px' }}>
                          <Link to="/accountreturn" style={{ textDecoration: 'none', color: 'black' }}>Returns</Link>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </td>
              </tr>

              {/* Intraday Chart Section */}
              <tr>
                <td colSpan="8">
                  <div className="portfolio-manager-container">
                    <div className="portfolio-market-data">
                      <div className="market-data-container">
                        <div className="market-data-header">
                          <h3 className="portheadmanager" style={{ margin: 0, borderRadius: "8px 8px 0 0" }}>
                            Market Data
                          </h3>
                        </div>
                        <div className="market-data-content">
                          <div className="market-data-row">
                            <span>Bid (Qty):</span>
                            <span>0 (0)</span>
                          </div>
                          <div className="market-data-row">
                            <span>Ask (Qty):</span>
                            <span>292.18 (56,744)</span>
                          </div>
                          <div className="market-data-row">
                            <span>Total B/S:</span>
                            <span>-</span>
                          </div>
                          <div className="market-data-row">
                            <span>Volume:</span>
                            <span>130.41 L</span>
                          </div>
                          <div className="market-data-row">
                            <span>Today's O/C:</span>
                            <span>298.00 / 291.40</span>
                          </div>
                          <div className="market-data-row">
                            <span>Today's H/L:</span>
                            <span>301.80 / <span className="highlight-red">287.65</span></span>
                          </div>
                          <div className="market-data-row">
                            <span>52 WK H / L:</span>
                            <span>384.30 / <span className="highlight-red">210.00</span></span>
                          </div>
                        </div>
                      </div>

                      {/* Intraday Stock Trading Graph Section */}
                      <div className="chart-containerportfolio">
                        <h3 style={{ marginLeft: "50px" }}>{title}</h3>
                        <div className="chart-wrapper" style={{ height: "300px", width: "500px", marginLeft: "50px" }}>
                          <Line data={intradayData} options={intradayOptions} />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          )}

          {/* Portfolio Note */}
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

export default OverviewPortfolioManager;
