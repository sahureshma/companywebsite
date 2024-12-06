import React from "react";
import { Link } from 'react-router-dom';
// Corrected CSS file import
import { Doughnut } from "react-chartjs-2";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import './Mutualportfoliodonut.css'
const  Mutualportfoliodonut = () => {
  const data = {
    todayGain: {
      totalGaining: 0,
      totalLosing: 1,
      gainPercentage: 0,
      losePercentage: -0.04,
      losingStocks: [{ name: "ITI", value: 291.4, percentage: -0.04 }],
    },
    unrealizedGain: {
      totalProfit: 0,
      totalLoss: 1,
      profitPercentage: 0,
      lossPercentage: -0.38,
      highestLoss: { name: "ITI", value: -4, percentage: -0.38 },
      highestProfit: { name: "XYZ", value: 10, percentage: 2.5 }, // Example for highest profit
    },
  };

  const donutChartData = {
    labels: ["Dark Green Segment", "Empty Space"],
    datasets: [
      {
        data: [75, 2], // Adjust these values for the dark green segment and empty space
        backgroundColor: ["#24b676", "#FFFFFF"], // Dark Green and White
        hoverBackgroundColor: ["#006400", "#FFFFFF"],
        borderWidth: 0, // No borders for a cleaner look
      },
    ],
  };
  

  const donutChartOptions = {
    cutout: "55%", // Makes it a thinner donut
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip if not needed
      legend: { display: false }, // Disable legend
    },
  };

  return (
  <div>
    
    <div className="networth-stocks-dashboard">
      <h2 className="newwmutual">
      Mutual Fund Portfolio
    </h2>
    <div className="networth-tabs">
      <Link to="/portfolio">
        <button className="networth-tab ">Dashboard</button></Link>
        <Link to="/portfoliostockaccount">
        <button className="networth-tab">Stocks</button></Link>
        <Link to="/mutualaccount">
        <button className="networth-tabact">Mutual Fund</button></Link>
        <Link to="/portfoliogoldtoppage">
        <button className="networth-tab">Gold</button></Link>
      </div>

      {/* Summary Section */}
      <div className="networth-summary">
        <div>
          <p className="networthp">My Net Worth</p>
          <h2>₹0</h2>
        </div>
        <div>
          <p className="networthp">Today's Gain / Loss</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
        <div>
          <p className="networthp">Amount Invested</p>
          <h2>₹0</h2>
        </div>
        <div>
          <p className="networthp">Unrealized Gain</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
      </div>
    <div className="portfolio-gain-loss">
      {/* Today's Gain Section */}
      <div className="gainnn-card">
        <h3  style={{marginLeft:"100px"}}>Holding summary-Unrealized Gain</h3>
        <div className="content">
          <div className="portrowgainloss">
            {/* Donut Chart */}
            <div className="charrts">
            <Doughnut
  data={donutChartData}
  options={{
    ...donutChartOptions,
    hover: {
      mode: null, // Disables hover interactions
      animation: false // Disables hover animations
    },
  }}
  style={{
    borderRadius: "50%",
    marginLeft:"20px"
    
  }}
/>
                
            </div>
            {/* Stats Text */}
            <div className="stats">
            <p style={{ fontSize: "15px",  color: "black",marginLeft:"15px" }}>
  1 of 1 in profit{" "} 
  
</p>

<p className="gain-text">
  <span style={{ color: "green" }}>34,231
    <FaCaretUp /> 
  </span> 
  (1711.6%)
</p>

              <p style={{ fontSize: "15px",color: "black" ,borderTop:"1px solid grey ",marginLeft:"15px"}}>
              0 of 1 in Loss{" "} 
              </p>
              <p className="loss-text">
                
                <span style={{ color: "red" }}>0
                <FaCaretDown/>
  </span> 
  (0%)
              </p>
            </div>
          
          </div>
        <p1 style={{marginLeft:'20px'}}>% investment</p1>
          <div className="stocks-summary">
          
            {/* Gaining and Losing Stocks Section */}
            <div className="gaining-and-losing-stocks">
              <div className="gainingg-stocks">
                <h4>Highest profit</h4>
                <p style={{fontSize: "14px" }}>ICICI Prudential Equity & Debt Fund (G)</p>
                <p style={{fontSize: "14px"}}>34,231 <span style={{ color: "#006400", fontWeight: "bold" }}>(1711.55%)</span></p>
                
              </div>
              <div className="losingg-stocks">
                <h4>Highest loss</h4>
                <p style={{fontSize: "10px"}}>-</p>
                <p style={{fontSize: "10px" }}>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unrealized Gain Section */}
      <div className="unnrealized-card">
        <h3 className="mutual" >MF Ranking Summary</h3>
        <div className="content">
          <div className="rrrow">
            {/* Donut Chart */}
 
            <div className="charrrt">
            <Doughnut
  data={donutChartData}
  options={{
    ...donutChartOptions,
    hover: {
      mode: null, // Disables hover interactions
      animation: false // Disables hover animations
    },
  }}
  style={{
    borderRadius: "50%",
   
  }}
/>
       
        <p style={{ fontSize: "16px", color: "black",marginRight:"50px" }} >
          Investment in above average performance{" "}
          <span style={{ color: "#006400", fontWeight: "bold" }}>100%</span>
        </p>
      </div>
          </div>
        
         
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Mutualportfoliodonut;