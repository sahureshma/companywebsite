import React, { useState } from 'react';
import { Slider, TextField, Button, Typography, Box } from '@mui/material';
import './ValuationCalculator.css';

const ValuationCalculator = () => {
  const [epsGrowthRate, setEpsGrowthRate] = useState(0);
  const [rateOfReturn, setRateOfReturn] = useState(0);
  const [futurePE, setFuturePE] = useState(0);
  const [baseEPS, setBaseEPS] = useState(0);
  const [dps, setDPS] = useState(0);
  const [mos, setMOS] = useState(0);

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  const saveMyValuation = () => {
    alert('Valuation saved');
  };

  // Marks for EPS Growth Rate and Rate of Return Sliders
  const percentageMarks = [
    { value: 0, label: '0%' },
    { value: 50, label: '50%' }
  ];

  // Marks for Future PE Slider
  const peMarks = [
    { value: 0, label: '0' },
    { value: 200, label: '200' }
  ];

  return (
    <div>
      <h1 className="valuationHead">Valuation of ITI Limited</h1>
      <Box className="valuationContainer">
        <Typography variant="h6" gutterBottom>
          Price Calculator
        </Typography>

        <Box className="valuationRow">
          <Box className="valuationColumn" sx={{ marginRight: 50 }}> {/* Adds space between columns */}
            <Box className="sliderSection">
              <Typography>Expected EPS Growth Rate:</Typography>
              <Slider
                value={epsGrowthRate}
                onChange={handleSliderChange(setEpsGrowthRate)}
                aria-labelledby="eps-growth-rate-slider"
                valueLabelDisplay="auto"
                min={0}
                max={50}
                marks={percentageMarks}
                sx={{
                  width: '90%', // Default to 100% width for small screens
                  '@media (min-width: 480px)': {
                    width: '20%', // Adjust width for screens 480px and above
                  },
                  '@media (min-width: 768px)': {
                    width: '160%', // Adjust width for larger screens (tablets and up)
                  },
                }}
              />
              <Typography>Base {epsGrowthRate}%</Typography>
            </Box>

            <Box className="sliderSection">
              <Typography>Expected Rate of Return:</Typography>
              <Slider
                value={rateOfReturn}
                onChange={handleSliderChange(setRateOfReturn)}
                aria-labelledby="rate-of-return-slider"
                valueLabelDisplay="auto"
                min={0}
                max={50}
                marks={percentageMarks}
                sx={{
                  width: '90%', // Default to 100% width for small screens
                  '@media (min-width: 480px)': {
                    width: '20%', // Adjust width for screens 480px and above
                  },
                  '@media (min-width: 768px)': {
                    width: '160%', // Adjust width for larger screens (tablets and up)
                  },
                }}
              />
              <Typography>Base {rateOfReturn}%</Typography>
            </Box>

            <Box className="sliderSection">
              <Typography>Future PE:</Typography>
              <Slider
                value={futurePE}
                onChange={handleSliderChange(setFuturePE)}
                aria-labelledby="future-pe-slider"
                valueLabelDisplay="auto"
                min={0}
                max={200}
                marks={peMarks}
                sx={{
                  width: '90%', // Default to 100% width for small screens
                
                  '@media (min-width: 480px)': {
                    width: '20%', 
                    // Adjust width for screens 480px and above
                  },
                  '@media (min-width: 768px)': {
                    width: '160%', // Adjust width for larger screens (tablets and up)
                  },
                }}
              />
              <Typography>Base {futurePE}</Typography>
            </Box>
          </Box>

          <Box className="valuationColumn">
            <Box className="buttonSection">
              <Button variant="outlined" color="success" className="baseValueButton"  sx={{
    
    width: '150px',  // Set the width here if needed
    height: '40px',  // Set the height here
  }}>
                Base Value
              </Button>
              <Button variant="outlined" color="success" className="myValuationButton"
              sx={{
    
                width: '150px',  // Set the width here if needed
                height: '40px',
               
              }}>
                My Valuation
              </Button>
            </Box>

            {/* MRP and DP in the same row */}
            <Box className="mrpDpRow" display="flex" justifyContent="space-between">
            <Typography sx={{ fontSize: '16px' }}> MRP: ₹0</Typography>
            <Typography sx={{ fontSize: '14px' }}>DP: ₹0</Typography>
            </Box>

            <Box className="inputSection">
            <Typography sx={{ fontSize: '16px' }}>Base EPS ₹:
                <TextField
                  type="number"
                  value={baseEPS}
                  onChange={(e) => setBaseEPS(e.target.value)}
                  sx={{ width: '150px', float: 'right' }} // Adjust the width and alignment to the right
                  className="inputField"
                />
              </Typography>
            </Box>

            <Box className="inputSection">
            <Typography sx={{ fontSize: '16px' }}>DPS ₹:
                <TextField
                  type="number"
                  value={dps}
                  onChange={(e) => setDPS(e.target.value)}
                  sx={{ width: '150px', float: 'right' }} // Adjust the width and alignment to the right
                  className="inputField"
                />
              </Typography>
            </Box>

            <Box className="inputSection">
            <Typography sx={{ fontSize: '16px' }}>MOS (%):
                <TextField
                  type="number"
                  value={mos}
                  onChange={(e) => setMOS(e.target.value)}
                  sx={{ width: '150px', float: 'right' }}
                  className="inputField"
                />
              </Typography>
            </Box>

            {/* Align "Save my Valuation" Button to the right */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
              <Button variant="outlined" color="success" onClick={saveMyValuation} className="saveButton"
                sx={{
                  color: 'white',
                  backgroundColor: '#24b676',
                  '&:hover': {
                    backgroundColor: '#1e9e64',
                  }
                }}>
                Save my Valuation
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ValuationCalculator;