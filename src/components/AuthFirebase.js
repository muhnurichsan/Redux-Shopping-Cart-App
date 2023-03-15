import React from "react";
import "./Auth.css";
import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";

function AuthFirebase() {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(authActions.login());
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1>Login With Google</h1>{" "}
      <button className="login-btn" onClick={signInWithGoogle}>
        Login Now
      </button>
    </div>
  );
}

export default AuthFirebase;
