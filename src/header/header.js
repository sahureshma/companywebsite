import React, { useState, useEffect } from 'react';
import './header.css';
import { Link as ScrollLink } from 'react-scroll';  // For scroll navigation

import { Divider } from '@mui/material';

function Graphheader() {
  const [change, setChange] = useState(0); // For storing dynamic change value in rupees
  const [lastUpdated, setLastUpdated] = useState('');
  const [currentPrice, setCurrentPrice] = useState(300); // Example initial stock price, replace with actual price

  // Function to simulate fetching data (replace with real API call)
  const fetchData = () => {
    const randomChange = (Math.random() * 20 - 10).toFixed(2); // Random value between -10 and +10 INR
    setChange(randomChange);

    const currentTime = new Date();
    setLastUpdated(currentTime.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }));

    // Update the current price after the change is applied, ensuring that the values are numbers
    setCurrentPrice(prevPrice => {
      const newPrice = parseFloat(prevPrice) + parseFloat(randomChange); // Ensure both values are numbers
      return newPrice.toFixed(1); // Now .toFixed works on a number
    });
  };

  // Fetch data initially and set an interval to update it
  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="graphcontainer">
      <div className="graphheader">
        <div className="title-container">
          <h1 className="telephone">Indian Telephone Industries Limited</h1>
        </div>
        <div className="graph-price-update">
          <span className={`graphprice ${change >= 0 ? 'positive' : 'negative'}`}>
            ₹{parseFloat(currentPrice).toLocaleString()} {/* Format the price with ₹ symbol */}
          </span>
          <span className="graphupdate">Last updated: {lastUpdated}</span>
        </div>
      </div>

      <div className="graphstock-info">
        <span className="graphnse">NSE : ITI</span>
        <span className="graphsector">Telecom Equipment</span>
      </div>

      {/* Navigation Links */}
      <nav className="graphnavbar">
        <Divider />
        <ScrollLink to="overview" smooth={true} duration={500}>
          Overview
        </ScrollLink>
        <ScrollLink to="stockxray" smooth={true} duration={500}>
          10 Yrs X-Ray
        </ScrollLink>
        <ScrollLink to="stockearning" smooth={true} duration={500}>
          Earnings
        </ScrollLink>
        <ScrollLink to="valuation" smooth={true} duration={500}>
          Valuation
        </ScrollLink>
        <ScrollLink to="stockanalysis" smooth={true} duration={500}>
          Analysis
        </ScrollLink>
        <ScrollLink to="analysis-notes" smooth={true} duration={500}>
          Analysis Insight
        </ScrollLink>
        <ScrollLink to="stockpeer" smooth={true} duration={500}>
          Peers
        </ScrollLink>
        <ScrollLink to="profitloss" smooth={true} duration={500}>
          Profit & Loss
        </ScrollLink>
        <ScrollLink to="balance-sheet" smooth={true} duration={500}>
          Balance Sheet
        </ScrollLink>
        <ScrollLink to="cashflow" smooth={true} duration={500}>
          Cash Flow
        </ScrollLink>
        <ScrollLink to="ratios" smooth={true} duration={500}>
          Ratios
        </ScrollLink>
        <ScrollLink to="news" smooth={true} duration={500}>
          News
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
        
        {/* Optional: For routing to other pages */}
        <Divider />
        
      </nav>

      <Divider sx={{ margin: '10px 0' }} />
    </div>
  );
}

export default Graphheader;
