import React from "react";
import { useState } from "react";

const ExpenseContext = React.createContext({
  expense: [],
  addExpense: (data) => {},
  editExpense: () => {},
  delExpense: () => {},
});

export const ExpenseContextProvider = (props) => {
  const [addExpense, setAddExpense] = useState([]);

  const addExpenseHandler = (expense) => {
    setAddExpense([...cntxt.expense, expense]);
  };

  const editExpenseHandler = () => {};

  const deleteExpenseHandler = () => {};

  const cntxt = {
    expense: addExpense,
    addExpense: addExpenseHandler,
    editExpense: editExpenseHandler,
    delExpense: deleteExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={cntxt}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;