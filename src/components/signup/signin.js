import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="signupText">
          <h2>Welcome, Sign up</h2>
        </div>
        <br />
        <br />
        <form action="signin">
          <div className="signupAbout">
            <p>It is our great pleasure to have you on board!</p>
          </div>
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Create your Login" />
          <input type="password" placeholder="Create your Password" />
          <button className="submit" type="submit">Sign Up</button>
        </form>
        <button className="btn2" onClick={() => navigate("/")}>Back to Login</button>
      </div>
    </div>
  );
};

export default SignIn;
