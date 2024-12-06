import React from 'react';
import ChartCard from '../Stockchartcard/Stockchartcard';

const roeData = [
  { year: 2015, roe: 24.2 },
  { year: 2016, roe: 22.0 },
  { year: 2017, roe: 20.0 },
  { year: 2018, roe: 15.5 },
  { year: 2019, roe: 10.0 },
  { year: 2020, roe: -5.0 },
  { year: 2021, roe: -10.0 },
  { year: 2022, roe: -15.0 },
  { year: 2023, roe: -20.0 },
  { year: 2024, roe: -25.0 },
];

const ROEChart = () => {
  return (
    <div>
      <h1>ROE (%)</h1>
      <ChartCard data={roeData} dataKey="roe" color="#4caf50" fillColor="rgba(76, 175, 80, 0.3)" />
    </div>
  );
};

export default ROEChart;