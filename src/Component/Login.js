import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Component/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history =useHistory()
  const signIn = async (e) => {
    e.preventDefault()
    // console.log(email, password);
    
      let result = await fetch("https://smhm.fusionaudios.in/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
         "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      // console.log("type line 21",result);
      result = await result.json();
      // console.log('line 23',result);

    localStorage.setItem("user-info",JSON.stringify({email,password}))
    history.push('/rooms')
  };
  return (
    <div className="login">
      <div className="login__Icon">
        <img src={process.env.PUBLIC_URL + "/Image/LOGO.png"} alt="" />
        <p>Smart Home</p>
      </div>
      <form action="https://smhm.fusionaudios.in/api/admin/login" method="post">
        <div className="login__input">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="login__button">
          <button type='submit' className="My__button"  onClick={signIn}>
            Enter Your House
          </button>
          <button className="My__button  my__button__2">New Resident</button>
        </div>
      </form>
      <div className="login__footer">
        <p>Forgot password? </p>
        <p className="login__footerPara"> click me</p>
      </div>
    </div>
  );
};

export default Login;
