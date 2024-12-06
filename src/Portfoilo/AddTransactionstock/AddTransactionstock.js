import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddSIPForm from "../AddSIPFormstock/AddSIPFormstock"; // Adjust path as needed


const AddTransactionstock = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the transaction to be edited passed via state
  const transaction = location.state?.transaction;

  // Initialize state for the editable transaction
  const [editedTransaction, setEditedTransaction] = useState(
    transaction || {
      type: "Buy",
      stockName: "",
      exchange: "NSE",
      date: "",
      quantity: 0,
      price: 0,
      amount: 0,
      netAmount: 0,
      totalCharges: 0,
      notes: "",
      showSIP: false,
    }
  );

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditedTransaction((prev) => {
      const updatedTransaction = { ...prev, [name]: value };

      // Recalculate dependent fields if quantity or price changes
      if (name === "quantity" || name === "price") {
        const quantity = Number(updatedTransaction.quantity || 0);
        const price = Number(updatedTransaction.price || 0);

        updatedTransaction.amount = quantity * price; // Fixed calculation
        updatedTransaction.netAmount = updatedTransaction.amount;
        updatedTransaction.totalCharges = updatedTransaction.netAmount; // Adjust if additional charges logic is needed
      }

      return updatedTransaction;
    });
  };

  // Handle save action
  const handleSave = () => {
    navigate("/portfoliostockaccount", {
      state: { updatedTransaction: editedTransaction },
    });
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate("/portfoliostockaccount");
  };

  // Toggle SIP form visibility
  const toggleSIPForm = () => {
    setEditedTransaction((prev) => ({
      ...prev,
      showSIP: !prev.showSIP,
    }));
  };

  // Reset form to initial transaction state
  const resetForm = () => {
    setEditedTransaction(transaction);
  };

  return (
    <div className="transaction-form">
      <h2 style={{ marginLeft: "40px" }}>Add Transaction</h2>
      <div className="tabsadd">
        <button className="tabadd active">Stocks</button>
        <button className="tabadd">Mutual Fund</button>
        <button className="tabadd">Gold</button>
      </div>
      <div className="addcontainer">
        <form className="transaction-row-wrapper">
          <div className="transaction-row">
            {/* Transaction Type */}
            <label>
              <p1 style={{ marginLeft: "49px" }}> Type</p1><br/>
              <select
                name="type"
                value={editedTransaction.type}
                onChange={handleChange}
                style={{
                  width: "80px",
                  height: "30px",
                  marginLeft: "50px",
                }}
                className="transaction-input"
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </label>

            {/* Stock Name */}
            <label>
              Stock Name<br/>
              <input
                type="text"
                name="stockName"
                value={editedTransaction.stockName}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* Exchange */}
            <label>
              Exchange<br/>
              <input
                type="text"
                name="exchange"
                value="NSE"
                readOnly
                className="transaction-input read-only"
              />
            </label>

            {/* Date */}
            <label>
              Date
              <input
                type="date"
                name="date"
                value={editedTransaction.date}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>
            <label>
              Quantity
              <input
                type="number"
                name="quantity"
                value={editedTransaction.quantity}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* Price */}
            <label>
              Price / Stock
              <input
                type="number"
                name="price"
                value={editedTransaction.price}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>
          </div><br/><br/>

          <div className="transaction-row" style={{
            borderTop: "1px solid #ccc", // Middle border (bottom of this row)
            marginBottom: "10px",          // Optional spacing between rows
            paddingBottom: "10px",         // Optional padding for visual clarity
          }}>
            {/* Amount */}
            <label className='amountupdate'>
              <p1 style={{ marginLeft: "35px" }}> Amount</p1>
              <input
                type="number"
                name="amount"
                value={editedTransaction.amount}
                readOnly
                className="transaction-input read-only"
               
              />
            </label>

            {/* Net Amount */}
            <label>
              Net Amount
              <input
                type="number"
                name="netAmount"
                value={editedTransaction.netAmount}
                readOnly
                className="transaction-input read-only"
              />
            </label>

            {/* Total Charges */}
            <label>
              Total Charges
              <input
                type="number"
                name="totalCharges"
                value={editedTransaction.totalCharges}
                readOnly
                className="transaction-input read-only"
              />
            </label>
            <label>
              Notes
              <input
                type="text"
                name="notes"
                value={editedTransaction.notes}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* SIP Toggle */}
            <div className="sip-link">
              <a href="#" onClick={toggleSIPForm}>
                Add SIP for this Stock
              </a>
            </div>

            {/* SIP Form */}
            {editedTransaction.showSIP && (
              <div className="addsipform-container">
                <AddSIPForm />
              </div>
            )}
          </div>
        </form>

        {/* Action Buttons */}
        <div className="form-buttons">
          <button type="button"   style={{ marginLeft: "600px",background:"#24b676",color:"white" }}onClick={handleSave} className="save-button">
           Add Transaction
          </button>
         
          
        </div>
      </div>
    </div>
  );
};

export default AddTransactionstock;