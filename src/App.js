import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Logout from "./Components/Logout";
import AuthForm from "./Pages/AuthForm";
import CompleteProfile from "./Pages/CompleteProfile";
import ExpenseTracker from "./Pages/Expense-Tracker";
import AuthContext from "./Store/Auth-Context";

function App() {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;
  return (
    <>
      <Switch>
        <Route path="/authform">
          <AuthForm />
        </Route>

        {isLoggedIn && (
          <Route path="/expense" exact>            
            <ExpenseTracker />
          </Route>
        )}
        <Route path="/completeProfile" exact>
          <CompleteProfile />
        </Route>
        <Route path="*">
          <Redirect to="/authform">
            <AuthForm />
          </Redirect>
        </Route>
      </Switch>
    </>
  );
}

export default App;