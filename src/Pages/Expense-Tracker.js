import React from 'react'
import { useHistory } from 'react-router-dom'
import Logout from '../Components/Logout'

const ExpenseTracker = () => {
  const history=useHistory()
  const profileCompleteHandler=()=>{
      history.push('/completeProfile')
  }

  const id=localStorage.getItem('token')
  const verifyIdHandler=()=>{
    fetch(" https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw",{
      method:"POST",
      body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken:id
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((resp)=>{
      console.log(resp)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    
    <div>
      <div>
      <Logout/>
      </div>
      <h1>Welcome To Expense Tracker</h1>

      <p>Your Profile is incomplete</p>
      <button onClick={profileCompleteHandler}>complete now</button>
      <button onClick={verifyIdHandler}>Verify Your Email-Id</button>
    </div>
  )
}

export default ExpenseTracker