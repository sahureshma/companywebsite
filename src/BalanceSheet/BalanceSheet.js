import React, { useState } from 'react';
import './BalanceSheet.css';

const BalanceSheet = () => {
  // State to toggle subcategories for "Borrowings", "Other Liabilities", "Fixed Assets", and "Other Assets"
  const [isBorrowingsExpanded, setBorrowingsExpanded] = useState(false);
  const [isOtherLiabilitiesExpanded, setOtherLiabilitiesExpanded] = useState(false);
  const [isFixedAssetsExpanded, setFixedAssetsExpanded] = useState(false);
  const [isOtherAssetsExpanded, setOtherAssetsExpanded] = useState(false); // New state for "Other Assets"

  // Main data with Fixed Assets subcategories
  const data = [
    {
      category: "Equity Capital",
      values: [560, 760, 897, 925, 934, 934, 950, 961]
    },
    {
      category: "Reserves",
      values: [540, 905, 936, 1395, 1511, 1674, 1425, 823]
    },
    {
      category: "Borrowings",
      values: [1524, 1226, 1259, 1216, 1465, 1613, 1877, 1796],
      subcategories: [
        { category: "Long term Borrowings", values: [300, 300, 180, 300, 240, 180, 180, 120] },
        { category: "Short term Borrowings", values: [879, 926, 959, 1036, 1164, 1372, 1696, 1675] },
        { category: "Lease Liabilities", values: [0, 0, 0, 0, 1, 1, 1, 1] },
        { category: "Other Borrowings", values: [344, 0, 0, 0, 0, 0, 0, 0] }
      ]
    },
    {
      category: "Other Liabilities",
      values: [2965, 4189, 3943, 4225, 5043, 5394, 5280, 6060],
      subcategories: [
        { category: "Trade Payables", values: [1976, 2262, 1805, 2183, 1885, 1690, 1377, 1557] },
        { category: "Advance from Customers", values: [223, 679, 549, 566, 1032, 1034, 966, 1965] },
        { category: "Other Liability Items", values: [766, 1249, 1589, 1476, 2126, 2670, 2908, 2537] }
      ]
    },
    {
      category: "Total Liabilities",
      values: [5588, 7081, 7034, 7761, 8953, 9615, 9531, 9640]
    },
    {
      category: "Fixed Assets",
      values: [2506, 2620, 2695, 2693, 2702, 2729, 2752, 2732],
      subcategories: [
        { category: "Land", values: [2260, 2248, 2219, 2219, 2218, 2217, 2217, 2217] },
        { category: "Building", values: [102, 113, 112, 131, 146, 147, 150, 150] },
        { category: "Plant Machinery", values: [111, 236, 340, 361, 394, 448, 507, 509] },
        { category: "Equipments", values: [2, 2, 3, 3, 3, 4, 6, 6] },
        { category: "Furniture n fittings", values: [0, 0, 1, 1, 1, 1, 1, 2] },
        { category: "Vehicles", values: [0, 1, 1, 1, 2, 2, 3, 3] },
        { category: "Other fixed assets", values: [49, 62, 98, 99, 99, 121, 131, 143] }
      ]
    },
    {
      category: "CWIP",
      values: [102, 149, 165, 189, 169, 150, 139, 142]
    },
    {
      category: "Investments",
      values: [41, 38, 40, 38, 36, 35, 35, 35]
    },
    {
      category: "Other Assets",
      values: [2939, 4274, 4135, 4841, 6046, 6701, 6605, 6731],
      subcategories: [
        { category: "Inventories", values: [177, 192, 185, 213, 234, 233, 290, 264] },
        { category: "Trade receivables", values: [2196, 3080, 2657, 2761, 2552, 2730, 2429, 2441] },
        { category: "Cash Equivalents", values: [166, 325, 204, 245, 548, 306, 215, 832] },
        { category: "Loans n Advances", values: [0, 41, 0, 0, 0, 0, 0, 0] },
        { category: "Other asset items", values: [400, 637, 1090, 1622, 2712, 3431, 3671, 3193] }
      ]
    },
    {
      category: "Total Assets",
      values: [5588, 7081, 7034, 7761, 8953, 9615, 9531, 9640]
    }
  ];

  const years = ["Mar 2017", "Mar 2018", "Mar 2019", "Mar 2020", "Mar 2021", "Mar 2022", "Mar 2023", "Mar 2024"];

  // Toggle functions for each expandable category
  const toggleBorrowings = () => setBorrowingsExpanded(!isBorrowingsExpanded);
  const toggleOtherLiabilities = () => setOtherLiabilitiesExpanded(!isOtherLiabilitiesExpanded);
  const toggleFixedAssets = () => setFixedAssetsExpanded(!isFixedAssetsExpanded);
  const toggleOtherAssets = () => setOtherAssetsExpanded(!isOtherAssetsExpanded); // Toggle for "Other Assets"

  return (
    <div>  <h2 className='sheethead'>Balance Sheet</h2>
      <p className='sheetpara'>Consolidated Figures in ₹ Crores / <a className='sheeta'href="#">View Standalone</a></p>
    <div className="balance-sheet">
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
            <React.Fragment key={index}>
              {/* Main row */}
              <tr className={row.category === "Total Liabilities" || row.category === "Total Assets" ? "highlight-row" : ""}>
                <td className={row.subcategories ? "expandable" : ""}>
                  {row.category}
                  {row.category === "Borrowings" && (
                    <span onClick={toggleBorrowings} className="expand-toggle">
                      {isBorrowingsExpanded ? "−" : "+"}
                    </span>
                  )}
                  {row.category === "Other Liabilities" && (
                    <span onClick={toggleOtherLiabilities} className="expand-toggle">
                      {isOtherLiabilitiesExpanded ? "−" : "+"}
                    </span>
                  )}
                  {row.category === "Fixed Assets" && (
                    <span onClick={toggleFixedAssets} className="expand-toggle">
                      {isFixedAssetsExpanded ? "−" : "+"}
                    </span>
                  )}
                  {row.category === "Other Assets" && (
                    <span onClick={toggleOtherAssets} className="expand-toggle">
                      {isOtherAssetsExpanded ? "−" : "+"}
                    </span>
                  )}
                </td>
                {row.values.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>

              {/* Render subcategories if expanded */}
              {(isBorrowingsExpanded && row.category === "Borrowings" ||
                isOtherLiabilitiesExpanded && row.category === "Other Liabilities" ||
                isFixedAssetsExpanded && row.category === "Fixed Assets" ||
                isOtherAssetsExpanded && row.category === "Other Assets") &&
                row.subcategories?.map((subRow, subIndex) => (
                  <tr key={subIndex} className="subcategory-row">
                    <td>{subRow.category}</td>
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

export default BalanceSheet;
