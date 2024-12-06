import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"; // Import FontAwesome CSS
import "./StockWatchlistnone.css";
import Navbar from "../../Navbar/Navbar";

const StockWatchlist = () => {
  const [stockName, setStockName] = useState("");
  const [stockDetails, setStockDetails] = useState([]);
  const [exchange, setExchange] = useState("NSE");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [watchlists, setWatchlists] = useState(["Watchlist 01"]);
  const navigate = useNavigate();

  // Handle stock addition
  const handleAddStock = () => {
    if (stockName.trim() === "") return alert("Stock name cannot be empty!");

    // Check for duplicate stocks
    if (stockDetails.some((stock) => stock.stockName === stockName)) {
      return alert("This stock is already in your watchlist.");
    }

    const newStock = {
      stockName,
      livePrice: (Math.random() * 1000).toFixed(2),
      change: (Math.random() * 10 - 5).toFixed(2),
      changePercent: (Math.random() * 2).toFixed(2),
      volume: Math.floor(Math.random() * 10000),
      high: (Math.random() * 1000).toFixed(2),
      low: (Math.random() * 1000).toFixed(2),
    };

    setStockDetails([...stockDetails, newStock]);
    setStockName(""); // Clear input
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
    if (window.confirm("Are you sure you want to delete this watchlist?")) {
      setWatchlists(watchlists.filter((_, i) => i !== index));
      setActiveDropdown(null);
    }
  };

  // Handle renaming a watchlist
  const handleRenameWatchlist = (index) => {
    const newName = prompt("Enter the new name for the watchlist:");
    if (newName && newName.trim() !== "") {
      setWatchlists(
        watchlists.map((watchlist, i) => (i === index ? newName : watchlist))
      );
    }
    setActiveDropdown(null);
  };

  // Determine the color for the change value
  const getChangeColor = (change) => {
    return change >= 0 ? "green" : "red";
  };

  // Handle deleting a stock
  const handleDeleteStock = (index) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      setStockDetails(stockDetails.filter((_, i) => i !== index));
    }
  };
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
        <Link to="/stockwatchlist">
        <button className="networth-tab" style={{ background: "#24b676", color: "white", marginLeft: "130px" }}>
            Stocks
          </button>
        </Link>
       
      </div>
      <div>
        <div className="stock-watchlist">
          {/* Watchlist Section */}
          <div className="watchlist-management">
            {watchlists.map((watchlist, index) => (
              <div className="watchlist-item" key={index}>
                <input
                  type="radio"
                  name="watchlist"
                  defaultChecked={index === 0}
                  style={{ width: "14px", height: "14px", accentColor: "#24b676" }}
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
                id="stockName"
                type="text"
                placeholder="Enter stock name..."
                value={stockName}
                onChange={(e) => setStockName(e.target.value)}
              />
            </div>

            <div className="input-groupwatchlist">
              <label htmlFor="exchange">Exchange</label>
              <input
                id="exchange"
                type="text"
                value="NSE"
                readOnly
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc", width: "50px" }}
              />
            </div>

            <button className="add-btnwatchlist" onClick={handleAddStock}>
              + Add
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="content-containerwatchlist" style={{ marginLeft:'180px' }}>
        <div className="top-sectionswatchlist"style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
            {/* Filters Section */}
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

            {/* Group By Section */}
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

          {/* Stock Table */}
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stockDetails.length === 0 ? (
                  <tr>
                    <td colSpan="8">No data found</td>
                  </tr>
                ) : (
                  stockDetails.map((stock, index) => (
                    <tr key={index}>
                      <td>{stock.stockName}</td>
                      <td>{stock.livePrice}</td>
                      <td style={{ color: getChangeColor(stock.change) }}>
                        {stock.change >= 0 ? `+${stock.change}` : stock.change}
                      </td>
                      <td>{stock.changePercent}%</td>
                      <td>{stock.volume}</td>
                      <td>{stock.high}</td>
                      <td>{stock.low}</td>
                      <td>
                        <button
                          className="delete-btnwatchlist"
                          onClick={() => handleDeleteStock(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockWatchlist;
