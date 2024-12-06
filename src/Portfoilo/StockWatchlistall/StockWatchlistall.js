import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS

import Navbar from "../../Navbar/Navbar";

const StockWatchlistall = () => {
  const [stockName, setStockName] = useState("");
  const [stockDetails, setStockDetails] = useState([]);
  const [exchange, setExchange] = useState("NSE");
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const [watchlists, setWatchlists] = useState(["Watchlist 01"]); // Manage dynamic watchlists
  const [groupBy, setGroupBy] = useState("sector");
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy stock data
  const stockDatawatchlist = [
    {
      stockName: "Waaree Energies",
      
      livePrice: 2713,
      change: -8.45,
      changePercent: -0.31,
      volume: "10.33L",
      high: 2805,
      low: 2672,
      
    },
    {
        stockName: "HDFC Bank",
      
      livePrice: 1741.55,
      change: 0.35,
      changePercent: 0.02,
      volume: "44.01L",
      high: 1754.3,
      low: 1729.55,
   
    },
    // Add more stock objects here
  ];
  const navigate = useNavigate();
  // Handle stock addition
  const handleAddStock = () => {
    if (stockName.trim() === "") return;

    const newStock = {
      stockName,
      livePrice: (Math.random() * 1000).toFixed(2), // Dummy price
      change: (Math.random() * 10 - 5).toFixed(2), // Dummy change (could be positive or negative)
      changePercent: (Math.random() * 2).toFixed(2), // Dummy percentage
      volume: Math.floor(Math.random() * 10000), // Dummy volume
      high: (Math.random() * 1000).toFixed(2), // Dummy high
      low: (Math.random() * 1000).toFixed(2), // Dummy low
    };

    setStockDetails([...stockDetails, newStock]);
    setStockName(""); // Clear the input after adding
  };

  // Handle adding a new watchlist
  const handleCreateWatchlist = () => {
    const newWatchlistName = `Watchlist ${watchlists.length + 1}`;
    setWatchlists([...watchlists, newWatchlistName]);
  };

  // Toggle dropdown visibility for a specific watchlist
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Handle deleting a watchlist
  const handleDeleteWatchlist = (index) => {
    setWatchlists(watchlists.filter((_, i) => i !== index));
    setActiveDropdown(null); // Close dropdown
  };

  // Handle renaming a watchlist
  const handleRenameWatchlist = (index) => {
    const newName = prompt("Enter the new name for the watchlist:");
    if (newName) {
      setWatchlists(
        watchlists.map((watchlist, i) =>
          i === index ? newName : watchlist
        )
      );
    }
    setActiveDropdown(null); // Close dropdown
  };

  // Function to determine the color for the change value
  const getChangeColor = (change) => {
    return change >= 0 ? "green" : "red";
  };

  // Handle deleting a stock
  const handleDeleteStock = (index) => {
    setStockDetails(stockDetails.filter((_, i) => i !== index));
  };

  // Filters and groups stocks
  const filteredData = stockDatawatchlist.filter((stock) =>
    stock.stockName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedData = filteredData.reduce((groups, stock) => {
    if (!groups[stock.sector]) {
      groups[stock.sector] = [];
    }
    groups[stock.sector].push(stock);
    return groups;
  }, {});
  const filterRoutes = {
    All: "/stockwatchlistall", 
    Gainers: "/stockwatchlistgain", 
    Losers: "/stockwatchlistloss"
  };

  // Handle navigation for filters dynamically
  const handleFilterClick = (filterType) => {
    navigate(filterRoutes[filterType]); // Navigate based on the filter type
  };

  return (
    <div>
      <Navbar />
      <h2 className="newwmutual" style={{ marginLeft: "200px", marginTop: "100px" }}>
  Stock Watchlist
</h2>
<div className="networth-tabs" style={{ marginTop: "40px", paddingTop: "0px" }}>
  <Link to="/portfoliostockaccount">
    <button className="networth-tab" style={{ background: "#24b676", color: "white", marginLeft: "130px" }}>
      Stocks
    </button>
  </Link>
  <Link to="/mutualfirstpage">
    <button className="networth-tab" style={{ background: "white", color: "black" }}>
      Mutual Fund
    </button>
  </Link>
  <Link to="/Portfoliogoldtoppage">
    <button className="networth-tab" style={{ background: "white", color: "black" }}>
      Gold
    </button>
  </Link>
</div>

      <div className="stock-watchlist">
        {/* Watchlist Section */}
        <div className="watchlist-management">
          {watchlists.map((watchlist, index) => (
            <div className="watchlist-item" key={index}>
              <input
                type="radio"
                name="watchlist"
                defaultChecked={index === 0}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              <label className="watchlist-label">{watchlist}</label>

              <button
                className="menu-iconwatchlist"
                onClick={() => toggleDropdown(index)}
              >
                ⋮
              </button>
              {activeDropdown === index && (
                <div className="menu-dropdownwatchlist">
                  <button
                    className="menu-itemwatchlist"
                    onClick={() => handleRenameWatchlist(index)}
                  >
                    Rename
                  </button>
                  <button
                    className="menu-itemwatchlist"
                    onClick={() => handleDeleteWatchlist(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
          <button className="create-watchlist" onClick={handleCreateWatchlist}>
            + Create Watchlist
          </button>
        </div>

        <h2 style={{marginLeft:"10px",fontSize:"19px"}}>Add Watchlist</h2>
        {/* Input Section */}
        <div className="watchlist-header">
          <div className="input-groupwatchlist">
            <label htmlFor="stockName">Stock Name</label>
            <input
              type="text"
              placeholder="Enter Stock Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="input-groupwatchlist">
            <label htmlFor="exchangewatchlist">Exchange</label>
            <input
    id="exchange"
    type="text"
    value="NSE"
    readOnly
    style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc",width:"50px" }} // Optional styling for non-editable input
  />
          </div>
          <button className="add-btnwatchlist" onClick={handleAddStock}>
            + Add
          </button>
        </div>

        {/* Stock Table Section */}
        <div className="content-containerwatchlist">
        <div className="top-sectionswatchlist"style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
            <div className="filters-sectionwatchlist">
              <span className="filter-labelwatchlist">FILTER:</span>
              <button
          className="filter-buttonwatchlist"
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        <button
          className="filter-buttonwatchlist"
          onClick={() => handleFilterClick("Gainers")}
        >
          Gainers
        </button>
        <button
          className="filter-buttonwatchlist"
          onClick={() => handleFilterClick("Losers")}
        >
          Losers
        </button>
            </div>
            <div className="group-by-sectionwatchlist">
            <label style={{ marginRight: "8px" }}>Group By:</label>
            <input
                type="radio"
                name="groupBywatchlist"
                value="nonewatchlist"
                onClick={() => navigate("/stockWatchlist")}
                defaultChecked
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              None
              <input
                type="radio"
                name="groupBywatchlist"
                value="sectorwatchlist"
                onClick={() => navigate("/stockwatchlistsector")}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              Sector
              <input
                type="radio"
                name="groupBywatchlist"
                value="sectorwatchlist"
                onClick={() => navigate("/stockwatchlistmcap")}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              M-Cap
            </div>
          </div>

          <div className="table-containerwatchlist">
            <table className="stock-tablewatchlist">
              <thead>
                <tr>
                  <th>Stock Name</th>
                  <th>Live Price</th>
                  <th>Change</th>
                  <th>Change %</th>
                  <th>Volume</th>
                  <th>Today's High</th>
                  <th>Today's Low</th>
                </tr>
              </thead>
              <tbody>
              {Object.keys(groupedData).map((sector) => (
  <React.Fragment key={sector}>
    {groupedData[sector].map((stock, index) => (
      <tr key={index}>
        <td>{stock.stockName}</td>
        <td>{stock.livePrice}</td>
        <td style={{ color: getChangeColor(stock.change) }}>
          {stock.change}
        </td>
        <td>{stock.changePercent}</td>
        <td>{stock.volume}</td>
        <td>{stock.high}</td>
        <td>{stock.low}</td>
      </tr>
    ))}
  </React.Fragment>
))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockWatchlistall;
