import React, { useState } from 'react';
import { useAddTransactions } from "../../hooks/useAddTransactions";

const Expense = () => {
  const { addTransaction } = useAddTransactions();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      amount,
      type,
    });

    setSuccessMessage("Transaction successfully added!");

    // Clear the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    // Optionally reset form fields
    setDescription("");
    setAmount(0);
    setType("expense");
  };

  return (
    <>
      <div className="text-center">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div id="balance">
            <h3>Your Balance</h3>
            <h2>0.00</h2>
          </div>
          <div id="summary">
            <div id="income">
              <h4>Income</h4>
              <p>0.00</p>
            </div>
            <div id="expense">
              <h4>Expense</h4>
              <p>0.00</p>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="radio"
              id="income"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <button type="submit">Add Transaction</button>
          </form>
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      </div>
      <div id="transactions">
        <h3>Transactions</h3>
        {/* Render transactions dynamically here */}
      </div>
    </>
  );
};

export default Expense;