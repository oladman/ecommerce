import axios from "axios";
import { CartContext } from "../Context/Cartcontext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Admincontext } from "../Context/Admincontext";
import { Usercontext } from "../Context/Usercontext";
 

function PayButtonReview({ cartItems, User }) {
  const {userid} = useContext(Usercontext);
  const id = userid
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.Price * currentItem.quantity;
    }, 0);
    setTotal(total);
  });

  const cart = useContext(CartContext);

 

  return (
    <>
      <Link  to={`/checkout-summary/${id}`} style={{ textDecoration:'none' }} className="btn-checkout">
        CHECKOUT (₦ {total})
      </Link>
    </>
  );
}

export default PayButtonReview;
