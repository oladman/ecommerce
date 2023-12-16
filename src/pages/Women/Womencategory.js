import React, { useEffect, useState } from "react";

import axios from "axios";
import Singlewomencategory from "./Singlewomencategory";

function Womencategory() {
  const [womenProduct, setWomenProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/women`,

        {
          params: {
            _limit: 10,
          },
        }
      )
      .then((res) => {
        setWomenProduct(res.data);
        console.log('dataaaaaaa', res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct =womenProduct.map((product, index) => {
    return (
      <Singlewomencategory
        key={index}
        id={product.id}
        name={product.ProductName}
        image={`${process.env.REACT_APP_BACKEND_URL}/images/` + product.ProductAttach}
        color={product.Color}
        amount={product.Price}
      />
    );
  });

  return <div className="Products-Panelcat"> {NewProduct}</div>;
}

export default Womencategory;
