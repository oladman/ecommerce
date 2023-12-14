import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import Cart from "./Cart";
import CartSummary from "./Cart-summary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CartContext } from "../../Context/Cartcontext";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { Link } from "react-router-dom";

function Cartlist() {
  const [total, setTotal] = useState(0);
  const cart = useContext(CartContext);
  console.log(cart.items);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    const total = cart.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.Price * currentItem.quantity;
    }, 0);
    setTotal(total);
  });
  return (
    <div style={{ marginTop:'50px' }}>
   
      {productsCount > 0 ? (
        <div>
         
          <div className="header-wrapper-page">
            <div className="Page-header">
              <div className="header-holder">
                <p className="part-hide">
                  Home <span> &gt; </span>{" "}
                  <span style={{ color: "#9a0052" }}>Shopping Cart</span>
                </p>
                <h1>Shopping Cart</h1>
              </div>
            </div>

            <button className="btn-cart">
              <ArrowBackIcon
                className="btn-cart-arrow"
                style={{ fontSize: "15px" }}
              />
              Continue Shopping
            </button>
          </div>
          <div className="new-Table-cart">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div className="cart-i"><h3>Cart Items </h3></div>
              <p className="count-i" >({productsCount})</p>
            </div>
            <div style={{ display:'flex', alignItems:'center ', gap:'5px' }}><p style={{ fontWeight:'600' }} >Subtotal: </p><span>₦{total}</span> </div>
          </div>
          
          <div className="Cart-summary">
            <Cart />
            <CartSummary />
            <button className="btn-checkout-mobile">
              <Link
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/"
              >
                CHCEKOUT (₦{total})
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-cart-background">
          <div className="empty-cart">
            <RemoveShoppingCartOutlinedIcon
              style={{ fontSize: "70px", color: "#ea1179" }}
            />
            <p style={{ fontWeight: "700" }}>Your cart is empty.</p>
            <p style={{ fontSize: "14px" }}>
              You have not added any item to your cart.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartlist;
