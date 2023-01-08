import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import './App.css';
import AuthForm from './Pages/AuthForm';
import AuthContext from './Store/Auth-Context';
import ExpenseTracker from './Pages/Expense-Tracker';


function App() {
 const authCntxt = useContext(AuthContext)
  return (
    <div>
    
        <AuthForm/>
       
        { authCntxt.isLoggedIn &&  <Route path='/' exact><ExpenseTracker /> </Route> }
       </div>
  );
}

export default App;