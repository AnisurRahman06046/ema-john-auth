import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form className="form-info">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required id="" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="new-acc">
        New to ema john?<Link to="/signup">Create a new account</Link>
      </p>
    </div>
  );
};

export default LogIn;
