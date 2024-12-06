import React from 'react';
import './TopGainersLosers.css';

const data = {
  gainers: [
    { symbol: 'ICICIBANK', ltp: '1313.15', change: '+0.37%' },
    { symbol: 'EICHERMOT', ltp: '4,736.50', change: '+0.37%' },
    { symbol: 'SBIN', ltp: '600.95', change: '+0.12%' },
    { symbol: 'HDFCLIFE', ltp: '722.90', change: '+0.79%' },
    { symbol: 'RELIANCE', ltp: '2,505.20', change: '+0.54%' } // New gainer entry
  ],
  losers: [
    { symbol: 'BAJAJ-AUTO', ltp: '9,700.00', change: '-3.07%' },
    { symbol: 'MARUTI', ltp: '11,215.55', change: '-2.33%' },
    { symbol: 'BRITANNIA', ltp: '5,656.00', change: '-1.86%' },
    { symbol: 'M&M', ltp: '2,723.50', change: '-2.05%' },
    { symbol: 'TATASTEEL', ltp: '1,040.30', change: '-1.45%' } // New loser entry
  ],
};


const TopGainersLosers = () => {
  return (
    <div className="top-gainers-losers">
      <h2>Top Gainers & Losers</h2>

      {/* Gainers Section */}
      <div className="table gainers">
        <div className="header">
          <span>Symbol</span>
          <span>LTP</span>
          <span>%CHNG</span>
        </div>
        {data.gainers.map((item, index) => (
          <div className="row" key={index}>
            <span>{item.symbol}</span>
            <span>{item.ltp}</span>
            <span className="positive">{item.change}</span>
          </div>
        ))}
      </div>

      {/* Losers Section */}
      <div className="table losers">
        <div className="header">
          <span>Symbol</span>
          <span>LTP</span>
          <span>%CHNG</span>
        </div>
        {data.losers.map((item, index) => (
          <div className="row" key={index}>
            <span>{item.symbol}</span>
            <span>{item.ltp}</span>
            <span className="negative">{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainersLosers;
