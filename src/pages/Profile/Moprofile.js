import React, { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../Context/Usercontext";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "../Profile/Profile.css";
import { Admincontext } from "../../Context/Admincontext";
import Admin from "../../Admin/Admin";
import Swal from 'sweetalert2'

function Moprofile({id}) {
  const { userid, name } = useContext(Usercontext);
  console.log('moprofileid', id)
  const [userProfile, setUserProfile] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Password:"",
  });

 
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/`+id)
      .then((res) => {
        setUserProfile({...userProfile, FirstName:res.data[0].FirstName, LastName:res.data[0].LastName, Email:res.data[0].Email, PhoneNumber:res.data[0].PhoneNumber});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();


    axios
    .put(`${process.env.REACT_APP_BACKEND_URL}/users/profile/edit/`+id, userProfile)
    .then((res) => {
      console.log(res.data)
      navigate(0)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Profile Updated Successfully'
      })
    })
    .then((err) => console.log(err));
  
  }
  return (
    <div className="left-profile">
      <p>Account Information</p>
      <hr className="line-cart" />
      <form className="form-profile" onSubmit={handleSubmit}>
        <div className="single-profile-input">
          <label htmlFor="FirstName">First Name</label>
          <input onChange={(e) => setUserProfile({...userProfile, FirstName: e.target.value})}
            value={userProfile.FirstName}
            style={{ padding: "10px" }}
            type="text"
            name="FirstName"
          />
        </div>
        <div className="single-profile-input">
          <label htmlFor="LastName">Last Name</label>
          <input onChange={(e) => setUserProfile({...userProfile, LastName: e.target.value})}
            value={userProfile.LastName}
            style={{ padding: "10px" }}
            type="text"
            name="LastName"
          />
        </div>
        <div className="single-profile-input">
          <label htmlFor="email">Email Address</label>
          <input onChange={(e) => setUserProfile({...userProfile, Email: e.target.value})}
            value={userProfile.Email}
            style={{ padding: "10px" }}
            type="text"
            name="email"
          />
        </div>
        <div className="single-profile-input">
          <label htmlFor="phone">Phone Number</label>
          <input onChange={(e) => setUserProfile({...userProfile, PhoneNumber: e.target.value})}
            value={userProfile.PhoneNumber}
            style={{ padding: "10px" }}
            type="number"
            name="phone"
          />
        </div>
        <div className="single-profile-input">
          <label htmlFor="password">Current Password</label>
          <input style={{ padding: "10px" }} type="text" name="password" />
        </div>
        <div className="single-profile-input">
          <label htmlFor="passwod">New Password</label>
          <input style={{ padding: "10px" }} type="text" name="password" />
        </div>
        <div className="single-profile-input">
          <label htmlFor="password">Confirm Password</label>
          <input style={{ padding: "10px" }} type="text" name="password" />
        </div>
        <div className="btn-profile-style">
          <button className="button-profile">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default Moprofile;
