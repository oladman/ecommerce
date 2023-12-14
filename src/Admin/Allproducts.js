import React, { useEffect, useState } from "react";
import axios from "axios";
import Allproductspanel from "./Allproductspanel";
import ClipLoader from "react-spinners/ClipLoader";

function Allproducts() {
  const [MenProduct, setMenProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchaAllProducts = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`).then((res) => {
        setMenProduct(res.data);
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchaAllProducts();
  }, []);

  const NewProduct = MenProduct.map((product, index) => {
    return (
      <>
        {loading ? (
          <ClipLoader color={"#C30010"} loading={loading} size={50} />
        ) : (
          <Allproductspanel
            key={index}
            id={product.id}
            name={product.ProductName}
            image={`${process.env.REACT_APP_BACKEND_URL}/images/` + product.ProductAttach}
            color={product.Color}
            amount={product.Price}
            product={product}
          />
        )}
      </>
    );
  });

  return <div className="Products-panel-all"> {NewProduct}</div>;
}

export default Allproducts;
