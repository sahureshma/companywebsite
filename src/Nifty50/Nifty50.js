import React from 'react';
import './Nifty50.css';

const data = {
  gainers: [
    { name: "Britannia Inds", cmp: "5,047.70", change: "0.39%" },
    { name: "NTPC", cmp: "380.85", change: "0.21%" },
    { name: "Tata Motors", cmp: "786.40", change: "0.18%" },
    { name: "Hindustan Unilever", cmp: "2,464.75", change: "0.14%" },
    { name: "Infosys", cmp: "1,868.30", change: "0.02%" },
  ],
  losers: [
    { name: "Hero MotoCorp", cmp: "4,521.10", change: "-4.18%" },
    { name: "Hindalco", cmp: "626.80", change: "-3.75%" },
    { name: "Tata Steel", cmp: "139.25", change: "-3.40%" },
    { name: "Mahindra & Mahindra", cmp: "2,798.10", change: "-3.36%" },
    { name: "Eicher Motors", cmp: "4,589.10", change: "-3.15%" },
  ]
};

const Nifty50 = () => {
  return (
    <div className="nifty50-tables">
      <div>
        <h3>Nifty 50 - Today's Top Gainers</h3>
        <div className="nifty50table-container">
          <table className="nifty50-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>CMP</th>
                <th>Price Change(%)</th>
              </tr>
            </thead>
            <tbody>
              {data.gainers.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.cmp}</td>
                  <td className="positive">{item.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h3>Nifty 50 - Today's Top Losers</h3>
        <div className="nifty50table-container">
          <table className="nifty50-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>CMP</th>
                <th>Price Change(%)</th>
              </tr>
            </thead>
            <tbody>
              {data.losers.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.cmp}</td>
                  <td className="negative">{item.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Nifty50;
