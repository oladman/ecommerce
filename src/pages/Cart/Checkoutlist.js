import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/Cartcontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function Checkoutlist({ product }) {
  const { id, ProductName, ProductAttach, Color, Price, quantity } = product;
  const cart = useContext(CartContext);
  const productQuantity = cart.GetProductQuantity(id);

  return (
    <div className="checkout-list">
      
          <Link to={`/Products/${id}`}><img
              className="check-img"
              src={`${process.env.REACT_APP_BACKEND_URL}/images/` + ProductAttach}
            /> </Link>
          
          <div className="checkout-listext"><Link  style={{ textDecoration:'none', color:'#4a4a4a' }} to={`/Products/${id}`}>{ProductName}</Link> QTY: {quantity}</div>

              
          
          
    </div>
  );
}

export default Checkoutlist;
