import { Lock, Mail, Person } from "@material-ui/icons";
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const loginData = [
    {
      loginMethod: "Hello",
      password: "",
    },
  ];

  const signupData = [
    {
      fName: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  ];

  const [loginDetails, setLoginDetails] = useState(loginData);
  const [signUpDetails, setSignUpDetails] = useState(signupData);

  const [flip, setFlip] = useState(false);

  console.log(loginDetails[0]?.loginMethod);

  return (
    <section className="form-container">
      <div className={flip ? "card flipped" : "card"}>
        <div
          className="front gradient "
          style={flip ? { pointerEvent: "none" } : null}
        >
          <header>Login</header>
          <form action="#">
            <div className="field">
              <Person className="input__svg" />
              <input
                type="text"
                value={loginData.email}
                required
                placeholder="Email or Phone"
                onChange={(e) =>
                  setLoginDetails((loginData.email = e.target.value))
                }
              />
            </div>
            <div className="field space">
              <Lock className="input__svg" />
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
              />
              <span className="show">SHOW</span>
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="field">
              {flip ? null : (
                <input className="button" type="submit" value="LOGIN" />
              )}
            </div>
          </form>
          <div className="login">Or login with</div>
          <div className="links">
            <div className="links-icon links-icon-fill">
              <i className="fab fa-google"></i>
            </div>
            <div className="links-icon links-icon-fill">
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>
          <div className="signup">
            Don't have account ?{" "}
            <span
              onClick={() => {
                setFlip(!flip);
              }}
            >
              Signup Now
            </span>
          </div>
        </div>
        <div className="back ">
          <header>Sign Up</header>
          <form action="#">
            <div className="field">
              <Person className="input__svg" />
              <input type="text" required placeholder="Full Name" />
            </div>
            <div className="field space">
              <Mail className="input__svg" />
              <input type="text" required placeholder="Email" />
            </div>
            <div className="field space">
              <Lock className="input__svg" />
              <input type="text" required placeholder="Password" />
            </div>
            <div className="field space">
              <Lock className="input__svg" />
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Confirm Password"
              />
            </div>
            <br />
            <div className="field ">
              <input className="button" type="submit" value="SIGN UP" />
            </div>
          </form>
          <br />
          <div className="signup">
            Already Have an Account ?{" "}
            <span
              onClick={() => {
                setFlip(!flip);
              }}
            >
              Login Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
