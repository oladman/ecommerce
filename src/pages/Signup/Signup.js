import React, { useState } from "react";
import "../Signup/Signup.css";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';



function Signup() {

  const schema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname:yup.string().required("Last Name is Required"),
    email:yup.string().email("Email must be a valid Email").required("Email Field is Required"),
    phonenumber:yup.number("").positive("").required(),
    password:yup.string().required("Password is a required Field"),
   
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    password:"",
    role:"user"
    }
  });

  const navigate = useNavigate()
  const onSubmit = (data) =>{
    console.log(data)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, data)
    .then(res =>{
      if(res.data.Status === "Success"){
          navigate('/login')
      } else {
   
        alert("Cannot Register")
      }
      
    })
    .then(err=> console.log(err))

  }


 
  return (
    <div className="overal-logins">
    <div className="login-covers">     
            <img src="./yeffssofeet.jpg" className="image-page-signs" />
            <h1>Create An Account</h1>
            <hr style={{ width: "100%" }} className="sign-lines" />
          <form  style={{ width:'100%' }} onSubmit={handleSubmit(onSubmit)}>
            <div className="input-logins" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
            First Name
          </label>
          <input style={{ padding:'10px'  }}
            type="text" name="firstname" {...register("firstname")}
            placeholder="Enter First Name"
          />
          <p className="erros-diss" >{errors.firstname?.message}</p>
          
           </div>
           <div className="input-logins">
          <label htmlFor="lastname" id="">
           Last Name
          </label>
          <input style={{ padding:'10px' }}
            type="text" name="lastname" {...register("lastname")}
            placeholder="Enter Password"
          />
           <p className="erros-diss" >{errors.lastname?.message}</p>
           </div>
          <div className="input-logins">
          <label htmlFor="lastname" id="">
           Email
          </label>
          <input style={{ padding:'10px' }}
            type="email" name="email" {...register("email")}
            placeholder="Enter Email Address"
          />
           <p className="erros-diss" >{errors.email?.message}</p>
          
           </div>
           <div className="input-logins">
          <label htmlFor="phonenumber" id="">
           Phone Number
          </label>
          <input style={{ padding:'10px' }}
            type="number" name="phonenumber" {...register("phonenumber")}
            placeholder="Enter Phone Number"
          />
           <p className="erros-diss" >{errors.phonenumber?.message}</p>
           </div>
           <div className="input-logins">
          <label htmlFor="phonenumber" id="">
           Password
          </label>
          <input style={{ padding:'10px' }}
            type="password" name="password" {...register("password")}
            placeholder="Enter Password"
          /> </div>
          <div className="btn-login-style"> <button className="login-btns">Create An Account</button> </div>
            </form>
          <div className="btn-btn-btns">
            <div style={{ width:'100%' }}>

              <p className="dont-have-accounts">Already have an Account?</p>
              <div className="btn-login-style"><Link to={"/login"} className="Link-signup-logins">Login</Link> </div>
            </div>
          </div>
      
          </div>
          </div>
  );
}

export default Signup;
