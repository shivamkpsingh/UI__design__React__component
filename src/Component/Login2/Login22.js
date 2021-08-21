import React, { useState } from "react";

const Login22 = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const login=()=>{
    
   setTimeout(() => {
    fetch('https://smhm.fusionaudios.in/api/admin/login',{
      method:"POST",
      body:JSON.stringify({email,password})
    }).then((response)=>{
      response.json().then((result)=>{
        console.log('result line 14',result);
        localStorage.setItem("login",JSON.stringify({
          token:result.token
        }))
        
      })
    })
   },5000);
    
    
}
  return (
    <div>
      <form action="https://smhm.fusionaudios.in/api/admin/login" method="post">
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
        <button type="submit"  onClick={login}>submit</button>
      </form>
    </div>
  );
};

export default Login22;
