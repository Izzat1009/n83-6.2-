import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Header">
        <div className="loginText">
          <h2>Welcome, Log into your account</h2>
        </div>
      </div>
      
      <div className="loginLine">
        <p>It is our great pleasure to have you on board!</p>
        <form className="form" action="login">
          <input type="login" placeholder="Enter your Login" required />
          <input type="password" placeholder="Enter Password" required />
          <div className="buttons">
            <button className="btn1">Login</button>
            <button className="btn2" onClick={() => navigate("/signin")}>Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
