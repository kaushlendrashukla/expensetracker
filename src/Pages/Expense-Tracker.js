import React from 'react'
import { useHistory } from 'react-router-dom'

const ExpenseTracker = () => {
  const history=useHistory()
  const profileCompleteHandler=()=>{
      history.push('/completeProfile')
  }
  return (
    
    <div>
      <h1>Welcome To Expense Tracker</h1>

      <p>Your Profile is incomplete</p>
      <button onClick={profileCompleteHandler}>complete now</button>
    </div>
  )
}

export default ExpenseTracker