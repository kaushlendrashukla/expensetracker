import React, { useContext, useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import AuthContext from "../Store/Auth-Context";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const authCntxt=useContext(AuthContext)

  let emailidInputref = useRef("");
  let passwordInputRef = useRef("");
  let confirmPaswordInputRef = useRef("");

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailidInputref.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPaswordInputRef.current.value;

    setIsLoading(true);
    if (!isLogin) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw',
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => {
          setIsLoading(false)
          emailidInputref = ""
          if (resp.ok) {
            console.log(enteredEmail, "succesfully signed up");
            return resp.json();
          } else {
            resp.json().then((data) => {
              // console.log(data);
            });
          }
        })
        .then((data) => {
          
          console.log(data);
          authCntxt.login(data.idToken);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => {
          setIsLoading(false)         
          if (resp.ok) {
            console.log(enteredEmail, "succesfully login up");
            return resp.json();
          } else {
            resp.json().then((data) => {
              console.log(data);
            });
          }
        })
        .then((data) => {
          console.log(data);
          authCntxt.login(data.idToken);
          localStorage.setItem("token", data.idToken);
          history.replace("/expense");
        })
        .catch((err) => {
          alert(err);
        });
    }
   
    
  };

  return (
    <section>
      <div class="form">
        <form onSubmit={onSubmitHandler}>
          <div class="title"> {isLogin ? "Login" : "SignUp"}</div>
          <div class="input-container ic1">
          <label>Email</label>
            <input
              id="Email-Id"
              type="text"
              class="input"
              required
              ref={emailidInputref}
            />                    
          </div>
          <div class="input-container ic1">
          <label >Password</label>
            <input
              id="password"
              class="input"
              type="password"
              ref={passwordInputRef}
              required
            />                
          </div>
          {!isLogin && (
            <div class="input-container ic1">
                <label >Confirm Password</label>
              <input
                id="confirmPassword"
                class="input"
                type="password"
                ref={confirmPaswordInputRef}
                required
              />                          
            </div>
          )}
          <div class='actions'>
         { !isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
         {isLoading &&  <p>sending request</p>}
          <button
            type='button'
            class="toggle"
            onClick={switchAuthHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;