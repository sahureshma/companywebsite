import React from 'react';
import EPSChart from '../EPSChart/EPSChart';
import SalesChart from '../SalesChart/SalesChart';
import ROEChart from '../ROEChart/ROEChart';
import ROCEChart from '../ROCEChart/ROCEChart';
import './Analysis.css';
import AnalystInsights from '../AnalystInsights/AnalystInsights';



function Analysis() {
  return (
    <div className="analysisnotecontainer">
       
        <AnalystInsights/>
        <div className="chart-row">
      <EPSChart />
      <SalesChart />
      </div>
      <div className="chart-row">
      <ROEChart />
      <ROCEChart />
    </div>
   
    </div>
  );
}

export default Analysis;