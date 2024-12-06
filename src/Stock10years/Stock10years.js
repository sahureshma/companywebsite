import React from 'react';
import FinancialTable from '../Stock10yrtable/Stock10yrtable';
import './Stock10years.css';



const financialData = {
  valueCreation: [
    { title: 'ROCE ', data: ['0%', '0%', '0%', '159%', '31.7%', '210.2', '4.5%', '7.7%', '-3.6%', '-8.4%', '-'] },
    { title: 'Value Creation Index', data: ['NA', 'NA', 'NA', '10.8', '1.4', '0.0', '-0.7', '-0.4', '-1.3', '-1.7', '-'] }
  ],
  growthParameters: [
    { title: 'Sales', data: ['0', '0', '1,528', '1,475', '1,668', '2,059', '2,362', '1,861', '1,395', '1,264', '1,627'] },
    { title: 'Sales YoY Gr.', data: ['-', 'NA', 'NA', '-3.5%', '13.1%', '23.4%', '14.7%', '-21.2%', '-25%', '-9.5%', '-'] },
    { title: 'Adj EPS', data: ['0', '0', '4.8', '3', '134', '1.6', '0.1', '1.3', '-3.8', '-5.9', '-5.8'] },
    { title: 'YoY Gr.', data: ['-', 'NA', 'NA', '-36.3%', '-66%', '52.4%', '-93.6%', '1170%', '-399.2%', 'NA', '-'] },
    { title: 'BVPS (₹)', data: ['0', '0', '-22.3', '-10.7', '-6.2', '25.1', '26.2', '27.2', '23.9', '18.6', '17.6'] },
    { title: 'Adj Net Profit', data: ['0', '0', '266', '231.8', '92.5', '145', '9.4', '119', '-360', '-568', '-557'] },
    { title: 'Cash Flow from Ops.', data: ['0', '0', '-347', '-113', '23.8', '-199', '94.1', '-437', '-294', '974', '-'] },
    { title: 'Debt/CF from Ops.', data: ['0', '0', '-3.4', '-10.9', '52.8', '-6.1', '15.6', '-3.7', '-6.4', '1.8', '-'] },
  ],
  CAGR: [
    { title: 'Sales', data: ['NA', '-5.4%', '-18.8%', '-9.5%'] },
    { title: 'Adj EPS', data: ['NA', '-241.9%', '-489.7%', 'NA'] },
    { title: 'BVPS', data: ['NA', 'NA', '-10.8%', '-22.2%'] },
    { title: 'Share Price', data: ['27.6%', '29.1%', '39.9%', '26.8%'] }
  ],
  keyFinancialParameters: [
    { title: 'Return on Equity %', data: ['0', '0', '24.2', '16.7', '5.3', '7', '0.4', '4.7', '-14.5', '-27.3', '-32.1'] },
    { title: 'Op. Profit Mgn %', data: ['0', '0', '-6.9', '5.5', '-6', '7.1', '2.2', '5.8', '-11', '25.2', '-17.4'] },
    { title: 'Net Profit Mgn %', data: ['0', '0', '17.4', '15.6', '5.6', '7.1', '0.4', '6.4', '-25.8', '-45', '-34.3'] },
    { title: 'Debt to Equity', data: ['0', '0', '-0.9', '-1.5', '-2.3', '0.5', '0.6', '0.6', '0.8', '1', '-'] },
    { title: 'Working Cap Days', data: ['0', '0', '818', '854', '749', '774', '1,159', '1,662', '1,763', '792', '-'] },
    { title: 'Cash Conv. Cycle', data: ['0', '0', '129', '216', '128', '118', '191', '378', '427', '-81', '-'] }
  ]
};

const Stockxray = () => (
 
  <div className="xrayall">
   
     <div className="button-container">
        <button className="standalone-button">Standalone Basis</button>
        <button className="consolidated-button">Consolidated Basis</button>
      </div>
    <h1 className='financeheader'>10-Year Financial Analysis of ITI</h1>
    <p className='financepara'>Data Standardized for Exceptional Items and Accounting Adjustments</p>
    
    {/* Render each financial table with custom headers */}
    <FinancialTable title="Value Creation" data={financialData.valueCreation}className="keyfinancetable" />
    <FinancialTable title="Growth Parameters" data={financialData.growthParameters} className="keyfinancetable"/>
    <div style={{ width: '70%', margin: '0', paddingLeft: '10px' }}>
    <FinancialTable 
  title="CAGR" 
  data={financialData.CAGR} 
  headers={['9 Years', '5 Years', '3 Years', '1 Year']} 

  className="cagr-table" 
  style={{ width: '10%', margin: '0 auto' }} 
/>
</div>
    <FinancialTable title="Key Financial Parameters" data={financialData.keyFinancialParameters} className="keyfinancetable"/>
  </div>
  
);

export default Stockxray