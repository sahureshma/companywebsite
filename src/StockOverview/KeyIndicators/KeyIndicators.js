import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import './KeyIndicators.css';

const indicators = [
  { label: "Today's High/Low", value: '₹317.00 / ₹273.00' },
  { label: '52-week High/Low', value: '₹384.4 / ₹210.2' },
  { label: 'PE ratio (TTM)', value: '-52.33' },
  { label: 'Market cap', value: '₹296.70 Cr' },
  { label: 'ROE', value: '-27.8%' },
  { label: 'Sales (TTM)', value: '₹1,627 Cr' },
  { label: 'Basic EPS (TTM)', value: '₹-5.93' },
  { label: 'Diluted EPS', value: '₹-5.93' },
  { label: 'Book Value per share', value: '₹18.57' },
  { label: 'Face Value per share', value: '₹10' },
  { label: 'P/B ratio', value: '17.23' },
  { label: 'Total Debt/Equity', value: '1.03' },
  { label: 'Reserves', value: '₹788.58 Cr' },
  { label: 'EV/EBITDA', value: '-92.02' },
];

const KeyIndicators = () => {
  return (
    <Card className="key-indicators-card">
      <CardContent>
        <Typography variant="h6" className="key-indicators-title">
         <h1 className='key'>Key Indicators</h1> 
        </Typography>
       
        <Grid container spacing={2}>
       
          {indicators.map((indicator, index) => (
            <Grid item xs={6} key={index} className="indicator">
              <Typography variant="body2" color="textSecondary">
                {indicator.label}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {indicator.value}
              </Typography>
             
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default KeyIndicators;