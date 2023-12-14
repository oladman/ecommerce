import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/Cartcontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function Cartitems({ product }) {
  const { id, ProductName, ProductAttach, Color, Price, quantity } = product;
  const cart = useContext(CartContext);
  const productQuantity = cart.GetProductQuantity(id);

  return (
    <div className="ul-list-main">
      <ul className="ul-list">
        <div className="left-li">
          <li className="li-cart">
          <Link to={`/Products/${id}`}><img
              className="cart-list-image"
              src={`${process.env.REACT_APP_BACKEND_URL}/images/` + ProductAttach}
            /> </Link>
          </li>
          <li className="">
            <p className="table-title"><Link  style={{ textDecoration:'none', color:'#4a4a4a' }} to={`/Products/${id}`}>{ProductName}</Link></p>
          </li>
        </div>

        <div className="middle-cart-item">
          <li className="li-cart-mid">
            <div className="quan-body-table">
              <div>
                <RemoveIcon
                  onClick={() => {
                    cart.RemoveonefromCart(product, id);
                  }}
                  style={{ fontSize: "17px" }}
                />
              </div>
              <div style={{ fontWeight: "400" }}>{productQuantity}</div>
              <div>
                <AddIcon
                  onClick={() => {
                    cart.AddonetoCart(product, id);
                  }}
                  style={{ fontSize: "17px" }}
                />
              </div>
            </div>
          </li>
          <div>
            <li className="li-cart-price">
              <h3 style={{ padding: "0", margin: "0" }}>₦{Price * quantity}</h3>
            </li>
            <div className="li-cart-price-main" style={{ fontSize: "13px", color: "grey" }}
            >
              ₦{Price} x {quantity}
              {quantity > 0 ? <span>items</span> : <span>item</span>}
            </div>
          </div>
        </div>

        <li className="li-cart-last">
          <Link
            onClick={() => {
              cart.DeleteCart(id);
            }}
            style={{
              color: "#9a0052",
              textDecoration: "none",
              fontSize: "14px",
              display:'flex',
              alignItems:'center',
              gap:'5px'
            }}
          >
           <DeleteIcon />REMOVE ITEM
          </Link>
        </li>
      </ul>
      <hr className="line-cart" />
    </div>
  );
}

export default Cartitems;
