import { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import Cartitems from "./Cartitems";
import "./Cart.css";


function Cart() {
  const cart = useContext(CartContext);
  const NewProduct = cart.items.map((product, index) => {
    return (
      
        <Cartitems key={index} id={product.id} product={product} />

       
      
    );
  });

  return <div>{NewProduct} </div>;
}

export default Cart;
