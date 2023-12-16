import React, { useEffect, useState } from "react";

import axios from "axios";
import Singlekidcategory from "./Singlekidcategory";

function Kidscategory() {
  const [KidsProducts, setKidsProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/kids`,

        {
          params: {
            _limit: 10,
          },
        }
      )
      .then((res) => {
        setKidsProducts(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct =  KidsProducts.map((product, index) => {
    return (
      <Singlekidcategory
        key={index}
        id={product.id}
        name={product.ProductName}
        image={`${process.env.REACT_APP_BACKEND_URL}/images/` + product.ProductAttach}
        color={product.Color}
        amount={product.Price}
      />
    );
  });

  return <div className="Products-Panelcat">{NewProduct}</div>;
}

export default Kidscategory;
