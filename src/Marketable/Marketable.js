
import React from 'react';
import Marketdata from '../Marketdata';
import './Marketable.css';

const Marketable = () => {
  return (
    <div className="etf-container">
      <h1 className="etf-title">Equity Exchange Traded Funds</h1>
      <p className="etf-description">
      Equity Exchange Traded Funds (ETFs) are a type of investment fund that tracks a specific index, commodity, bonds, or a basket of assets. They are similar to mutual funds in that they
pool money from investors to invest in a diversified portfolio of securities. However, unlike mutual funds, ETFs trade on stock exchanges, allowing investors to buy and sell shares
throughout the trading day, just like individual stocks.<br/><br/>

Equity ETFs are passive investment instruments that are based on indices and invest in securities in same proportion as the underlying index. Because of its index mirroring property,
there is a complete transparency on the holdings of an ETF. Further due to its unique structure and creation mechanism, the ETFs have much lower expense ratios as compared to
mutual funds.
<h2>LIST OF EQUITY ETFS</h2>
      </p>
      <table className="etf-table">
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
          {Marketdata.map((etf, index) => (
            <tr key={index}>
              <td>{etf.issuer}</td>
              <td className='marketname'>{etf.name}</td>
              <td className='symbolmarket'>{etf.symbol}</td>
              <td>{etf.underlying}</td>
              <td>{etf.launchDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marketable;