import { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import Cartitems from "./Cartitems";
import "./Cart.css";
import Checkoutlist from "./Checkoutlist";


function Checkoutitems() {
  const cart = useContext(CartContext);
  const NewProduct = cart.items.map((product, index) => {
    return (
      
        <Checkoutlist key={index} id={product.id} product={product} />

       
      
    );
  });

  return <div>{NewProduct} </div>;
}

export default Checkoutitems;
