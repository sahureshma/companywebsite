import React from "react";
import "./NetWorthStocksDashboard.css";
import { Link } from 'react-router-dom';
import MyAccounts from "../Accountstock/Accountstock";
import Navbar from '../../Navbar/Navbar';
function NetWorthStocksDashboard() {
  return (
    <div><Navbar/>
    
    <div className="networth-stocks-dashboard">
      {/* Navigation Tabs */}
     
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


      {/* Summary Section */}
      <div className="networth-summary">
        <div>
          <p className='networthp'>My Net Worth</p>
          <h2>₹0</h2>
        </div>
        <div>
          <p className='networthp'>Today's Gain / Loss</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
        <div>
          <p className='networthp'>Amount Invested</p>
          <h2>0</h2>
        </div>
        <div>
          <p className='networthp'>Unrealized Gain</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
      </div>

      {/* Performance Section */}
      <div className="networth-performance">
        {/* Today's Gain */}
        <div className="networth-performance-card">
          <h3 className='networth-performanceh3'>Today's Gain</h3>
          <p className='networthp'>• 0 of 1 Gaining</p>
          <p className='networthp'>• 1 of 1 Losing</p>
          <div className="networth-performance-details">
            <div className="networth-performance-gain">
              <h4>Gaining Stocks</h4>
              <p className='networthpara'>-</p>
              <p className='networthpara'>-</p>
            </div>
            <div className="networth-performance-loss">
              <h4>Losing Stocks</h4>
              <p className='networthpara'>-</p>
              <p className='networthpara'>-</p>
            </div>
          </div>
        </div>

        {/* Unrealized Gain */}
        <div className="networth-performance-card">
          <h3 className='networth-performanceh3'>Unrealized Gain</h3>
          <p className='networthp'>• 0 of 1 In Profit</p>
          <p className='networthp'>• 1 of 1 In Loss</p>
          <div className="networth-performance-details">
            <div className="networth-performance-gain">
              <h4>Highest Profit</h4>
              <p className='networthpara'>-</p>
              <p className='networthpara'>-</p>
            </div>
            <div className="networth-performance-loss">
              <h4>Highest Loss</h4>
              <p className='networthpara'>-</p>
              <p className='networthpara'>-</p>
            </div>
          </div>
        </div>
      </div>
      <MyAccounts/>
    </div>
    </div>
  );
}

export default NetWorthStocksDashboard;