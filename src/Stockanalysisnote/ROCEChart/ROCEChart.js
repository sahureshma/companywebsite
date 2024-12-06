import React from 'react';
import ChartCard from '../Stockchartcard/Stockchartcard';


const roceData = [
  { year: 2015, roce: 24.2 },
  { year: 2016, roce: 22.0 },
  { year: 2017, roce: 24.22 },
  { year: 2018, roce: 18.5 },
  { year: 2019, roce: 12.0 },
  { year: 2020, roce: -4.0 },
  { year: 2021, roce: -7.0 },
  { year: 2022, roce: -10.0 },
  { year: 2023, roce: -15.0 },
  { year: 2024, roce: -20.0 },
];
const ROCEChart= () => {
    return (
      <div>
        <h1 >ROCE (%)</h1>
        <ChartCard data={roceData} dataKey="roce" color="#4caf50" fillColor="rgba(76, 175, 80, 0.3)" />
      </div>
    );
  };
  
  export default ROCEChart;