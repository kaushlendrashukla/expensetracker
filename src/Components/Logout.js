import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";

const Logout = () => {
  const logoutCntxt = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    logoutCntxt.logout();
    history.replace("/authform");
  };

  return <button onClick={logoutHandler}>Logout</button>;
};

export default Logout;