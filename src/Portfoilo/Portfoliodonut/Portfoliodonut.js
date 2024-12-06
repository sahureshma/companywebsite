import React from "react";
import "./Portfoliodonut.css"; // Ensure correct CSS file is imported
import { Link } from 'react-router-dom';
import { Doughnut } from "react-chartjs-2";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Portfoliodonut = () => {
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
      highestProfit: { name: "XYZ", value: 10, percentage: 2.5 }, // Example data
    },
  };

  const donutChartData = {
    labels: ["Red Segment", "Empty Space"],
    datasets: [
      {
        data: [75, 2], // Values for red segment and empty space
        backgroundColor: ["#FF3D3D", "#FFFFFF"],
        hoverBackgroundColor: ["#FF3D3D", "#FFFFFF"],
        borderWidth: 0,
      },
    ],
  };

  const donutChartOptions = {
    cutout: "55%", // Adjust thickness of the donut
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="networth-stocks-dashboard">
      {/* Navigation Tabs */}
      <h2 className="newwmutual">
  Stocks Portfolio
    </h2>
    <div className="networth-tabs">
      <Link to="/portfolio">
        <button className="networth-tab ">Dashboard</button></Link>
        <Link to="/portfoliostockaccount">
        <button className="networth-tabact">Stocks</button></Link>
        <Link to="/mutualaccount">
        <button className="networth-tab">Mutual Fund</button></Link>
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
        <div className="gain-card">
          <h3>Today's Gain</h3>
          <div className="content">
            <div className="portrow">
              {/* Donut Chart */}
              <div className="chart">
  <Doughnut
    data={donutChartData}
    options={donutChartOptions}
    className="doughnut-chart"
  />
</div>
              {/* Stats */}
              <div className="stats">
                <p>{data.todayGain.totalGaining} of {data.todayGain.totalGaining + data.todayGain.totalLosing} Gaining</p>
                <p className="gain-text"><FaCaretUp /> {data.todayGain.gainPercentage}%</p>
                <p>{data.todayGain.totalLosing} of {data.todayGain.totalGaining + data.todayGain.totalLosing} Losing</p>
                <p className="loss-text"><FaCaretDown /> {data.todayGain.losePercentage}%</p>
              </div>
            </div>
            <p className="investment-percentage">0% investment</p>
            <div className="stocks-summary">
              {/* Gaining and Losing Stocks */}
              <div className="gaining-and-losing-stocks">
                <div className="gaining-stocks">
                  <h4>Gaining Stocks</h4>
                  <p>-</p>
                </div>
                <div className="losing-stocks">
                  <h4>Losing Stocks</h4>
                  {data.todayGain.losingStocks.map((stock, index) => (
                    <p key={index} style={{ color: stock.percentage < 0 ? "red" : "black" }}>
                      {stock.name}: {stock.value} ({stock.percentage}%)
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unrealized Gain Section */}
        <div className="unrealized-card">
          <h3>Unrealized Gain</h3>
          <div className="content">
            <div className="row">
              {/* Donut Chart */}
              <div className="chartunrealized">
  <Doughnut data={donutChartData} options={donutChartOptions} />
</div>
              {/* Stats */}
              <div className="stats">
                <p>{data.unrealizedGain.totalProfit} of {data.unrealizedGain.totalProfit + data.unrealizedGain.totalLoss} In Profit</p>
                <p className="gain-text"><FaCaretUp /> {data.unrealizedGain.profitPercentage}%</p>
                <p>{data.unrealizedGain.totalLoss} of {data.unrealizedGain.totalProfit + data.unrealizedGain.totalLoss} In Loss</p>
                <p className="loss-text"><FaCaretDown /> {data.unrealizedGain.highestLoss.value} ({data.unrealizedGain.lossPercentage}%)</p>
              </div>
            </div>
            <p className="investment-percentage-unrealized">0% investment</p>
            <div className="stocks-summaryunrealized">
              {/* Highest Profit and Loss */}
              <div className="profit-and-lossunrealized">
                <div className="highest-profitunrealized">
                  <h4 className='profitunrealizedh4'>Highest Profit</h4>
                  <p className='profitunrealizedp'>-</p>
                </div>
                <div className="highest-lossunrealized">
                  <h4 className='lossunrealizedh4'>Highest Loss</h4>
                  <p className='lossunrealizedp'style={{ color: data.unrealizedGain.highestLoss.percentage < 0 ? "red" : "black" }}>
                    {data.unrealizedGain.highestLoss.name}: {data.unrealizedGain.highestLoss.value} ({data.unrealizedGain.highestLoss.percentage}%)
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

export default Portfoliodonut;
