import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import './Create.css'


function Createmen() {
  
  const navigate = useNavigate();
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Color, setColor] = useState("");
  const [ProductDetails, setProductDetails] = useState("");
  const [ProductAttach, setProductAttach] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("ProductName", ProductName);
    formdata.append("Price", Price);
    formdata.append("Color", Color);
    formdata.append("ProductDetails", ProductDetails);
    formdata.append("image", ProductAttach);
    formdata.append("category", category);


    

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/products`, formdata)
      .then((res) => {
        console.log(res.data)
        navigate('/')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Product Created Successfully'
        })
      })
      .then((err) => console.log(err));

  };
  
  return (

    
      <div className="overal-loginm">
        <div className="login-coverm">
    
            <img src="./yeffssofeet.jpg" className="image-page-signm" />
            <h1>Post Footwears</h1>
            <hr style={{ width: "100%" }} className="sign-line" />
          
          <form  className='create-style' onSubmit={handleSubmit}>
          <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
          Product Name
          </label>
          <input style={{ padding:'10px'  }}
            type="text"
            name="ProductName"
            placeholder="Enter Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        
           </div>
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
         Price
          </label>
          <input style={{ padding:'10px'  }}
           type="number"
           name="Price"
           onChange={(e) => setPrice(e.target.value)}
           placeholder="Enter Selling Amount"
          />
           </div>
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
         Color
          </label>
          <input style={{ padding:'10px'  }}
          type="text"
          name="Color"
          onChange={(e) => setColor(e.target.value)}
          placeholder="Specify Color"
          />
           </div>
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
         Product Details
          </label>
          <textarea
              type="text"
              name="ProductDetails"
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder="Enter Product Details"
            />
           </div>
           <div className="choose-style">
            <label htmlFor="" id="category">
              <p style={{ fontWeight:"600" }}>Select Category To Post</p>
            </label>
            <select  name="category" className="main-cat-style" onChange={(e) => setCategory(e.target.value)}> 
            <option  >CATEGORY</option>
            <option  value="Men">Men</option>
            <option  value="Women">Women</option>
            <option  value="Kids">Kids</option>
            <option  value="Belt">Belts</option>
           </select></div> <br/>
            <br/>
            <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
         Attachment
          </label>
          <input
              type="file"
              name="ProductAttach"
              onChange={(e) => setProductAttach(e.target.files[0])}
            />
           </div>

           <div className="btn-login-stylem"> <button className="login-btnm">POST PRODUCT</button> </div>
          </form>
        </div>
      </div>
  
  );
}

export default Createmen;
