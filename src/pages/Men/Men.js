import React, { useEffect, useState } from "react";
import axios from "axios";
import Menpanel from './MenPanel'

function Men() {
  const [MenProduct, setMenProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/men`,

        {
          params: {
            _limit: 20,
          },
        }
      )
      .then((res) => {
        setMenProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct = Object.entries(MenProduct).map((product, index) => {
    return (
      <Menpanel
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

export default Men;
