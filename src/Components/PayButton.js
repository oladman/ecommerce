import axios from "axios";
import { CartContext } from "../Context/Cartcontext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Admincontext } from "../Context/Admincontext";

function PayButton({ cartItems, User }) {
  const { name, Auth } = useState(Admincontext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.Price * currentItem.quantity;
    }, 0);
    setTotal(total);
  });

  const cart = useContext(CartContext);

  const handleSubmit = () => {
    console.log(cartItems);
    console.log(name, Auth)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}`)
    
   
  };

  return (
    <>
      <button onClick={() => handleSubmit()} className="btn-checkout">
        COMFIRM ORDER
      </button>
    </>
  );
}

export default PayButton;
