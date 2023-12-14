import React, { useState } from "react";
import './Login.css'
import "../Signup/Signup.css";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

function Login() {
  const [RegValue, setRegValue]= useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, RegValue)
    .then(res =>{

      if(res.data.Status === "Success"){
          navigate(0)

          console.log(res)
      } else {
        console.log(res)
        alert("Error")
      }
      
    })
    .then(err=> console.log(err))


  }
 
  return (
    <div className="overal-login">
    <div className="login-cover">     
            <img src="./yeffssofeet.jpg" className="image-page-sign" />
            <h1>Login</h1>
            <hr style={{ width: "100%" }} className="sign-line" />
          <form  style={{ width:'100%' }} onSubmit={handleSubmit}>
            <div className="input-login">
          <label htmlFor="email" id="">
            Email Address
          </label>
          <input style={{ padding:'10px'  }}
            type="email" name="email" onChange={e => setRegValue({...RegValue, email: e.target.value})}
            placeholder="Enter Email Address"
          /> </div>
           <div className="input-login">
          <label htmlFor="email" id="">
           Password
          </label>
          <input style={{ padding:'10px' }}
            type="password" name="password" onChange={e => setRegValue({...RegValue, password: e.target.value})}
            placeholder="Enter Password"
          /> </div>
          <div className="btn-login-style"> <button className="login-btn">Login</button> </div>
            </form>
          <div className="btn-btn-btn">
            <div style={{ width:'100%' }}>

              <p className="dont-have-account">Don't have an Account?</p>
              <div className="btn-login-style">  <Link to={"/Signup"} className="Link-signup-login">Create an Account</Link> </div>
            </div>
          </div>
      
          </div>
          </div>
  );
}

export default Login;
