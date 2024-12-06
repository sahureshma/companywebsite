import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './ValuationTable.css';

const data = [
  { company: 'Indus Tower', valuation: 'Fair', pe: '11.47', evEbitda: '6.32', pegRatio: '0.12' },
  { company: 'ITI', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '-103.73', pegRatio: '0' },
  { company: 'Affle India', valuation: 'Very Expensive', pe: '64.44', evEbitda: '50.95', pegRatio: '2.78' },
  { company: 'HFCL', valuation: 'Expensive', pe: '48.25', evEbitda: '29.46', pegRatio: '2.15' },
  { company: 'Railtel Corpn.', valuation: 'Very Expensive', pe: '58.44', evEbitda: '33.87', pegRatio: '1.61' },
  { company: 'Balck Box', valuation: 'Expensive', pe: '42.16', evEbitda: '19.63', pegRatio: '0.62' },
  { company: 'GTL Infra.', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '20.14', pegRatio: '0' },
  { company: 'Suyog Telematics', valuation: 'Very Expensive', pe: '28.08', evEbitda: '16.69', pegRatio: '0.67' },
  { company: 'ADC India', valuation: 'Very Expensive', pe: '28.17', evEbitda: '21.1', pegRatio: '0.07' },
  { company: 'Valiant Commun.', valuation: 'Very Expensive', pe: '56.17', evEbitda: '35.1', pegRatio: '0.32' },
  { company: 'GTL', valuation: 'Risky', pe: '3.71', evEbitda: '58.26', pegRatio: '0.03' },
  { company: 'Quadrant Tele.', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '60.42', pegRatio: '0' },
  { company: 'Kaveri Telecom', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '-89.13', pegRatio: '0' },
  { company: 'Punjab Commun.', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '-1.1', pegRatio: '0' },
  { company: 'Telogica', valuation: 'Risky', pe: '44.71', evEbitda: '38.04', pegRatio: '0' },
  { company: 'Munoth Commun.', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '-15.42', pegRatio: '0' },
  { company: 'Kore Digital', valuation: 'Very Expensive', pe: '81.62', evEbitda: '57.93', pegRatio: '0' },
  { company: 'Uniflo Telecom', valuation: 'Risky', pe: 'NA (Loss Making)', evEbitda: '39.2', pegRatio: '0' },
];

const ValuationTable = () => {
  return (
    <div className="valuationTableContainer">
      <h2 className="valuationTableTitle">Compare Valuation with Peers</h2>
      <TableContainer component={Paper}>
        <Table aria-label="valuation table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: '#24b676', color: 'white', fontWeight: 'bold' }}>Company</TableCell>
              <TableCell style={{ backgroundColor: '#24b676', color: 'white', fontWeight: 'bold' }}>Valuation</TableCell>
              <TableCell style={{ backgroundColor: '#24b676', color: 'white', fontWeight: 'bold' }}>PE</TableCell>
              <TableCell style={{ backgroundColor: '#24b676', color: 'white', fontWeight: 'bold' }}>EV/EBITDA</TableCell>
              <TableCell style={{ backgroundColor: '#24b676', color: 'white', fontWeight: 'bold' }}>PEG Ratio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f3f3f3' : 'white' }}>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.valuation}</TableCell>
                <TableCell>{row.pe}</TableCell>
                <TableCell>{row.evEbitda}</TableCell>
                <TableCell>{row.pegRatio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ValuationTable;