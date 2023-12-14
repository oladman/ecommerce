import "./Cart.css";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext"
import { Admincontext } from "../../Context/Admincontext";
import PayButtonReview from "../../Components/PayButtonReview";
import { Usercontext } from "../../Context/Usercontext";


function Cartsummary() {
   const { Auth, userid } = useContext(Usercontext);
  const [total, setTotal] = useState(0);
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    useEffect(()=> {
      const total = cart.items.reduce((accumulator, currentItem)=> {
        return accumulator + currentItem.Price * currentItem.quantity;
      }, 0);
      setTotal(total);
  
    });

  return (<>
    <div className="cart-right">
      <div className="order-sum">
        <p>Order Summary</p> <p> {productsCount} Items</p>
      </div>
      <hr style={{ width:'100%' }}/>
      <div className="cart-sum-second">
        <p >Subtotal:</p>

        <p>₦{total}</p>
      </div>
      <hr style={{ width:'100%' }}/>
      <div className="cart-sum-next">
        <p>Total:</p>
        <p>₦{total}</p>
      </div>
      <hr style={{ width:'100%' }}/>
      <p style={{fontSize:'12px' }}>Excluding delivery charges</p>
    {Auth ? <PayButtonReview /> :  <Link  to={'/login'} style={{ textDecoration:'none' }} className="btn-checkout">
        CHECKOUT (₦ {total})
      </Link>}
    </div> 
    </>
  );
}

export default Cartsummary;
