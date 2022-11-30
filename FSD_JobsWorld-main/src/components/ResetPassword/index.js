import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../firebase";
import "./index.css";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/home");
  }, [user, loading]);
  return (
    <div className="reset-password-container">
      <h2 className="reset-password-heading">Forgot Password</h2>
      <input
        type="text"
        className="reset-password-email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <button
        className="reset-email-btn"
        onClick={() => sendPasswordResetEmail(email)}
      >
        Reset
      </button>
      <div>
        Don't have an account?{" "}
        <Link to="/register" className="reset-password-register-link">
          Register
        </Link>{" "}
        now.
      </div>
    </div>
  );
};
export default Reset;
