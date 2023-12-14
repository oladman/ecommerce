import React, { useEffect, useState } from "react";

import axios from "axios";

import Singlebeltcategory from "./Singlebeltcategory";

function Beltscategory() {
  const [BeltsProducts, setBeltsProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/belts`,

        {
          params: {
            _limit: 10,
          },
        }
      )
      .then((res) => {
        setBeltsProducts(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct = Object.entries(BeltsProducts).map((product, index) => {
    return (
      <Singlebeltcategory
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

export default Beltscategory;
