import React from 'react'
import "./Expenses.css";
const ExpenseDisplay = (props) => {

    const display = props.data.map((item) => (

        <tr>
            <td>{item.amount}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
        </tr>
        /* <li>{item.amount} {item.description} {item.description}</li> */

    ))
    return (
        <div>
            <table>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
                {display}
            </table>

           
        </div>
    )
}

export default ExpenseDisplay