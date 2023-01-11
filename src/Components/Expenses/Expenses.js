import React, { useContext, useRef } from "react";
import "./Expenses.css";
import ExpenseContext from "../../Store/Expense-Context";

const Expenses = () => {
  const contxt = useContext(ExpenseContext);

  let amountInputRef = useRef();
  let descInputRef = useRef();
  let listInputRef = useRef();

  const submitExpenseHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    const desc = descInputRef.current.value;
    const list = listInputRef.current.value;

    const data = {
      amount: amount,
      description: desc,
      category: list,
    };
    fetch(
      "https://react-api-2518b-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("Expense Added Successfully..");
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((err) => {
        alert(err);
      });

    // contxt.addExpense(data);
  };

  return (
    <div>
      <h3 class="secondTitle">Add a new Expense</h3>
      <form onSubmit={submitExpenseHandler}>
        <div class = "inputexpense">
       <div class = " inputs">
          <label>Money Spent</label>
          <input type="number" ref={amountInputRef} />
          </div>
          <div class = " inputs">
          <label>Description</label>
          <input type="text" ref={descInputRef} />
          </div>
          <div class = " inputs">
          <label>Category</label>
          <select ref={listInputRef}>
            <option>Food</option>
            <option>Movie</option>
            <option>Fuel</option>
          </select>
          </div>
        </div>
        <button class="buttonSave">Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;