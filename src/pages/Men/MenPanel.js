import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Cartcontext';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function MenPanel({id, name, discount, image, amount, product}) {
    const cart = useContext(CartContext);
    const productQuantity = cart.GetProductQuantity(id);


  return (
    <div className="product">
            <Link to={`/Products/${id}`} style={{ textDecoration:"none", color:'black' }} ><div className="ProductImage">
              <img src={image} />
              <div className="Instock">{discount}</div>
            </div>
            <div className="ProductText">
              <p style={{ textAlign: "center" }} className="ProductName">
                {name}
              </p>
              <div className='divdel-style'><p style={{ textAlign: "center" }} className="MainPrice">
                ₦ {amount} 
              </p> <del className='del-style'>₦ {parseInt(amount) + 5000}.00</del> </div></div></Link>


            {productQuantity > 0 ? (
              <div className="instead-style-cart"> <button  className="btn-style-cart-cart" onClick={() => {cart.AddonetoCart(product, id)}}><AddIcon style={{ fontSize:'17px' }}/></button> <p> {productQuantity} </p> <button className="btn-style-cart-cart" onClick={()=>{cart.RemoveonefromCart(product, id)}}><RemoveIcon style={{ fontSize:'17px' }}/></button> 
              </div>
            ) : (
                <div className="Alone"> <button className="btn-buy" onClick={() => {cart.AddonetoCart(product, id)}}>ADD TO CART</button> </div>
            )}
            
            
               
            </div>
            
          
  )
}

export default MenPanel