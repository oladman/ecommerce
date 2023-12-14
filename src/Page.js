import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import Category from "./pages/Men/Mencategory";
import axios from "axios";



function Page() {
  const { id } = useParams();
  const [FakeData, setFakeData] = useState("")
 
  useEffect(() => {
   
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/men/`+id)
    .then((res) => { 
  console.log(res.data)
      setFakeData(res.data[0]) })
     
    .catch((err) => {console.log(err)})
  }, [])

  return (
    <>
      <div className="Page-header">
        <div className="header-holder">
          <p>
            Home <span> &gt; </span> Men <span> &gt; </span> Shoes and Store
          </p>
          <h1>{FakeData.ProductName}</h1>
        </div>
      </div>

      <div className="Page">
        <div className="Page-left">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/images/`+FakeData.ProductAttach}/>
        </div>

        <div className="Page-right">
          <div className="Page-section-up">
            <h4 className="Page-name">{FakeData.ProductName}</h4>
            <div className="brand-name">
              <p>Brand:</p> Yeffso
            </div>
            <hr className="hr-line" />
            <p className="Brand-Price">#{FakeData.Price}</p>
            <hr className="hr-line" />
          </div>
          <div className="Page-section">
            <div className="Page-section-text">
              <div className="page-text-1">
                <p>Colour:</p> <div className="color-value">{FakeData.Color}</div>
              </div>
              <div className="page-text-1">
                <p>Size:</p> <div className="size-color-value">45</div>{" "}
              </div>
              <div className="page-text-1">
                
                <p>Quantity:</p>
                <div className="quan-body">
                  <div>
                    <RemoveIcon style={{ fontSize: "17px" }} />
                  </div>
                  <div>1</div>
                  <div>
                    <AddIcon style={{ fontSize: "17px" }} />
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="bulk-purchase">
              <p> Call us for bulk purchases:</p> Click here to show phone
              number
            </div>
            <hr className="hr-line" />
          <button className="btn">BUY NOW</button>
            <hr className="hr-line" />
            <div className="Share-friends">
              <div>Share With Friends</div>
              <div className="Share-icon">
                <div>
                  <FacebookIcon style={{ color: "blue" }} />
                </div>
                <div>
                  <TwitterIcon style={{ color: "#1D9BF0" }} />
                </div>
                <div>
                  <WhatsAppIcon style={{ color: "#25D366" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <h3>Product Details</h3>
        <hr className="hr-line" />
        <p>{FakeData.ProductDetails}</p>
        <hr className="hr-line" />
        <div className="Page-ship">
          <h4>Shipping</h4>
          <div className="Page-ship-icon">
            <LocalShippingOutlinedIcon
              className="icon-ship-page"
              style={{ fontSize: "40px" }}
            />
            <div className="Page-delivery">
              <p style={{ fontWeight:'600' }}>Delivery</p>
              <p style={{ color: "grey" }}>
                Estimated delivery time: 1 - 7 days
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="Page-ship">
          <h4>Return Policy</h4>
          <div className="Page-ship-icon">
            <CurrencyExchangeOutlinedIcon
              className="icon-ship-page"
              style={{ fontSize: "40px" }}
            />
            <div className="Page-delivery">
              <p style={{ fontWeight:'600' }}>7 Day Return Guarantee</p>
              <p style={{ color: "grey", display:'flex', alignItems:'center'}}>
              For more information on the return shipping options, go to  <p style={{ color:'#ea1179', margin:'0'}}>  Yeffso Return Policy</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{ paddingLeft:'50px' }}> Similar Items You May Like</h3>
      <div className="Cat-Scroll" style={{ paddingLeft:'50px', paddingRight:'50px' }}>
         
        </div>
    </>
  );
}

export default Page;
