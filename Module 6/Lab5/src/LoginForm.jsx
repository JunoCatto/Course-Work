import { useState } from "react";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [passwordAttempts, setPasswordAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    if (!userEmail.includes("@")) {
      setSubmitResult("Email address must contain '@'");
    } // add some password validation
    else if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setPasswordAttempts(passwordAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setPasswordAttempts(passwordAttempts + 1);
    } else {
      setSubmitResult("Successful login.");
    }

    if (passwordAttempts > 3) {
      setSubmitResult(
        `${passwordAttempts} incorrect password attempts. Please wait 5 seconds before trying again.`
      );
      setTimeout(() => {
        setPasswordAttempts(0), setSubmitResult("");
      }, 5000);
    }
  };
  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="LoginForm componentBox">
          <div className="formRow">
            <label>
              Email Address:
              {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target
value.
Whenever user types, new value is stored in state. */}
              <input
                type="text"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
