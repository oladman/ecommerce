import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
  items: [],
  GetProductQuantity: () => {},
  AddonetoCart: () => {},
  RemoveonefromCart: () => {},
  DeleteCart: () => {},
  GetTotalCost: () => {},
  getProductData: () => {},

 
});

export function CartcontextProvider({ children }) {
  const [CartProducts, setCartProducts] = useState(()=> {

  const localValue =localStorage.getItem('ITEMS')
  if(localValue == null) return []

  return JSON.parse(localValue)
  });

  
  useEffect(()=> {
localStorage.setItem('ITEMS', JSON.stringify(CartProducts))
  }, [CartProducts])


 function GetProductQuantity (id) {
   const quantity = CartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    } 
      return quantity;
    }


 function AddonetoCart (product, id) {
    const quantity = GetProductQuantity(id);
    if (quantity === 0) {
      setCartProducts(
        [
        ...CartProducts,
        { ...product,
          id: id,
          quantity: 1,

        },
      ]);
    } else {
      setCartProducts(
        CartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
   
  };

  function RemoveonefromCart (product, id) {
    const quantity = GetProductQuantity(id);
    if (quantity === 1) {
      DeleteCart(product, id);
    } else {
      setCartProducts(
        CartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };


  function DeleteCart (id) {
    setCartProducts((CartProducts) =>
      CartProducts.filter(currentproducts => {
        return currentproducts.id !== id;
      })
    );
  };


 

 const GetTotalCost = () => {
 }

  function getProductData (id){
    let productData = CartProducts.find(product => product.id ===id);
    if (productData === undefined){
      return undefined;
    } return productData;

 }
 
  const ContextValue = {
    items:CartProducts,
    GetProductQuantity,
    AddonetoCart,
    RemoveonefromCart,
    DeleteCart,
    GetTotalCost,
    getProductData,
   
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}

export default CartcontextProvider;
