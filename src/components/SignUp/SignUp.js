import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  //   getting or receiving data from the usercontext file
  const { createUser } = useContext(AuthContext);

  // event handler to get the form data
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    // email and password validation
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("password did not match");
      return;
    }
    console.log(email, password, confirmPassword);

    // auth integration
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-info">
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
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="new-acc">
        Already have an account?<Link to="/login"> Log in</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
