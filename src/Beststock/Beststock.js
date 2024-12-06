import React, { useState } from "react";
import "./Beststock.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import stocks from '../stockData'; // Ensure stock data is correctly imported
import Navbar from "../Navbar/Navbar";

function Beststock() {
  const [visibleStocks, setVisibleStocks] = useState();
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortedStocks = () => {
    if (!sortConfig.key) return stocks;

    const sortedStocks = [...stocks];
    sortedStocks.sort((a, b) => {
      let valA = a[sortConfig.key];
      let valB = b[sortConfig.key];

      if (sortConfig.key === "highLow") {
        const [highA, lowA] = valA.split("/").map(parseFloat);
        const [highB, lowB] = valB.split("/").map(parseFloat);

        valA = sortConfig.subKey === "high" ? highA : lowA;
        valB = sortConfig.subKey === "high" ? highB : lowB;
      } else {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }

      if (isNaN(valA) || isNaN(valB)) return 0;

      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    });

    return sortedStocks;
  };

  const filteredStocks = getSortedStocks(); // Add filters if required

  const showMoreStocks = () => {
    setVisibleStocks((prev) => prev + 5);
  };

  const renderCaretIcons = (key) => (
    <div className="caret-icons">
      <FaCaretUp className={sortConfig.key === key && sortConfig.direction === "asc" ? "active" : ""} />
      <FaCaretDown className={sortConfig.key === key && sortConfig.direction === "desc" ? "active" : ""} />
    </div>
  );

  return (
    <div className="stock-table-container">
      <Navbar />
      <div className="header">
        <h2>Best Stocks</h2>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Company</th>
            <th onClick={() => handleSort("ltp")}><div className="header-title-updown">
              LTP (₹)
              {renderCaretIcons("ltp")}
              </div>
            </th>
            <th onClick={() => handleSort("change")}><div className="header-title-updown">
              Price Change %
              {renderCaretIcons("change")}
              </div>
            </th>
            <th onClick={() => handleSort("marketCap")}><div className="header-title-updown">
              Market Cap (Cr)
              {renderCaretIcons("marketCap")}
              </div>
            </th>
            <th onClick={() => handleSort("highLow")}><div className="header-title-updown">
              52W High (₹)
              {renderCaretIcons("highLow")}
              </div>
            </th>
            <th onClick={() => handleSort("highLow")}><div className="header-title-updown">
              52W Low (₹)
              {renderCaretIcons("highLow")}
              </div>
            </th>
            <th onClick={() => handleSort("roe")}><div className="header-title-updown">
              ROE
              {renderCaretIcons("roe")}
              </div>
            </th>
            <th onClick={() => handleSort("pe")}><div className="header-title-updown">
              P/E
              {renderCaretIcons("pe")}
              </div>
            </th>
            <th onClick={() => handleSort("pbv")}><div className="header-title-updown">
              P/BV
              {renderCaretIcons("pbv")}
              </div>
            </th>
            <th onClick={() => handleSort("fiveYSalesGrowth")}><div className="header-title-updown">
              5Y Sales Growth
              {renderCaretIcons("fiveYSalesGrowth")}
              </div>
            </th>
            <th onClick={() => handleSort("fiveYProfitGrowth")}><div className="header-title-updown">
              5Y Profit Growth
              {renderCaretIcons("fiveYProfitGrowth")}
              </div>
            </th>
            <th>Clarification</th>
          </tr>
        </thead>
        <tbody>
  {filteredStocks.slice(0, visibleStocks).map((stock, idx) => (
    <tr key={idx}>
      <td>
        {stock.clarification?.url ? (
          <a href={stock.clarification.url} target="_blank" rel="noopener noreferrer">
            {stock.company}
          </a>
        ) : (
          stock.company
        )}
      </td>
      <td>{stock.ltp}</td>
      <td className={parseFloat(stock.change) > 0 ? "positive" : "negative"}>{stock.change}%</td>
      <td>{stock.marketCap}</td>
      <td>{stock.highLow.split("/")[0]}</td>
      <td>{stock.highLow.split("/")[1]}</td>
      <td>{stock.roe}</td>
      <td>{stock.pe}</td>
      <td>{stock.pbv}</td>
      <td>{stock.fiveYSalesGrowth}</td>
      <td>{stock.fiveYProfitGrowth}</td>
      <td>
        {stock.clarification?.url ? (
          <a href={stock.clarification.url} target="_blank" rel="noopener noreferrer">
            Know More
          </a>
        ) : (
          "N/A"
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>

      {visibleStocks < filteredStocks.length && (
        <div className="show-more-button">
          <button onClick={showMoreStocks}>Show More</button>
        </div>
      )}
    </div>
  );
}

export default Beststock;