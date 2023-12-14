import React, { useEffect, useState } from "react";

import axios from "axios";
import Womenpanel from './Womenpanel'

function Women() {
  const [womenProduct, setWomenProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/women`,

        {
          params: {
            _limit: 20,
          },
        }
      )
      .then((res) => {
        setWomenProduct(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct =  Object.entries(womenProduct).map((product, index) => {
    return (
      <Womenpanel
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

export default Women;
