import React, { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../Context/Usercontext";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "../Profile/Profile.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';



function Account() {
  const { FirstName, Auth, userid } = useContext(Usercontext);
  const { id } = userid;
 

  return (
    <div className="overall-overall">
      <div className="header-wrapper-page">
        <div className="Page-header">
          <div className="header-holder">
            <p className="part-hide">
              Home <span> &gt; </span> Account <span> &gt; </span>
              <span style={{ color: "#9a0052" }}>My Profile</span>
            </p>
            <h1>Account Information</h1>
          </div>
        </div>
      </div>
<div className="overall-profile">
      <div className="hide-from-mobile">
        <div className="profile-style">
          <div className="cover-style"><div className="icon-profile-style" >
            <PersonIcon />
            My Profile
          </div>
          <div style={{ marginLeft: "50px", marginTop:'10px' }} className="profile-account">
            <Link style={{ textDecoration:'none', fontSize:'13px', color: '#4a4a4a', marginBottom:'10px' }} to={`Profile/${userid}`} >Account Information</Link>
            <Link to={`delivery-addresses/${userid}`} style={{ textDecoration:'none',  fontSize:'13px', color: '#4a4a4a' }} >Delivery Address</Link>
          </div></div>
          <hr className="line-cart" />
          <div className="cover-style"> <div className="icon-profile-style">
            <ShoppingBagIcon/>
            My Orders
          </div>
          <div style={{ marginLeft: "50px" }} className="profile-account">
            <p>Order History</p>
            <p>Pending Ratings</p>
          </div> </div>
          <hr className="line-cart" />
          <div className="cover-style"><div className="icon-profile-style">
            <PersonRemoveIcon/>
            Delete Account
          </div>
          <div style={{ marginLeft: "50px" }} className="profile-account">
            <p>Delete Account</p>
            
            
          </div> </div>
          
        </div>
      </div>

      
       <Outlet   />
      

      </div>

      


     
    </div>
  );
}

export default Account;
