import React, { useEffect, useState } from "react";
import axios from "axios";
import Beltspanel from './Beltspanel'

function Belts() {
  const [Belts, setBelts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/belts`,

        {
          params: {
            _limit: 20,
          },
        }
      )
      .then((res) => {
        setBelts(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NewProduct = Object.entries(Belts).map((product, index) => {
    return (
      <Beltspanel
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

export default Belts;
