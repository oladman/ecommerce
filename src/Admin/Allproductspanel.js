import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/Cartcontext";
import "./Admin.css";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Swal from "sweetalert2";



function Allproductspanel({
  id,
  name,
  discount,
  image,
  amount,
  product,
  loading,
}) {
  

  const cart = useContext(CartContext);
  const productQuantity = cart.GetProductQuantity(id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/Products/` + id)
          .then((res) => {
            console.log(res);
            
          })
          .catch((err) => {
            console.log(err);
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        navigate(0)
      }
    });
  };

  return (<>
    

    
    <div className="product-all">
      <Link
        to={`/Products/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="ProductImage-all">
          <img src={image} />
          <div className="Instock">{discount}</div>
        </div>
        <div className="ProductText-all">
          <p style={{ textAlign: "center" }} className="ProductName-all">
            {name}
          </p>
          <p style={{ textAlign: "center" }} className="MainPrice-all">
            ₦{amount}
          </p>
        </div>
      </Link>

      <div className="Alone-all">
        {" "}
        <Link
          to={`/edit/${id}`}
          style={{ textDecoration: "none", fontSize: "14px" }}
          className="btn-buy-all-link"
        >
          {" "}
          <EditCalendarIcon style={{ fontSize: "15px", color: "green" }} /> EDIT
        </Link>{" "}
      </div>
      <div className="Alone-all">
        {" "}
        <button onClick={() => handleDelete(id)} className="btn-buy-all">
          {" "}
          <DeleteForeverIcon
            style={{ fontSize: "15px", color: "#9f0d7f" }}
          /> DELETE{" "}
        </button>{" "}
      </div>
    </div> 

</>
  );
}

export default Allproductspanel;
