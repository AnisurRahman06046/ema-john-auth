import React, { useContext } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";

const LogIn = () => {
  // receiving the data from the contextUser
  const { logIn } = useContext(AuthContext);

  //   navigate to home page after login
  const navigate = useNavigate();

  //   get the location to redirect
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   event handler to get the form data
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // auth integration
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form onSubmit={handleSubmit} className="form-info">
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
