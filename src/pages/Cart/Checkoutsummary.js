import React, { useContext, useEffect, useState } from "react";
import Checkoutheader from "./Checkoutheader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { CartContext } from "../../Context/Cartcontext";
import Checkoutitems from "./Checkoutitems";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Summarycheckout from "./Summarycheckout";
import axios from "axios";
import { Usercontext } from "../../Context/Usercontext";
import Checkoutmobilesummary from "./Checkoutmobilesummary";

function Checkoutsummary() {
  const { FirstName, Auth, userid } = useContext(Usercontext);
  const { id } = useParams();

  console.log(userid);
  const cart = useContext(CartContext);
  const [userProfile, setUserProfile] = useState("");
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/` + id)
      .then((res) => {
        setUserProfile(res.data[0]);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Checkoutheader />

      <div className="Checkout-body">
        <div className="style-bend">
          <div className="Checkout-left">
            <div className="Checkout-left-top">
              <p>
                <CheckCircleIcon
                  style={{ color: "rgb(123, 203, 3)", fontSize: "20px" }}
                />
                1. CUSTOMER ADDRESS
              </p>
              <div style={{ color: "#ea1179" }}>
                <Link
                  style={{ textDecoration: "none", color: "#ea1179" }}
                  to={`/Account/Profile/${userid}`}
                >
                  CHANGE
                </Link>
                <DoubleArrowIcon style={{ fontSize: "15px" }} />
              </div>
            </div>
            <hr className="check-line-new" />
            <div className="Checkout-left-bottom">
              <p style={{ fontSize: "15px" }}>
                
                {!loading && (
                  <div>
                    <span>{userProfile.FirstName} </span>
                    <span>{userProfile.LastName} </span>
                  </div>
                )}
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "12px",
                  paddingBottom: "20px",
                }}
              >
                {!loading && (
                  <p>
                    {userProfile.Dstreet}, {userProfile.Ddirection},
                    {userProfile.Dcity} | {userProfile.Dstate} |
                    {userProfile.DphoneNumber}
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="second-bottom">
            <div className="Checkout-left-top">
              <p>
                <CheckCircleIcon
                  style={{ color: "rgb(123, 203, 3)", fontSize: "20px" }}
                />{" "}
                2. DELIVERY DETAILS
              </p>
              <div style={{ color: "#ea1179" }}>
                <Link
                  style={{ textDecoration: "none", color: "#ea1179" }}
                  to={`/Account/delivery-addresses/${userid}`}
                >
                  {" "}
                  CHANGE
                </Link>

                <DoubleArrowIcon style={{ fontSize: "15px" }} />
              </div>
            </div>
            <div style={{ display:'flex', fontSize:'12px', justifyContent:'space-between', paddingLeft:'20px', paddingRight:'20px' }}><p style={{ fontWeight:'600' }}>Shipment </p> <p style={{ color:'grey' }}>Fulfilled by YeffsoFeet</p></div>
            <hr className="check-line-new" />
            <div className="Checkout-left-bottom">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "grey",
                    fontSize: "12px",
                    paddingBottom: "20px",
                  }}
                >
                  Delivery between{" "}
                  <span className="span-check">
                    
                    (3 - 7 Business days Estimated)
                  </span>
                </p>

                <Link
                  to="/Cart-list"
                  style={{
                    color: "#ea1179",
                    textDecoration: "none",
                    fontSize: "13px",
                  }}
                >
                  Modify Cart
                </Link>
              </div>
              <div>
                <Checkoutitems />
              </div>
            </div>
          </div>
          <div style={{ background: "white", marginTop: "10px" }}>
            <div className="Checkout-left-top">
              <p>
                <CheckCircleIcon
                  style={{ color: "rgb(123, 203, 3)", fontSize: "20px" }}
                />
                3. PAYMENT METHOD
              </p>
            </div>
            <hr className="check-line-new" />
            <div className="Checkout-left-bottom">
              <p style={{ fontSize: "15px" }}>
                Pay with Cards, Bank Transfer or USSD
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "12px",
                  paddingBottom: "20px",
                }}
              >
                You will be redirected to our secure checkout page
              </p>
            </div>
            <hr className="check-line-new" />
            <div className="jigi-style">
              <Checkoutmobilesummary />
            </div>
          </div>
          <Link
            to="/Cart-list"
            className="go-back-style"
            style={{
              fontSize: "12px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#264996",
            }}
          >
            
            <ArrowBackIosNewIcon style={{ fontSize: "12px" }} /> Go back &
            continue shopping
          </Link>
        </div>
        <div className="Checkout-right">
          <Summarycheckout />
        </div>
      </div>
    </div>
  );
}

export default Checkoutsummary;
