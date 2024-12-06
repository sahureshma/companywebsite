import React from 'react';
import ChartCard from '../Stockchartcard/Stockchartcard';
import './EPSChart.css';

// EPS Data
const epsData = [
  { year: 2015, eps: 4.5 },
  { year: 2016, eps: 5.2 },
  { year: 2017, eps: 4.76 },
  { year: 2018, eps: 3.5 },
  { year: 2019, eps: 1.0 },
  { year: 2020, eps: -2.5 },
  { year: 2021, eps: -3.0 },
  { year: 2022, eps: -4.0 },
  { year: 2023, eps: -5.0 },
  { year: 2024, eps: -6.0 },
];

const EPSChart = () => {
  return (
    <div className="eps-chart-container">
        
    <h1 className='headeranalysis'>EPS (₹)</h1>
    <ChartCard
      
      data={epsData}
      dataKey="eps"
      color="#4caf50"
      fillColor="#a2d4a2"
    />
    </div>
  );
};

export default EPSChart;