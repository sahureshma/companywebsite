import React from 'react';
import './Main.css'; // Main styles for layout
import PortfolioAnalytics from '../PortfolioAnalytics/PortfolioAnalytics';
import Dashboard from '../Dashboard/Dashboard';
import TopGainersLosers from '../TopGainersLosers/TopGainersLosers';
import TotalInvestment from '../TotalInvestment/TotalInvestment';

const TopHoldings = () => {
  const holdingsData = [
    { symbol: 'WIPRO', change: '+2.90%', shares: 90, avgCost: 310.00, marketValue: '78,985.68', totalGain: '+0.83%', lots: '1 lot', notes: '-' },
    { symbol: 'BRITANNIA', change: '-0.12%', shares: 75, avgCost: 75.69, marketValue: '63,548.36', totalGain: '-0.45%', lots: '1 lot', notes: '-' },
    { symbol: 'PSUBANK', change: '+2.79%', shares: 100, avgCost: 115.36, marketValue: '1,284.33', totalGain: '-0.12%', lots: '-', notes: '-' },
    { symbol: 'ITI SMALL CAP FUND', change: '-3.77%', shares: 125, avgCost: 425.26, marketValue: '72,598.48', totalGain: '-0.21%', lots: '-', notes: '-' },
    { symbol: 'M&M', change: '+0.24%', shares: 100, avgCost: 784.80, marketValue: '46,695.84', totalGain: '+0.76%', lots: '-', notes: '-' },
    { symbol: 'NTPC', change: '+0.10%', shares: 105, avgCost: 472.06, marketValue: '81,842.28', totalGain: '+0.02%', lots: '1 lot', notes: '-' }
  ];

  return (
    <div className="main-dashboard">
      {/* Left panel with Portfolio Analytics and Top Holdings */}
      <div className="left-panel">
        <PortfolioAnalytics />
        
        <div className="top-holdings">
          <h2>Top Holdings</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Change</th>
                <th>Shares</th>
                <th>Avg cost/Share</th>
                <th>Market Value</th>
                <th>Total Gain</th>
                <th>No. of Lots</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {holdingsData.map((holding, index) => (
                <tr key={index}>
                  <td className="symbol">{holding.symbol}</td>
                  <td className={holding.change.startsWith('+') ? 'positive' : 'negative'}>{holding.change}</td>
                  <td>{holding.shares}</td>
                  <td>{holding.avgCost}</td>
                  <td>{holding.marketValue}</td>
                  <td className={holding.totalGain.startsWith('+') ? 'positive' : 'negative'}>{holding.totalGain}</td>
                  <td>{holding.lots}</td>
                  <td>{holding.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right panel with Dashboard */}
      <div className="right-panel">
      <TotalInvestment/>
        <Dashboard />
        <TopGainersLosers/>
        
      </div>
     
    </div>
  );
};

export default TopHoldings;
