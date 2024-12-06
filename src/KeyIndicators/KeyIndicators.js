import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './KeyIndicators.css';
function KeyIndicators() {
  const data = [
    { label: "Today's High/Low", value: "₹317.00 / ₹273.00" },
    { label: '52-week High/Low', value: "₹384.4 / ₹210.2" },
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

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        maxWidth: 700,
        margin: 'auto',
        border: '1px solid #e0e0e0',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Key Indicators
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid
            item
            xs={6}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              borderBottom: index < data.length - 2 ? '1px solid #e0e0e0' : 'none',
              paddingBottom: 1,
              marginBottom: 1,
            }}
          >
            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 500 }}>
              {item.label}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default KeyIndicators;