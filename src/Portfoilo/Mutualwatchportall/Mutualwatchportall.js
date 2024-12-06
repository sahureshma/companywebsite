import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS

import Navbar from "../../Navbar/Navbar";

const MutualWatchportall= () => {
  const [stockName, setStockName] = useState("");
  const [stockDetails, setStockDetails] = useState([]);
  const [exchange, setExchange] = useState("NSE");
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const [watchlists, setWatchlists] = useState(["Watchlist 01"]); // Manage dynamic watchlists
  const [groupBy, setGroupBy] = useState("sector");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All"); 


  // Dummy stock data
  const stockDatawatchlist = [
    {
      stockName: "Axis Short Term Fund-Regular Plan",
     
      nav1dchange: 29.272, // NAV 1-day change in percentage
      fiftytwoweekhighorlow: "2805 / 2672", // 52-week high and low values
      onemonth: "5.23%", // 1-month change
      threemonths: "3.15%", // 3-month change
      fiveyears: "15.76%", // 5-year growth
      tenyears: "50.25%", // 10-year growth
    },
    {
        stockName: "HDFC Equity Fund-Regular Plan",
        nav1dchange: -12.34,
        fiftytwoweekhighorlow: "1050 / 850",
        onemonth: "-2.14%",
        threemonths: "-1.25%",
        fiveyears: "10.45%",
        tenyears: "30.12%",
      },

  ];

  
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
    const newWatchlistName = `Watchlist ${watchlists.length + 1}`; // Use backticks for template literals
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
  )

  .filter((stock) => {
    if (activeFilter === "Gainers") {
      return parseFloat(stock.threemonths) > 0; // Show positive values
    }
    if (activeFilter === "Losers") {
      return parseFloat(stock.threemonths) < 0; // Show negative values
    }
    return true; // Show all for "All"
  });
  const groupedData = filteredData.reduce((groups, stock) => {
    if (!groups[stock.sector]) {
      groups[stock.sector] = [];
    }
    groups[stock.sector].push(stock);
    return groups;
  }, {});

  return (
    <div>
      <Navbar />
      <h2 className="newwmutual" >
  Mutual Fund Watchlist
</h2>
<div className="networth-tabs" >
<Link to="/portfoliostockaccount">
        <button className="networth-tab" style={{ background: "#24b676", color: "white", marginLeft: "130px" }}>
            Stocks
          </button>
        </Link>
        <Link to="/mutualwatch">
          <button className="networth-tab" style={{ background: "white", color: "black"}}>
            Mutual Fund
          </button>
        </Link>
        <Link to="/goldWatchlistall">
          <button className="networth-tab" style={{ background: "white", color: "black"}}>
            Gold
          </button>
        </Link>
</div>

      <div className="stocksector-watchlist">
        {/* Watchlist Section */}
        <div  >
        <div className="watchlist-management" >
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
        <div className="scheme-exchange-cell">
          <div className="input-groupwatchlist">
            <label htmlFor="stockName">Scheme Name</label>
            <input
              type="text"
              placeholder="Type of search"
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
          </div>
          <button className="add-btnwatchlist" onClick={handleAddStock}>
            + Add
          </button>
        </div>
        </div>
        {/* Stock Table Section */}
        <div className="content-sectorcontainerwatchlist">
        <div className="top-sectionswatchlist"style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
            <div className="filters-sectionwatchlist">
              <span className="filter-labelwatchlist">FILTER:</span>
              <button className= {`filter-buttonwatchlist ${activeFilter === "All" ? "active" : ""}`}
    onClick={() => setActiveFilter("All")}>All</button>
              <button  className={`filter-buttonwatchlist ${activeFilter === "Gainers" ? "active" : ""}`}
    onClick={() => setActiveFilter("Gainers")}>Gainers</button>
              <button className={`filter-buttonwatchlist ${activeFilter === "Losers" ? "active" : ""}`}
    onClick={() => setActiveFilter("Losers")}>Losers</button>
            </div>
            <div className="group-by-sectionwatchlist">
            <label style={{ marginRight: "8px" }}>Group By:</label>
              <input
                type="radio"
                name="groupBywatchlist"
                value="nonewatchlist"
                onClick={() => navigate("/mutualWatchlist")}
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
                onClick={() => navigate("/mutualsectorWatchlist")}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              AMC
              <input
                type="radio"
                name="groupBywatchlist"
                value="mcapwatchlist"
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              Types of Funds
            </div>
          </div>

          <div className="table-containerwatchlist">
            <table className="stock-tablewatchlist">
              <thead>
                <tr>
                <th>Scheme Name</th>
                <th>NAV 1D change</th>
                <th>52 week High/Low</th>
                <th>1 month</th>
                <th>3 months</th>
                <th>5 Years</th>
                <th>10 years</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedData).map((sector) => (
                  <React.Fragment key={sector}>
                    <tr className="sector-headerwatchlist">
                    <td colSpan="7" style={{ paddingRight: "1000px", fontWeight: "bold" }}>
     
      </td>
                    </tr>
                    {groupedData[sector].map((stock, index) => (
                      <tr key={index}>
                        <td >{stock.stockName}</td>
                    <td td style={{ color: parseFloat(stock.threemonths) >= 0 ? "green" : "red" }}>{stock.nav1dchange}</td>
                   
                    <td>{stock.fiftytwoweekhighorlow}</td>
                    <td td style={{ color: parseFloat(stock.threemonths) >= 0 ? "green" : "red" }}>{stock.onemonth}</td>
                    <td td style={{ color: parseFloat(stock.threemonths) >= 0 ? "green" : "red" }}>{stock.threemonths}</td>
                    <td td style={{ color: parseFloat(stock.threemonths) >= 0 ? "green" : "red" }}>{stock.fiveyears}</td>
                    <td td style={{ color: parseFloat(stock.threemonths) >= 0 ? "green" : "red" }}>{stock.tenyears}</td>
                    <td></td>
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

export default MutualWatchportall;