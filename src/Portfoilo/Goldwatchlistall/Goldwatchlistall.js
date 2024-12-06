import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
const GoldWatchportall = () => {
  const [stockName, setStockName] = useState("");
  const [stockDetails, setStockDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [watchlists, setWatchlists] = useState(["Watchlist 01"]);
  const navigate = useNavigate();

  const [stockDatawatchlist, setStockDatawatchlist] = useState([
    {
      stockName: "Gold Petal",
      livePrice: 7841.0,
      change: 0.1,
      changePercent: "0.1%",
      volume: 9.92,
      high: 7864.0,
      low: 7798.0,
      openInterest: "10350.0 (16.5%)",
    },
    {
      stockName: "Gold MCX",
      livePrice: 78475.0,
      change: 0.1,
      changePercent: "0.1%",
      volume: 3840,
      high: 78475.0,
      low: 77781.0,
      openInterest: "12901.0 (29.5%)",
    },
  ]);
  

  const handleAddStock = () => {
    if (!stockName.trim()) return;

    const newStock = {
      stockName,
      livePrice: (Math.random() * 1000).toFixed(2),
      change: (Math.random() * 10 - 5).toFixed(2),
      changePercent: `${(Math.random() * 2).toFixed(2)}%`,
      volume: Math.floor(Math.random() * 10000),
      high: (Math.random() * 1000).toFixed(2),
      low: (Math.random() * 1000).toFixed(2),
      openInterest: `${Math.floor(Math.random() * 15000)} (${(Math.random() * 20).toFixed(1)}%)`,
    };

    setStockDetails([...stockDetails, newStock]);
    setStockName("");
  };
  const handleCreateWatchlist = () => {
    const newWatchlistName = `Watchlist ${watchlists.length + 1}`;
    setWatchlists([...watchlists, newWatchlistName]);
  };
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
  
  const handleDeleteStock = (indexToDelete, fromInitialList) => {
    if (fromInitialList) {
      // Update the stockDatawatchlist immutably
      const updatedStockDatawatchlist = stockDatawatchlist.filter(
        (_, index) => index !== indexToDelete
      );
      setStockDatawatchlist(updatedStockDatawatchlist); // Move stockDatawatchlist to state
    } else {
      // Update the dynamically added list
      setStockDetails(stockDetails.filter((_, index) => index !== indexToDelete));
    }
  };

  const getChangeColor = (change) => (change >= 0 ? "green" : "red");

  const filteredData = [
    ...stockDatawatchlist.map((stock, index) => ({ ...stock, isInitial: true, index })),
    ...stockDetails.map((stock, index) => ({ ...stock, isInitial: false, index })),
  ]
    .filter((stock) =>
      stock.stockName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((stock) => {
      if (activeFilter === "Gainers") return stock.change > 0;
      if (activeFilter === "Losers") return stock.change < 0;
      return true;
    });

  return (
    <div>
      <Navbar />
      <h2 className="newwmutual">Gold Watchlist</h2>
      <div className="networth-tabs">
        <Link to="/stockWatchlist">
          <button className="networth-tab" style={{ background: "white", color: "black" }}>
            Stocks
          </button>
        </Link>
        <Link to="/mutualWatchlist">
          <button className="networth-tab" style={{ background: "white", color: "black" }}>
            Mutual Fund
          </button>
        </Link>
        <Link to="/goldWatchlistall">
          <button className="networth-tab" style={{ background: "#24b676", color: "white" }}>
            Gold
          </button>
        </Link>
      </div>

      <div className="stock-watchlist">
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
       
        <h2 style={{ marginLeft:"20px",fontSize:"19px"}}>Add Watchlist</h2>
        <div className="watchlist-header">
          <div className="scheme-exchange-cell">
            <div className="input-groupwatchlist">
              <label htmlFor="stockName">Commodity</label>
              <input
                type="text"
                placeholder="Enter Stock Name"
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
    style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc",width:"50px" }} // Optional styling for non-editable input
  />
</div>
          </div>
          <button className="add-btnwatchlist" onClick={handleAddStock}>
            + Add
          </button>
        </div>
      </div>

      <div className="content-containerwatchlist">
        <div className="table-containerwatchlist">
          <table className="stock-tablewatchlist">
            <thead>
              <tr>
                <th>Particular</th>
                <th>Live Price</th>
                <th>Change</th>
                <th>Change %</th>
                <th>Volume</th>
                <th>Today's H/L</th>
                <th>Open Interest</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((stock) => (
                <tr key={stock.index}>
                  <td>{stock.stockName}</td>
                  <td>{stock.livePrice}</td>
                  <td style={{ color: getChangeColor(stock.change) }}>{stock.change}</td>
                  <td>{stock.changePercent}</td>
                  <td>{stock.volume}</td>
                  <td>
                    <span style={{ color: "green" }}>{stock.high}</span> /{" "}
                    <span style={{ color: "red" }}>{stock.low}</span>
                  </td>
                  <td>
                    {stock.openInterest.split("(")[0]}{" "}
                    <span style={{ color: "green" }}>
                      ({stock.openInterest.split("(")[1]})
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteStock(stock.index, stock.isInitial)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      <RiDeleteBin6Line style={{color:"grey"}} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoldWatchportall;