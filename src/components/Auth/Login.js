import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase/firebase";
import { actionTypes } from "../StateProvider/reducer";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png"
          alt="slack"
        />
        <h1>Sign in to Zy's Slack</h1>
        <p>Created by Sarzy</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
