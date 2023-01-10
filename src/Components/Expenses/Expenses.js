import React, { useContext, useRef } from "react";
import ExpenseContext from "../../Store/Expense-Context";

const Expenses = () => {

  const contxt=useContext(ExpenseContext)

    let moneyInputRef=useRef();
    let descInputRef=useRef();
    let listInputRef=useRef();

    const submitExpenseHandler=(e)=>{
        e.preventDefault();
        const amount=moneyInputRef.current.value;
        const desc=descInputRef.current.value;
        const list=listInputRef.current.value;

        const data={
          amount:amount,
          description:desc,
          category:list
        }

        contxt.addExpense(data)
        descInputRef.current.value = ""
        moneyInputRef.current.value = ""
    }


  return (
    <div>
      <form onSubmit={submitExpenseHandler}>
        <h1>Daily expenses</h1>

        <div>
            <label>Money Spent</label>
            <input type="number" ref={moneyInputRef}/>
        </div>
        <div>
            <label>Description</label>
            <input type="text" ref={descInputRef}/>
        </div>
        <div>
            <label>Category</label>
            <select ref={listInputRef}>
                <option>Food</option>
                <option>Movie</option>
                <option>Fuel</option>
            </select>
        </div>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;