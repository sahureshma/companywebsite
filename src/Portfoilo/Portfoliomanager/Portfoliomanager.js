import React from "react";
import "./Portfoliomanager.css";
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import PortfolioManagerDashboard from "../Portfoliodashboard/Portfoliodashboard";

function Portfolio() {
  return (
    <div className="networth-stocks-dashboard">
      {/* Header Section */}
   
      <h2 className="newwmutual">Portfolio Management Dashboard</h2>
      <div className="networth-tabs">
      <Link to="/portfolio">
        <button className="networth-tabact ">Dashboard</button></Link>
        <Link to="/portfoliostockaccount">
        <button className="networth-tab">Stocks</button></Link>
        <Link to="/mutualaccount">
        <button className="networth-tab">Mutual Fund</button></Link>
        <Link to="/portfoliogoldtoppage">
        <button className="networth-tab">Gold</button></Link>
      </div>
 {/* Net Worth Overview Section */}
 <div className="networth-summary">
        <div>
          <p className="financep">My Net Worth</p>
          <h2>₹37,399</h2>
        </div>
        <div>
          <p className="financep">My Investments</p>
          <h2>₹37,399</h2>
        </div>
        <div>
          <p className="financep">My Liabilities</p>
          <h2>₹0</h2>
        </div>
      </div>

      {/* Enhance Message Section */}
      <div className="finance-enhance-message">
        Enhance risk management and maximize returns with FinanceShastra Portfolio Manager!
      </div>

      {/* Investments Section */}
      <h2 className="investh2">My Investments</h2>
      <div className="finance-dashboard-content">
        {/* Investment Details Card */}
        <div className="finance-investment-details-card">
          <div className="finance-investment-details-group">
            <p>Latest Value</p>
            <h3>₹ 1,166</h3>
            <p>Investment Cost</p>
            <h3>₹ 1,170</h3>
          </div>
          <div className="finance-investment-details-group">
            <h3>Unrealized Gain</h3>
            <p>Overall Gain</p>
            <h3 className="finance-negative-gain">0 (0%)</h3>
            <p>Today's Gain</p>
            <h3 className="finance-negative-gain">0 (0%)</h3>
          </div>
          <div className="finance-investment-details-group">
            <h3>Realized Gain</h3>
            <p>Realized Gain</p>
            <h3 className="finance-negative-gain">0</h3>
            <p>Capital Gain</p>
            <h3 className="finance-negative-gain">0</h3>
          </div>
          <div className="finance-investment-detailsother">
            <p>Other Gain</p>
            <h3 className="finance-negative-gainother">0</h3>
            <p className="finance-investment-footer">
          Unrealized and Realized gain for current holdings in portfolio
        </p>
          </div>
        </div>
        
      </div>

     

      {/* Navbar and PortfolioManagerDashboard Components */}
      <Navbar />
      <PortfolioManagerDashboard />
    </div>
  );
}

export default Portfolio;
