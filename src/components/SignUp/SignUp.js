import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form className="form-info">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required id="" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="new-acc">
        Already have an account?<Link to="/login"> Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
