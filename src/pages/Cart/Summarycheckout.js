import "./Cart.css";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext";
import { Admincontext } from "../../Context/Admincontext";
import PayButton from "../../Components/PayButton";
import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Usercontext } from "../../Context/Usercontext";

function Summarycheckout() {
  
  const [total, setTotal] = useState(0);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const { email, FirstName } = useContext(Usercontext);

  useEffect(() => {
    const total = cart.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.Price * currentItem.quantity;
    }, 0);
    setTotal(total);
  });

  const config = {
    public_key: "FLWPUBK_TEST-a1b6da68cb4605a439d09966de695a24-X",
    tx_ref: Date.now(),
    redirect_url:'/men',
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: "070********",
      name: FirstName,
    },
    customizations: {
      title: "Yeffso Feet",
      description: "Payment for items in cart",
      logo: "https://i.ibb.co/PtsFXxq/yeffsolo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <>
      <div className="cart-right-new">
        <div className="order-sum">
          <p>Order Summary</p>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="cart-sum-second">
          <p>Item's total ({productsCount}) :</p>

          <p>₦ {total}</p>
        </div>
        <div className="cart-sum-second">
          <p>Subtotal:</p>

          <p>₦ {total}</p>
        </div>
        <div className="cart-sum-second">
          <p>Delivery fees:</p>

          <p>₦ 1000</p>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="cart-sum-next">
          <p>Total:</p>
          <p>₦ {total}</p>
        </div>
        <hr style={{ width: "100%" }} />
        <p style={{ fontSize: "12px" }}>Including delivery charges</p>
       
       
        <FlutterWaveButton className="btn-checkout" {...fwConfig} />
    
      
      </div>
    </>
  );
}

export default Summarycheckout;
