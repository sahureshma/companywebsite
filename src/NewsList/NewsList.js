import React from "react";
import "./NewsList.css";


const newsData = [
  { date: "12 Nov 2024", title: "Share market update: Most active stocks of the day in terms of traded value" },
  { date: "12 Nov 2024", title: "Share market update: Most active stocks of the day in terms of total traded value" },
  { date: "11 Nov 2024", title: "Share market update: Most active stocks in today's market in terms of volume" },
  { date: "11 Nov 2024", title: "Sensex, Nifty end choppy trade on flat notes weighed by weak earnings and foreign outflows" },
  { date: "11 Nov 2024", title: "Share market update: Most active stocks of the day in terms of total traded value" },
  { date: "09 Nov 2024", title: "37 smallcap stocks offered double-digit weekly returns in bearish market" },
  { date: "08 Nov 2024", title: "ITI led consortium emerges as L1 for BharatNet Phase-3 Project in Himachal Pradesh" },
  { date: "08 Nov 2024", title: "Share market update: Most active stocks of the day in terms of traded value" },
  { date: "08 Nov 2024", title: "ITI Ltd shares zoom 9% after emerging as L1 bidder for Rs 3,000 crore project" }
];

const NewsList = () => {
  return (
    <div className="news-list">
        
      <h2>ITI Ltd. News</h2>
      <ul>
        {newsData.map((item, index) => (
          <li key={index} className="news-item">
            <span className="news-date">{item.date}</span>
            <span className="news-title">{item.title}</span>
          </li>
        ))}
      </ul>
     
    </div>
    
  );
};

export default NewsList;
