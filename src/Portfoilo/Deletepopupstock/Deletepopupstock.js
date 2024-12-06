import React, { useState } from 'react';
import { Modal, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Deletepopupstock.css';

const Deletepopupstock = () => {
  const [openModal, setOpenModal] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      name: "ITI",
      livePrice: 291.4,
      dayGain: -0.48,
      quantity: 4,
      investmentCost: 1170,
      latestValue: 1165.6,
      unrealizedGain: -4,
    },
  ]);

  const navigate = useNavigate();

  const handleDeleteTransactions = () => {
    setTransactions([]);
    setOpenModal(false);
    navigate('/portfoliostockaccount');
  };

  return (
    <div className={`portfolio-manager ${openModal ? 'blur-background' : ''}`}>
      <Typography variant="h4" gutterBottom>
        Portfolio Manager
      </Typography>

      {/* Transactions Table */}
      <div className="transactions-table">
        <Typography variant="h6">My Accounts</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stocks Name</TableCell>
              <TableCell>Live Price</TableCell>
              <TableCell>Day's Gain</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Investment Cost</TableCell>
              <TableCell>Latest Value</TableCell>
              <TableCell>Unrealized Gain</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.livePrice}</TableCell>
                <TableCell>{transaction.dayGain}</TableCell>
                <TableCell>{transaction.quantity}</TableCell>
                <TableCell>{transaction.investmentCost}</TableCell>
                <TableCell>{transaction.latestValue}</TableCell>
                <TableCell>{transaction.unrealizedGain}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Transactions Button */}
      <div className="center-button">
        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenModal(true)}
        >
          Delete All Transactions
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="deletepop">
          <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom>
            Delete All Transactions
          </Typography>
          <Typography gutterBottom>
            Do you want to start fresh and clear all transactions and SIPs for all accounts?
          </Typography>
          <Button variant="contained" color="primary" onClick={handleDeleteTransactions}>
            Yes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpenModal(false)}
            style={{ marginLeft: '10px' }}
          >
            No
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Deletepopupstock;
