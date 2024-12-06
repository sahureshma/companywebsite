import React from 'react';
import './EarningsReport.css';
import ShareholdingChart from '../CircleChart/CircleChart';


const QuarterlyEarningsReport = () => {
    return (
        <div>
      <h2 className="earningheader"style={{ marginRight: "520px" }}>Quarterly Earnings Report</h2>
      <p className="earningpara">
      Consolidated Figures in ₹ Crores / <a>View Standalone</a>
    </p>

        <div className="earnings-report">
            
            <table className="earnings-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Mar 2022</th>
                        <th>Jun 2022</th>
                        <th>Sep 2022</th>
                        <th>Dec 2022</th>
                        <th>Mar 2023</th>
                        <th>Jun 2023</th>
                        <th>Sep 2023</th>
                        <th>Dec 2023</th>
                        <th>Mar 2024</th>
                        <th>Jun 2024</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Quarterly Data Rows */}
                    <tr>
                        <td>Sales (₹ Cr.)</td>
                        <td>1,142</td><td>166</td><td>198</td><td>256</td><td>775</td><td>157</td><td>246</td><td>259</td><td>601</td><td>520</td>
                    </tr>
                    <tr>
                        <td>Expenses</td>
                        <td>944</td><td>230</td><td>246</td><td>291</td><td>781</td><td>206</td><td>299</td><td>302</td><td>775</td><td>533</td>
                    </tr>
                    <tr>
                        <td>Operating Profit</td>
                        <td>197</td><td>-64</td><td>-49</td><td>-35</td><td>-6</td><td>-49</td><td>-53</td><td>-43</td><td>-174</td><td>-13</td>
                    </tr>
                    <tr>
                        <td>OPM %</td>
                        <td>17%</td><td>-38%</td><td>-25%</td><td>-14%</td><td>-1%</td><td>-31%</td><td>-21%</td><td>-17%</td><td>-29%</td><td>-2%</td>
                    </tr>
                    <tr>
                        <td>Other Income</td>
                        <td>226</td><td>22</td><td>10</td><td>10</td><td>10</td><td>13</td><td>10</td><td>13</td><td>9</td><td>-11</td>
                    </tr>
                    <tr>
                        <td>Interest</td>
                        <td>52</td><td>46</td><td>50</td><td>51</td><td>63</td><td>55</td><td>69</td><td>57</td><td>60</td><td>53</td>
                    </tr>
                    <tr>
                        <td>Depreciation</td>
                        <td>13</td><td>12</td><td>12</td><td>12</td><td>13</td><td>12</td><td>13</td><td>14</td><td>14</td><td>14</td>
                    </tr>
                    <tr>
                        <td>Profit before tax</td>
                        <td>357</td><td>-99</td><td>-100</td><td>-87</td><td>-73</td><td>-103</td><td>-126</td><td>-102</td><td>-239</td><td>-91</td>
                    </tr>
                    <tr>
                        <td>Tax (%)</td>
                        <td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td>
                    </tr>
                    <tr>
                        <td>Net Profit</td>
                        <td>357</td><td>-99</td><td>-100</td><td>-87</td><td>-73</td><td>-103</td><td>-126</td><td>-102</td><td>-239</td><td>-91</td>
                    </tr>
                    <tr>
                        <td>EPS (₹)</td>
                        <td>3.83</td><td>-1.06</td><td>-1.06</td><td>-0.92</td><td>-0.77</td><td>-1.07</td><td>-1.31</td><td>-1.06</td><td>-2.49</td><td>-0.95</td>
                    </tr>
                </tbody>
            </table>
            
            <div className="shareholding-section">
                
                <div className="shareholding-chart">
               
                    <ShareholdingChart/> {/* Use CircleChart component */}
                    
                </div>
                <div className="shareholding-history">
                    <h3>Shareholding History</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Holders</th>
                                <th>FY 2024</th>
                                <th>FY 2023</th>
                                <th>FY 2022</th>
                                <th>FY 2021</th>
                                <th>FY 2020</th>
                                <th>FY 2019</th>
                                <th>FY 2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Promoters</td><td>90.00%</td><td>90.3%</td><td>90.2%</td><td>90.6%</td><td>90.3%</td><td>90.0%</td><td>90.0%</td>
                            </tr>
                            <tr>
                                <td>Foreign Institutions</td><td>0.04%</td><td>0.04%</td><td>0.08%</td><td>0.04%</td><td>0.02%</td><td>0.02%</td><td>0.00%</td>
                            </tr>
                            <tr>
                                <td>DII</td><td>0.01%</td><td>0.01%</td><td>0.00%</td><td>0.00%</td><td>0.00%</td><td>0.02%</td><td>0.03%</td>
                            </tr>
                            <tr>
                                <td>Retail & Others</td><td>9.92%</td><td>9.73%</td><td>9.95%</td><td>9.88%</td><td>9.66%</td><td>9.97%</td><td>7.31%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           
            </div>
        </div>
    );
};
export default QuarterlyEarningsReport;