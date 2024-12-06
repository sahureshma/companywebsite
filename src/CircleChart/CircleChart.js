import React from 'react';
import { PieChart, Pie, Cell, Legend, Label } from 'recharts';

const data = [
  { name: 'Promoters', value: 90, color: '#0055A5' },            // Blue
  { name: 'Foreign institutions', value: 0.04, color: '#D7263D' }, // Red
  { name: 'DII', value: 0.01, color: '#F4B400' },                 // Yellow
  { name: 'Retail & others', value: 9.92, color: '#28A745' },     // Green
];

const ShareholdingChart = () => {
  return (
    <div style={{ textAlign: 'left', fontFamily: 'calibri' }}>
      <h3>Shareholding</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}      // Increase outer radius for better visibility
          innerRadius={60}      // Creates a gap in the middle for donut effect
          minAngle={15}         // Sets a minimum angle for visibility
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          {/* Add Label to show value percentage inside the pie chart */}
          <Label
            position="center"
            content={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
              const RADIAN = Math.PI / 180;
              const radius = outerRadius - 10;  // Adjust radius to place text properly
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
                  {`${value}%`}  {/* Display percentage inside each slice */}
                </text>
              );
            }}
          />
        </Pie>

        {/* Custom Legend with Square Icons */}
        <Legend
          layout="vertical"       // Display items vertically
          align="left"            // Align legend items to the left
          verticalAlign="top"     // Place the legend at the top
          iconSize={0}            // Set icon size to 0 to remove the default legend square
          formatter={(value, entry, index) => {
            const { color, name } = entry;
            const percentage = data[index].value.toFixed(2); // Display the value with two decimal places
            return (
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                {/* Custom square icon in the legend */}
                <div style={{
                  width: '15px',  // Square width
                  height: '15px', // Square height
                  backgroundColor: color, // Square color based on the legend color
                  marginRight: '5px'  // Spacing between the square and text
                }}></div>
                <span>{value} - {percentage}%</span> {/* Display name and percentage */}
              </div>
            );
          }}
        />
      </PieChart>
    </div>
  );
};

export default ShareholdingChart;
