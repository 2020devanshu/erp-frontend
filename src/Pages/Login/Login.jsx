import React from "react";
import LoginForm from "../../Components/Loginform/LoginForm";
import { ReactComponent as Lamp } from "../../Assets/svg/lamp_1.svg";
import { ReactComponent as Desk } from "../../Assets/svg/desk.svg";
import "./Login.css";
import SnapScroll from "../../Components/SnapScroll/SnapScroll";

const Login = () => {
  return (
    <SnapScroll>
      <div className="login-container login-mobile section">
        <Lamp className="lamp__svg" />
        <Desk className="desk__svg" />
        {/* <CoffeeMug className="mug__svg" /> */}
        <LoginForm />
      </div>
    </SnapScroll>
  );
};

export default Login;
