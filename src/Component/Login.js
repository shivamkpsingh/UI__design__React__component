import React from "react";
import { Link } from "react-router-dom";
import "../Component/Login.css";
// import { Link } from "react-router-dom";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Login = () => {
  return (
    <div className="login">
      <div className="login__Icon">
        <img src={process.env.PUBLIC_URL + "/Image/LOGO.png"} alt="" />
        <p>Smart Home</p>
      </div>
      <div className="login__input">
        <input type="text" name="" id="" placeholder="Username" />
        <input type="text" name="" id="" placeholder="Password" />
      </div>
      <div className="login__button">
        <Link to="/room">
          <Button1 className="button1" />
        </Link>

        <Button2 className="button1" />
      </div>
      <div className="login__footer">
        <p>Forgot password? </p>
        <p className="login__footerPara"> click me</p>
      </div>
    </div>
  );
};

export default Login;
