import React, { useEffect, useState } from "react";

import axios from "axios";
import Kidspanel from './Kidspanel'

function Kids() {
  const [KidsProduct, setKidsProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/Kids`,

        {
          params: {
            _limit: 20,
          },
        }
      )
      .then((res) => {
        setKidsProduct(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct = KidsProduct.map((product, index) => {
    return (
      <Kidspanel
        key={index}
        id={product.id}
        name={product.ProductName}
        image={`${process.env.REACT_APP_BACKEND_URL}/images/` + product.ProductAttach}
        color={product.Color}
        amount={product.Price}
        product ={product}
      />
    );
  });

  return <div className="Products-panel"> {NewProduct}</div>;
}

export default Kids;
