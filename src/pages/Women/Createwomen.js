import { useState } from "react";
import axios from "axios";

function Createwomen() {
    const [ProductName, setProductName] = useState("");
const [Price, setPrice] = useState("");
const [Color, setColor] = useState("");
const [ProductDetails, setProductDetails] = useState("");
const [ProductAttach, setProductAttach] = useState("");


const handleSubmit = (event) => {
  event.preventDefault();

  const formdata = new FormData();
  formdata.append("ProductName", ProductName);
  formdata.append("Price", Price);
  formdata.append("Color", Color);
  formdata.append("ProductDetails", ProductDetails);
  formdata.append("image", ProductAttach);
  console.log(formdata);

 

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/women`, formdata)
    .then((res) => {
     
    })
    .then((err) => console.log(err));
};
  return (
    <>
    <div className="sign-up-container">
      <div className="sign-up-body">
        <div className="Signbody-up">
          <img src="./yeffssofeet.jpg" className="sign-logo" />
          <h1>Post Women Footwears</h1>
          <hr style={{ width: "100%" }} className="sign-line" />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" id="label-signup">
            Product Name
          </label>
          <input
            type="text"
            name="ProductName"
            placeholder="Enter Product Name"
            onChange={ (e) => setProductName(e.target.value) 
            }
            className="input-syle-signup"
          />
          <label htmlFor="" id="label-signup">
           Price
          </label>
          <input
            type="number"
            name="Price"
            onChange={(e) =>
              setPrice(e.target.value)
            }
            placeholder="Enter Selling Amount"
            className="input-syle-signup"
          />
          <label htmlFor="" id="label-signup">
            Color
          </label>
          <input
            type="text"
            name="Color"
            onChange={(e) =>
              setColor(e.target.value)
            }
            placeholder="Specify Color"
            className="input-syle-signup"
          />
          <label htmlFor="" id="label-signup">
            Product Details
          </label>
          <input
            type="text"
            name="ProductDetails"
            onChange={(e) =>
              setProductDetails(e.target.value)
            }
            placeholder="Enter Product Details"
            className="input-syle-signup"
          />
          <label htmlFor="" id="label-signup">
            Attachment
          </label>
          <input
            type="file"
            name="ProductAttach"
            onChange={(e) =>
              setProductAttach(e.target.files[0])
            }
            className="input-syle-signup"
          />
          <button className="btn-signup">Make Post</button>
        </form>
       
      </div>
    </div>
  </>
  )
}

export default Createwomen