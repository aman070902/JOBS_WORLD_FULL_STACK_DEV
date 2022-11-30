import "./index.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Signup() {
  const [isContainerActive, setIsContainerActive] = useState(true);
  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  const [employeSignUp, setEmployeSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleEmployeSignUpNameChange = (event) => {
    setEmployeSignUp({ ...employeSignUp, name: event.target.value });
  };
  const handleEmployeSignUpEmailChange = (event) => {
    setEmployeSignUp({ ...employeSignUp, email: event.target.value });
  };
  const handleEmployeSignUpPasswordChange = (event) => {
    setEmployeSignUp({ ...employeSignUp, password: event.target.value });
  };

  const [employeLogin, setEmployeLogin] = useState({
    email: "",
    password: "",
  });
  const handleEmployeLoginEmailChange = (event) => {
    setEmployeLogin({ ...employeLogin, email: event.target.value });
  };
  const handleEmployeLoginPasswordChange = (event) => {
    setEmployeLogin({ ...employeLogin, password: event.target.value });
  };

  // const [submitted, setSubmitted] = useState(false);
  // const [valid, setValid] = useState(false);

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    // if (employeSignUp.name && employeSignUp.email && employeSignUp.password) {
    //   setValid(true);
    // }
    // setSubmitted(true);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // if (employeLogin.email && employeLogin.password) {
    //   setValid(true);
    // }
    // setSubmitted(true);
  };

  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);

  const register = () => {
    if (!employeSignUp.name) alert("Please enter name");
    registerWithEmailAndPassword(
      employeSignUp.name,
      employeSignUp.email,
      employeSignUp.password
    );
  };

  return (
    <div className="loginbody">
      <h2 className="heading">Begin Your journey as an Employee</h2>
      <div
        className={`logincontainer${
          isContainerActive ? " right-panel-active" : ""
        }`}
        id="logincontainer"
      >
        <div className="loginform-container sign-up-container">
          <form action="#" onSubmit={handleSubmitSignUp} className="loginform">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="loginSpan">
              or use your email for registration
            </span>
            <input
              required
              type="text"
              className="logininput"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleEmployeSignUpNameChange}
            />
            <input
              required
              type="email"
              className="logininput"
              name="email"
              id="email-signup"
              placeholder="Email"
              onChange={handleEmployeSignUpEmailChange}
            />
            <input
              required
              type="password"
              className="logininput"
              name="password"
              id="password-signup"
              placeholder="Password"
              onChange={handleEmployeSignUpPasswordChange}
            />
            <button className="loginbutton" onClick={register}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="loginform-container sign-in-container">
          <form action="#" onSubmit={handleSubmitLogin} className="loginform">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social logina" onClick={signInWithGoogle}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="loginSpan">or use your account</span>
            <input
              required
              type="email"
              className="logininput"
              name="email"
              id="email-login"
              placeholder="Email"
              onChange={handleEmployeLoginEmailChange}
            />
            <input
              required
              type="password"
              className="logininput"
              name="password"
              id="password-login"
              placeholder="Password"
              onChange={handleEmployeLoginPasswordChange}
            />
            <a href="/reset" className="logina">
              Forgot your password?
            </a>
            <button
              className="loginbutton"
              onClick={() =>
                signInWithEmailAndPassword(
                  employeLogin.email,
                  employeLogin.password
                )
              }
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="loginoverlay-container">
          <div className="loginoverlay">
            <div className="loginoverlay-panel loginoverlay-left">
              <h1>Welcome Back!</h1>
              <p className="loginPara">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost loginbutton"
                id="signIn"
                onClick={signInButton}
              >
                Sign In
              </button>
            </div>
            <div className="loginoverlay-panel loginoverlay-right">
              <h1>Hello, Friend!</h1>
              <p className="loginPara">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost loginbutton"
                id="signUp"
                onClick={signUpButton}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
