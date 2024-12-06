
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DealOfTheYearSection from "../DealOfTheYearSection/DealOfTheYearSection";
import Navbar from '../../Navbar/Navbar';

const SubscriptionannualPlans = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleToggle = () => {
    setIsAnnually(!isAnnually);
    if (!isAnnually) {
      navigate("/pricehalf"); // Navigate to the annual plan page
    }
  };

  return (
    <div>
      <DealOfTheYearSection />
      <Navbar />
      <div className="subscription-container">
        <h4 className='subscriptionh4'>Unlock advanced tools, real-time market data, and expert analysis with our premium subscription plan</h4>
        <h3 className='subscriptionh2'>Choose a plan that aligns with trading goals</h3>
        <div className="toggle-switch-container">
          <span className={isAnnually ? "active" : "inactive"}>Half-year</span>
          <div className="toggle-switch" onClick={handleToggle}>
            <div className={`toggle-knob ${isAnnually ? "left" : "right"}`} />
          </div>
          <span className={isAnnually ? "inactive" : "active"}>Annually</span>
        </div>
      <div className="plans-wrapper">
        {/* Elite Plan */}
        <div className="plan-card elite-plan">
          <div className="plan-header">
            <div className="ribbon">
              <span>Elite</span>
              <div className="ribbon-price">
                <span className="price-value">₹2,999</span> / 6 Month
              </div>
              <div className="ribbon-price-detail">₹8,999 / After 6 Month</div>
            </div>
            <div className="plan-savings">
  <span className="text-black">You save </span>
  <span className="text-highlight">₹6,000</span>
  <span className="text-highlight"> (66%)</span>
  <span className="text-black"> a year</span>
</div>
            <button className="pay-now-btn">Pay Now</button>
          </div>
          <div class="plan-features">
    <h4 className='plan-featuresh4'>Features:</h4>
    <ul>
        <li className="plan-featuresli">
        <strong> 50 Stock Recommendations</strong> 
            <span className='plan-featuresp'> : Expert recommendations to build a focused and profitable portfolio.</span>
        </li>
        <li className="plan-featuresli">
        <strong>Stocks Screener </strong> 
            <span className='plan-featuresp'> : Access essential tools to analyze and screen stocks effectively.</span>
        </li>
        <li className="plan-featuresli">
        <strong>Research Tool </strong> 
            <span className='plan-featuresp'> : Utilize advanced resources for in-depth stock research.</span>
        </li>
        <li className="plan-featuresli">
        <strong> Discover Top-rated Stocks</strong> 
            <span className='plan-featuresp'> : Easily find the best-performing stocks.</span>
        </li>
    </ul>
</div>

<div class="plan-additional-benefits">
    <h4 className='plan-featuresh4'>Additional Benefits:</h4>
    <ul>
    <li className="plan-featuresli">
    <strong> Stock of the Month</strong>
            <span className='plan-featuresp'> : One carefully selected stock handpicked by our investment committee every month.</span>
        </li>
        <li className="plan-featuresli">
        <strong>Research Reports </strong> 
            <span className='plan-featuresp'> : Access the real-time research report on any stock.</span>
        </li>
        <li className="plan-featuresli">
        <strong>Momentum Stocks </strong>
            <span className='plan-featuresp'> :Identify and capitalize on the best momentum stocks for any market phase.</span>
        </li>
    </ul>
</div>

          <div className="plan-footer">
            Empower your investment journey with the Elite Plan!
            <div><button className="pay-now-btn">Pay Now</button></div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="plan-card permium-plan">
          <div className="plan-header">
            <div className="ribbon">
            <span>Premium</span>
          
            <div className="ribbon-price">
                <span className="price-value">₹7,999</span> / 6 Month
             </div>
              <div className="ribbon-price-detail">₹19,999 / After 6 Month</div>
            </div>
            <div className="plan-savings">
            <span className="text-black">You save </span>
  <span className="text-highlight">₹12,000</span>
  <span className="text-highlight"> (60%)</span>
  <span className="text-black"> a year</span>
            </div>
            <button className="pay-now-btn">Pay Now</button>
          </div>
          <div className="plan-features">
  <h4 className='plan-featuresh4'>Features:</h4>
  <ul>
    <li className="plan-featuresli">
      <strong>150 Stock Recommendations</strong>
      <span className='plan-featuresp'>
        : Expert recommendations on 150 to optimize your portfolio.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>StockSIP</strong>
      <span className='plan-featuresp'>
        : Automate your investments with StockSIP for consistent wealth creation.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Premium Screener</strong>
      <span className='plan-featuresp'>
        : Access advanced tools to filter and analyze stocks tailored to your specific investment strategy.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Q&A Feature</strong>
      <span className='plan-featuresp'>
        : Get personalized investment advice from our experts.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Discover Top-rated Stocks</strong>
      <span className='plan-featuresp'>
        : Identify the best-performing stocks based on comprehensive research and analysis.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Premium Actionable Insights</strong>
      <span className='plan-featuresp'>
        : Stay ahead of the market with exclusive updates and analysis on market trends.
      </span>
    </li>
  </ul>
</div>

<div className="plan-additional-benefits">
  <h4 className='plan-featuresh4'>Additional Benefits:</h4>
  <ul>
    <li className="plan-featuresli">
      <strong>Stock Research</strong>
      <span className='plan-featuresp'>
        : Receive detailed buy/sell/hold recommendations on all stocks, backed by deep, data-driven research.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Stock of the Week</strong>
      <span className='plan-featuresp'>
        : Gain access to a high-potential stock, carefully handpicked and recommended by our research team.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Research Reports</strong>
      <span className='plan-featuresp'>
        : Access the real-time research reports on any stock to help you make informed decisions.
      </span>
    </li>
    <li className="plan-featuresli">
      <strong>Momentum Stocks</strong>
      <span className='plan-featuresp'>
        : Identify and capitalize on the best momentum stocks across any market phase, enhancing your portfolio's growth potential.
      </span>
    </li>
  </ul>
</div>

          <div className="plan-footer">
            Invest smarter, invest confidently with the Premium Plan!
            <div><button className="pay-now-btn">Pay Now</button></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionannualPlans;
