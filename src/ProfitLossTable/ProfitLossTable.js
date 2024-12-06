import React from 'react';
import './ProfitLossTable.css';

const ProfitLossTable = () => {
  return (
    <div><h2 className="profitlosshead">Profit & Loss</h2>
    <p className="profitlosspara">Consolidated Figures in ₹ Crores / <a className="profit">View Standalone</a></p>
    <div className="profit-loss-container">
      <table className="profit-loss-table">
        <thead>
          <tr>
            <th> </th>
            <th>Mar 2017</th>
            <th>Mar 2018</th>
            <th>Mar 2019</th>
            <th>Mar 2020</th>
            <th>Mar 2021</th>
            <th>Mar 2022</th>
            <th>Mar 2023</th>
            <th>Mar 2024</th>
            <th>TTM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales (₹ Cr.)</td>
            <td>1,528</td>
            <td>1,475</td>
            <td>1,668</td>
            <td>2,059</td>
            <td>2,362</td>
            <td>1,861</td>
            <td>1,395</td>
            <td>1,264</td>
            <td>1,627</td>
          </tr>
          <tr>
            <td>Expenses</td>
            <td>1,633</td>
            <td>1,394</td>
            <td>1,769</td>
            <td>1,914</td>
            <td>2,313</td>
            <td>1,753</td>
            <td>1,549</td>
            <td>1,582</td>
            <td>1,910</td>
          </tr>
          <tr>
            <td>Operating Profit</td>
            <td>-105</td>
            <td>81</td>
            <td>-100</td>
            <td>144</td>
            <td>50</td>
            <td>107</td>
            <td>-154</td>
            <td>-318</td>
            <td>-283</td>
          </tr>
          <tr>
            <td>OPM %</td>
            <td>-7%</td>
            <td>6%</td>
            <td>-6%</td>
            <td>7%</td>
            <td>2%</td>
            <td>6%</td>
            <td>-11%</td>
            <td>-25%</td>
            <td>-17%</td>
          </tr>
          <tr>
            <td>Other Income</td>
            <td>541</td>
            <td>327</td>
            <td>336</td>
            <td>184</td>
            <td>161</td>
            <td>255</td>
            <td>53</td>
            <td>43</td>
            <td>21</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>153</td>
            <td>153</td>
            <td>106</td>
            <td>141</td>
            <td>160</td>
            <td>192</td>
            <td>210</td>
            <td>241</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Depreciation</td>
            <td>17</td>
            <td>25</td>
            <td>37</td>
            <td>42</td>
            <td>42</td>
            <td>51</td>
            <td>50</td>
            <td>53</td>
            <td>55</td>
          </tr>
          <tr>
            <td>Profit before tax</td>
            <td>266</td>
            <td>231</td>
            <td>93</td>
            <td>146</td>
            <td>9</td>
            <td>119</td>
            <td>-360</td>
            <td>-569</td>
            <td>-557</td>
          </tr>
          <tr>
            <td>Tax (%)</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Net Profit</td>
            <td>266</td>
            <td>231</td>
            <td>93</td>
            <td>146</td>
            <td>9</td>
            <td>119</td>
            <td>-360</td>
            <td>-569</td>
            <td>-557</td>
          </tr>
          <tr>
            <td>EPS (₹)</td>
            <td>4.76</td>
            <td>3.03</td>
            <td>1.03</td>
            <td>1.58</td>
            <td>0.10</td>
            <td>1.27</td>
            <td>-3.79</td>
            <td>-5.92</td>
            <td>-5.80</td>
          </tr>
          <tr>
            <td>Dividend Payout (%)</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
        </tbody>
      </table>

      <div className="stats-container">
     

<div class="stat-box">
  <p>Compounded Sales Growth</p>
  <p><span class="year">10 Years:</span> <span class="percentage">% </span></p>
  <p><span class="year">5 Years:</span> <span class="percentage">-5%</span></p>
  <p><span class="year">3 Years:</span> <span class="percentage">-19%</span></p>
  <p><span class="year">TTM:</span> <span class="percentage">17%</span></p>
</div>

<div class="stat-box">
  <p>Compounded Profit Growth</p>
  <p><span class="year">10 Years:</span> <span class="percentage">% </span></p>
  <p><span class="year">5 Years:</span> <span class="percentage">% </span></p>
  <p><span class="year">3 Years:</span> <span class="percentage">% </span></p>
  <p><span class="year">TTM:</span> <span class="percentage">-46%</span></p>
</div>

<div class="stat-box">
  <p>Stock Price CAGR</p>
  <p><span class="year">10 Years:</span> <span class="percentage">26%</span></p>
  <p><span class="year">5 Years:</span> <span class="percentage">28%</span></p>
  <p><span class="year">3 Years:</span> <span class="percentage">36%</span></p>
  <p><span class="year">1 Year:</span> <span class="percentage">11%</span></p>
</div>

<div class="stat-box">
  <p>Return on Equity</p>
  <p><span class="year">10 Years:</span> <span class="percentage">% </span></p>
  <p><span class="year">5 Years:</span> <span class="percentage">-6%</span></p>
  <p><span class="year">3 Years:</span> <span class="percentage">-11%</span></p>
  <p><span class="year">Last Year:</span> <span class="percentage">-27%</span></p>
</div>

      </div>
     
     
    </div>
    </div>
    
  );
};

export default ProfitLossTable;
