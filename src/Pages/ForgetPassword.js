import React, { useRef } from "react";

const ForgetPassword = () => {
  let forgetPassInputRef = useRef();

  const forgetPasswordHandler = (e) => {
    e.preventDefault();

    let emailInputRef = forgetPassInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: emailInputRef,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("Password reset link send successfully....")
          return resp.json();
        } else {
          resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <form onSubmit={forgetPasswordHandler}>
        <div>
          <label>Email</label>
          <input type="email" ref={forgetPassInputRef} />
        </div>
        <button>Send Link</button>
      </form>
    </div>
  );
};

export default ForgetPassword;