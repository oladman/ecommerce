import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import axios from "axios";
import { CartContext } from "../Context/Cartcontext";
import DeleteIcon from '@mui/icons-material/Delete';
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share'
import CallIcon from '@mui/icons-material/Call';



function Products() {
  const { id } = useParams();
  const [product, setproduct] = useState("");
  const cart = useContext(CartContext);
  const productQuantity = cart.GetProductQuantity(product.id);
  const clocationurl = window.location.href


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/Products/`+id)
      .then((res) => {
        setproduct(res.data[0])
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const amount = product.Price
  return (
    <>
     

      <div className="Page">
        <div className="Page-left">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/images/` + product.ProductAttach} />
        </div>

        <div className="Page-right">
          <div className="Page-section-up">
            <h4 className="Page-name">{product.ProductName}</h4>
            <div className="brand-name">
              <p>Brand:</p> Yeffso
            </div>
            <hr className="hr-line" />
            <div className="del-style-design"><p className="Brand-Price">₦ {product.Price}</p> <del className='del-style-new'>₦ {parseInt(amount) + 5000}.00</del></div>
            <hr className="hr-line" />
          </div>
          <div className="Page-section">
            <div className="Page-section-text">
              <div className="page-text-1">
                <p>Colour:</p>
                <div className="color-value">{product.Color}</div>
              </div>
              <div className="page-text-1">
                <p>Size:</p> <div className="size-color-value">45</div>{" "}
              </div>
              <div className="page-text-1">
                <p>Quantity:</p>
                <div className="quan-body">
                  <div>
                    <RemoveIcon onClick={() => {cart.RemoveonefromCart(product, product.id)}} style={{ fontSize: "17px" }} />
                  </div>
                  <div>{productQuantity}</div>
                  <div>
                    <AddIcon onClick={() => {cart.AddonetoCart(product, product.id)}} style={{ fontSize: "17px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bulk-purchase">
              <p> Call us for bulk purchases:</p> 
              <Link style={{ textDecoration:'none', color:'black' }} to="tel:+2348142622487">Call on 08142622487</Link>
            </div>
            <hr className="hr-line" />
           <div className="call-to-order"><Link to="tel:+2348142622487"><CallIcon style={{ color:'#ea1179', border:'1px solid #ea1179', borderRadius:'5px', padding:'5px' }}/></Link>  {productQuantity> 0 ? (
              <div className="instead-style"><p>In cart: {productQuantity} </p> <button  className="btn-style-cart" onClick={() => {cart.AddonetoCart(product, product.id)}}><AddIcon style={{ fontSize:'17px' }}/></button> <button className="btn-style-cart" onClick={()=>{cart.RemoveonefromCart(product, product.id)}}><RemoveIcon style={{ fontSize:'17px' }}/></button> 
              <Link style={{ color: "#9a0052", textDecoration:'none' }} className="delete-cart-style" onClick={()=> {cart.DeleteCart(product.id)}}> <DeleteIcon style={{ color:'#9a0052' }}/> REMOVE </Link></div>
            ) : (
              <button  className="btn" onClick={() => {cart.AddonetoCart(product, product.id)}}>ADD TO CART</button>
            )}</div>
            <hr className="hr-line" />
            <div className="Share-friends">
              <div>Share With Friends</div>
              <div className="Share-icon">
                <div>
                <FacebookShareButton url={clocationurl}> <FacebookIcon style={{ color: "blue" }} /></FacebookShareButton>
                     
                </div>
                <div>
                  <TwitterShareButton url={clocationurl} > <TwitterIcon style={{ color: "#1D9BF0" }} /></TwitterShareButton>
                </div>
                <div>
                 <WhatsappShareButton url={clocationurl} ><WhatsAppIcon style={{ color: "#25D366" }} /></WhatsappShareButton> 
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="page-footer">
        <h3>Product Details</h3>
        <hr className="hr-line" />
        <p>{product.ProductDetails}</p>
        <hr className="hr-line" />
        <div className="Page-ship">
          <h4>Shipping</h4>
          <div className="Page-ship-icon">
            <LocalShippingOutlinedIcon
              className="icon-ship-page"
              style={{ fontSize: "40px" }}
            />
            <div className="Page-delivery">
              <p style={{ fontWeight: "600" }}>Delivery</p>
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
              <p style={{ fontWeight: "600" }}>7 Day Return Guarantee</p>
              <p
                style={{ color: "grey", display: "flex", alignItems: "center" }}
              >
                For more information on the return shipping options, go to{" "}
                <p style={{ color: "#ea1179", margin: "0" }}>
                  {" "}
                  Yeffso Return Policy
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{ paddingLeft: "50px" }}> Similar Items You May Like</h3>
      <div
        className="Cat-Scroll"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      ></div>
    </>
  );
}

export default Products;
