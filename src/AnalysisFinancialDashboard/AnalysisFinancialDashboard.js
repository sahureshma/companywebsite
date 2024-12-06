import React from 'react';
import './AnalysisFinancialDashboard.css';


const FinancialDashboard = () => {
    return (
        <div><h3 className="finanancialh3">Current Financial Position of ITI Ltd.</h3>
        <h2 className="finanancialh2">Key Indicators</h2>
        <div className="financial-container">
            
            <div className="tables">
                {/* Standalone and Consolidated Table */}
                <table className="financialanalysis">
                    <thead>
                        <tr>
                            <th colSpan="1"></th>
                            <th>Standalone</th>
                            <th>Consolidated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sales (TTM)</td>
                            <td>₹1,627 Cr</td>
                            <td>₹1,627 Cr</td>
                        </tr>
                        <tr>
                            <td>PE ratio (TTM)</td>
                            <td>-52.33</td>
                            <td>-52.33</td>
                        </tr>
                        <tr>
                            <td>Basic EPS (TTM)</td>
                            <td>₹-5.93</td>
                            <td>₹-5.93</td>
                        </tr>
                        <tr>
                            <td>Book Value per share</td>
                            <td>₹18.57</td>
                            <td>₹18.57</td>
                        </tr>
                        <tr>
                            <td>P/B ratio</td>
                            <td>17.59</td>
                            <td>17.23</td>
                        </tr>
                        <tr>
                            <td>Reserves</td>
                            <td>₹697 Cr</td>
                            <td>₹788.58 Cr</td>
                        </tr>
                    </tbody>
                </table>

                {/* Market Data Table */}
                <table className="market-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Market Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Today's High/Low</td>
                            <td>₹317.00 / ₹273.00</td>
                        </tr>
                        <tr>
                            <td>52-week High/Low</td>
                            <td>₹384.4 / ₹210.2</td>
                        </tr>
                        <tr>
                            <td>Market cap</td>
                            <td>₹296.70 Cr</td>
                        </tr>
                        <tr>
                            <td>Face Value per share</td>
                            <td>₹10</td>
                        </tr>
                        <tr>
                            <td>Total Debt/Equity</td>
                            <td>1.03</td>
                        </tr>
                        <tr>
                            <td>EV/EBITDA</td>
                            <td>-92.02</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            </div>
        </div>
    );
};

export default FinancialDashboard; /* FinancialTable.css */
