import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div >
      <Link to="/authform">Login</Link>
      <Link to="/expense">ExpenseTracker</Link>
      <Link to="/completeProfile">Complete Profile</Link>
      <Link to="/forgetpassword">ForgetPassword</Link>
      <Link to="/dailyexpense">Daily Expense</Link>
    </div>
  );
};

export default Header;