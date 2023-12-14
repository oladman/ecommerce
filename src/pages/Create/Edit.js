import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function Edit() {
const {id} = useParams();
const navigate = useNavigate();
const [productedit, setProductEdit] = useState({
  NewproductName:'',
  NewPrice:'',
  NewColor:'', 
  NewProductDetails:''
});

useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/Products/`+id)
      .then((res) => {
        setProductEdit({...productedit, NewproductName:res.data[0].ProductName, NewPrice:res.data[0].Price, NewColor:res.data[0].Color, NewProductDetails:res.data[0].ProductDetails})
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  


  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/products/`+id, productedit)
    .then(res => {console.log(res.data)
      navigate("/All-products")
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
        title: 'Product Edited Successfully'
      })
    
    
    }
    
    )
    .catch(err => {console.log(err)})

   
  };
  return (
    
    <div className="overal-loginm">
    <div className="login-coverm">

        <img src="./yeffssofeet.jpg" className="image-page-signm" />
        <h1>Post Footwears</h1>
        <hr style={{ width: "100%" }} className="sign-line" />
          
          <form  style={{ width:'100%' }} onSubmit={handleUpdate}>
          <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="NewproductName" id="">
          Product Name
          </label>
          <input style={{ padding:'10px'  }}
            type="text"
            name="NewproductName"
            placeholder="Enter Product Name"
            onChange={(e) => setProductEdit({...productedit, NewproductName: e.target.value})}
            value={productedit.NewproductName}
          />
          
        
           </div>
          
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="Price" id="">
         Price
          </label>
          <input style={{ padding:'10px'  }}
          type="number"
          name="Price"
          onChange={(e) => setProductEdit({...productedit, NewPrice: e.target.value})}
          placeholder="Enter Selling Amount"
    
          value={productedit.NewPrice}
          />
           </div>
         
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="Color" id="">
         Color
          </label>
          <input style={{ padding:'10px'  }}
         type="text"
         name="Color"
         onChange={(e) => setProductEdit({...productedit, NewColor: e.target.value})}
         placeholder="Specify Color"
         value={productedit.NewColor}
          />
           </div>

            
           <div className="input-loginm" style={{ marginTop:'10px' }}>
          <label htmlFor="firstname" id="">
         Product Details
          </label>
          <textarea
              type="text"
              name="ProductDetails"
              onChange={(e) => setProductEdit({...productedit, NewProductDetails: e.target.value})}
              placeholder="Enter Product Details"
              value={productedit.NewProductDetails}
            />
           </div>
            
           <div className="btn-login-stylem"> <button className="login-btnm">EDIT PRODUCT</button> </div>
          </form>
        </div>
      </div>
    
  );
}

export default Edit;
