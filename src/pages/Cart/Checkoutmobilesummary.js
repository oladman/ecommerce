import "./Cart.css";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext"
import { Admincontext } from "../../Context/Admincontext";
import PayButton from "../../Components/PayButton";


function Checkoutmobilesummary() {
  const [total, setTotal] = useState(0);
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const { name, Auth } = useState(Admincontext);


    useEffect(()=> {
      const total = cart.items.reduce((accumulator, currentItem)=> {
        return accumulator + currentItem.Price * currentItem.quantity;
      }, 0);
      setTotal(total);
  
    });

  return (<>
    <div className="cart-right-new-jigi">
      <div className="order-sum">
        <p>Order Summary</p> 
      </div>
      <div className="cart-sum-second-new">
        <p >Item's total ({productsCount}) :</p>

        <p>₦ {total}</p>
      </div>
      <div className="cart-sum-second-new">
        <p >Subtotal:</p>

        <p>₦ {total}</p>
      </div>
      <div className="cart-sum-second-new">
        <p >Delivery fees:</p>

        <p>₦ 1000</p>
      </div>
   
      <div className="cart-sum-next">
        <p>Total:</p>
        <p>₦ {total}</p>
      </div>
    
      <p style={{fontSize:'12px', color:'#ea1179' }}>Including delivery charges</p>
      
    </div> 
    </>
  );
}

export default Checkoutmobilesummary;
