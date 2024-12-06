import React from 'react';
import ChartCard from '../Stockchartcard/Stockchartcard';
import './SalesChart.css';
const salesData = [
  { year: 2015, sales: 500 },
  { year: 2016, sales: 1000 },
  { year: 2017, sales: 1500 },
  { year: 2018, sales: 2000 },
  { year: 2019, sales: 1800 },
  { year: 2020, sales: 2300 },
  { year: 2021, sales: 2500 },
  { year: 2022, sales: 2200 },
  { year: 2023, sales: 2100 },
  { year: 2024, sales: 2350 },
];

const SalesChart = () => {
  return (
    <div>
        <h1 className='headeranalysis'>Sales (₹ Cr.)</h1>
    <ChartCard
      
      data={salesData}
      dataKey="sales"
       color="#4caf50"
      fillColor="#a2d4a2"
    />
    </div>
  );
};

export default SalesChart;