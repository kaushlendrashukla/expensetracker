import React, { useRef } from "react";
import Logout from "../Components/Logout";

const CompleteProfile = () => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();

  const updateHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const image = imageInputRef.current.value;

    const id= localStorage.getItem('token')

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw",
      {
        method: "POST",
        body: JSON.stringify({
           idToken:id,
          displayname: name,
          photourl: image,
          returnSecureToken:true
          
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp", resp);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log("Last Then", data);
      })
      .catch((err) => {
        console.log(err);
      });

      fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw",{
method:"POST",
body:JSON.stringify({
    idToken:id,
}),
headers:{
"Content-Type":"application-json"
}
      }).then((resp)=>{
        console.log(resp)
      }).catch((err)=>{
        console.log(err)
      })
  };
  return (
    <div>
        <div>
            <Logout/>
        </div>
      <form>
        <div>
          <label> Full Name</label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div>
          <label>Upload Your image</label>
          <input type="file" accept="/image/*" ref={imageInputRef} />
        </div>
        <button onClick={updateHandler}>Update</button>
      </form>
    </div>
  );
};

export default CompleteProfile;