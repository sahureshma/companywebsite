import React from "react";
import "./RatioTable.css";


const RatioTable = () => {
  const data = [
    { label: "Debtor Days", values: [525, 762, 581, 490, 394, 536, 635, 705] },
    { label: "Inventory Days", values: [110, 126, 114, 167, 196, 118, 261, 207] },
    { label: "Days Payable", values: [1228, 1482, 1109, 1705, 1578, 855, 1242, 1222] },
    { label: "Cash Conversion Cycle", values: [-594, -594, -414, -1049, -988, -202, -345, -309] },
    { label: "Working Capital Days", values: [-73, -1, 64, 66, 49, 234, 340, 15] },
    { label: "ROCE %", values: ["-", "14%", "7%", "9%", "5%", "8%", "-4%", "-8%"] },
  ];

  const years = ["Mar 2017", "Mar 2018", "Mar 2019", "Mar 2020", "Mar 2021", "Mar 2022", "Mar 2023", "Mar 2024"];

  return (
    <div>
      <h2 className="ratioheader"style={{ marginRight: "520px" }}>Ratios</h2>
      <p className="ratiopara">
      Consolidated Figures in ₹ Crores / <a>View Standalone</a>
    </p>
    <div className="ratio-table">
   
      <table>
        <thead>
          <tr>
            <th></th>
            {years.map((year, index) => (
              <th key={index}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className={row.label === "Cash Conversion Cycle" ? "highlighted" : ""}>{row.label}</td>
              {row.values.map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
    </div>
  );
};

export default RatioTable;
