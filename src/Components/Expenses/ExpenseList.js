import React, { useContext } from "react";
import ExpenseContext from "../../Store/Expense-Context";

const ExpenseList = () => {
  const cntxt = useContext(ExpenseContext);
  return (
    <div>
      <div>Expense List</div>
      <ul>
         {cntxt.expense.map((item) => (
          <li>
            {item.amount}  {item.description}  {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;