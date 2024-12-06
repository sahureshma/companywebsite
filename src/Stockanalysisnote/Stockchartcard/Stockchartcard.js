import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Stockchartcard.css';

const ChartCard = ({ title, data, dataKey, color, fillColor }) => {
  return (
    <div className="analcontainer">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            domain={[
              Math.min(...data.map(d => d[dataKey])),
              Math.max(...data.map(d => d[dataKey])),
            ]}
          />
          <Tooltip formatter={(value) => [`₹${value}`, dataKey]} />

          <Area
            type="monotone" // Creates a smooth curve for the chart; change to "linear" for sharp edges
            dataKey={dataKey}
            stroke={color}
            fill={fillColor}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
