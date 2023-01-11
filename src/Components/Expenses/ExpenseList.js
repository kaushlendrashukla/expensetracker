import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseDisplay from "./ExpenseDisplay";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  const cntxt = useContext(ExpenseContext);

  useEffect(() => {
    display()
  }, [])



  const display = async () => {
    const data = await fetch(
      "https://react-api-2518b-default-rtdb.firebaseio.com/expense.json "
    );
    const value = await data.json();
    console.log(value);
    cntxt.addExpense(value);
    const array = []
    for (const key in value) {
      array.push({
        amount: value[key].amount,
        description: value[key].description,
        category: value[key].category
      })
    }
    setExpense(array);


  }
  console.log(expense)
  return (
    <div>
   
      <div><b> Expense List  </b></div>
      
      <div>
        <ExpenseDisplay data={expense} />
      </div>

    </div>
  );
};

export default ExpenseList;