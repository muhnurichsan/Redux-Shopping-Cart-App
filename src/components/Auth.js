import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import { authActions } from "../store/slices/auth-slice";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "test" && password === "test")
      dispatch(authActions.login());
    else alert("username atau password salah");
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="id">Id</label>
        <input
          type="text"
          name="id"
          id="id"
          value={username}
          onChange={handleChangeUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
