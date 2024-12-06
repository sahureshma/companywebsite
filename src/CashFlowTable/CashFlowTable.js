import React, { useState } from "react";
import './CashFlowTable.css';

const cashFlowData = [
  {
    label: "Cash from Operating Activity",
    values: [-347, -113, 24, -199, 94, -437, -294, 974],
    subcategories: [
      { label: "Profit from operations", values: [99, 183, 369, 240, 136, 130, -154, -282] },
      { label: "Receivables", values: [456, -1161, -106, -647, -893, -907, 33, 456] },
      { label: "Inventory", values: [-40, -17, 7, -28, -20, 0, -56, 23] },
      { label: "Payables", values: [-867, 883, -246, 236, 872, 339, -116, 777] },
      { label: "Other WC items", values: [4, -1, 0, 1, 0, 0, 0, 0] },
      { label: "Working capital changes", values: [-447, -296, -345, -438, -42, -568, -139, 1256] },
      { label: "Direct taxes", values: [0, 0, 0, 0, 0, 0, 0, 0] },
      { label: "Other operating items", values: [0, 0, 0, 0, 0, 0, 0, 0] }
    ]
  },
  {
    label: "Cash from Investing Activity",
    values: [-75, -93, -126, -73, -304, 178, 46, -556],
    subcategories: [
      { label: "Fixed assets purchased", values: [0, 0, -128, -64, -31, -60, 0, 0] },
      { label: "Fixed assets sold", values: [0, 92, 0, 2, 28, 3, 16, 0] },
      { label: "Capital WIP", values: [-76, -190, 0, 0, 0, -61, -38, 0] },
      { label: "Investments purchased", values: [0, 0, -2, 0, 0, -0, -0, 0] },
      { label: "Investments sold", values: [0, 3, 0, 2, 2, 1, 0, 0] },
      { label: "Interest received", values: [0, 2, 4, 16, 12, 5, 5, 3] },
      { label: "Other investing items", values: [0, 0, 0, -28, -314, 229, 85, -522] }
    ]
  },
  {
    label: "Cash from Financing Activity",
    values: [468, 364, -19, 285, 198, 247, 241, -322],
    subcategories: [
      { label: "Proceeds from shares", values: [80, 200, 0, 0, 0, 0, 0, 0] },
      { label: "Proceeds from borrowings", values: [40, 47, 32, 0, 250, 148, 264, 0] },
      { label: "Repayment of borrowings", values: [0, 0, 0, -43, 0, 0, 0, -81] },
      { label: "Interest paid fin", values: [-1563, -153, -106, -141, -160, -192, -210, -241] },
      { label: "Share application money", values: [0, 137, 55, 105, 105, 72, 107, 0] },
      { label: "Other financing items", values: [500, 133, 0, 364, 3, 220, 80, -0] }
    ]
  },
  {
    label: "Net Cash Flow",
    values: [45, 158, -121, 13, -12, -12, -6, 96]
  }
];

const CashFlowTable = () => {
  const [isCashOperatingActivity, setCashOperatingActivity] = useState(false);
  const [isCashInvestingActivity, setCashInvestingActivity] = useState(false);
  const [isCashFinancingActivity, setCashFinancingActivity] = useState(false);

  const toggleCashOperatingActivity = () => setCashOperatingActivity(!isCashOperatingActivity);
  const toggleCashInvestingActivity = () => setCashInvestingActivity(!isCashInvestingActivity);
  const toggleCashFinancingActivity = () => setCashFinancingActivity(!isCashFinancingActivity);

  const years = ["Mar 2017", "Mar 2018", "Mar 2019", "Mar 2020", "Mar 2021", "Mar 2022", "Mar 2023", "Mar 2024"];

  return (
    <div><h2 className="cashhead">Cash Flow</h2>
    <p className="cashpara">Consolidated Figures in ₹ Crores / <a>View Standalone</a></p>

    <div className="cash-flow-table">
      
      
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
          {cashFlowData.map((row, index) => (
            <React.Fragment key={index}>
              <tr className={row.label === "Net Cash Flow" ? "bold-row" : ""}>
                <td className={row.subcategories ? "expandable" : ""}>
                  <span style={{ fontWeight: row.label === "Net Cash Flow" ? "bold" : "normal" }}>{row.label}</span>
                  {row.label === "Cash from Operating Activity" && (
                    <span onClick={toggleCashOperatingActivity} className="expand-toggle">
                      {isCashOperatingActivity ? "−" : "+"}
                    </span>
                  )}
                  {row.label === "Cash from Investing Activity" && (
                    <span onClick={toggleCashInvestingActivity} className="expand-toggle">
                      {isCashInvestingActivity ? "−" : "+"}
                    </span>
                  )}
                  {row.label === "Cash from Financing Activity" && (
                    <span onClick={toggleCashFinancingActivity} className="expand-toggle">
                      {isCashFinancingActivity ? "−" : "+"}
                    </span>
                  )}
                </td>
                {row.values.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>

              {(isCashOperatingActivity && row.label === "Cash from Operating Activity" ||
                isCashInvestingActivity && row.label === "Cash from Investing Activity" ||
                isCashFinancingActivity && row.label === "Cash from Financing Activity") &&
                row.subcategories?.map((subRow, subIndex) => (
                  <tr key={subIndex} className="subcategory-row">
                    <td>{subRow.label}</td>
                    {subRow.values.map((subValue, j) => (
                      <td key={j}>{subValue}</td>
                    ))}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
     
    </div>
    </div>
  );
};

export default CashFlowTable;
