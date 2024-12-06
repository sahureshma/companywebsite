
import React from 'react';
import goldmarketData from '../Goldmarketdata';
import './Goldmarket.css';

const Goldmarket = () => {
  return (
    <div className="goldetf-container">
      <h1 className="goldetf-title">Gold Exchange Traded Funds</h1>
      <p className="goldetf-description">
      Gold Exchange Traded Funds (Gold ETFs) are a type of investment fund that tracks the price of gold. 1 
       They are a popular way to invest in gold without the need to physically buy and store gold.
        ETFs trade on the cash market of the National Stock Exchange, like any other company stock, and can be 
        bought and sold continuously at market prices.<br/><br/>

        Gold ETFs are traded on stock exchanges, making them highly liquid. Gold ETFs are passive investment instruments that are based on gold prices and invest in gold bullion. Because of its direct gold pricing, there is a complete transparency on the holdings of an ETF. Further due to its unique structure and creation mechanism,
         the ETFs have much lower expenses as compared to physical gold investments
<h2>LIST OF GOLD ETFS</h2>
      </p>
      <table className="goldetf-table">
        <thead>
          <tr>
            <th>Issuer</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Underlying</th>
            <th>Launch Date</th>
          </tr>
        </thead>
        <tbody>
          {goldmarketData.map((etf, index) => (
            <tr key={index}>
              <td>{etf.issuer}</td>
              <td className='goldmarketname'>{etf.name}</td>
              <td className='goldsymbolmarket'>{etf.symbol}</td>
              <td>{etf.underlying}</td>
              <td>{etf.launchDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goldmarket;