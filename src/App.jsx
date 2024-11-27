import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Expense from "./pages/expense-tracker/expense";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
};

export default App;
