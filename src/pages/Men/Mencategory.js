import React, { useEffect, useState } from "react";
import Singlemencategory from "./Singlemencategory";
import axios from "axios";

function Mencategory() {
  const [MenProduct, setMenProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/men`,

        {
          params: {
            _limit: 10,
          },
        }
      )
      .then((res) => {
        setMenProduct(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct =  Object.entries(MenProduct).map((product, index) => {
    return (
      <Singlemencategory
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

export default Mencategory;
