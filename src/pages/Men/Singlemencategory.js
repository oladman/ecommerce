import React from 'react'
import { Link } from 'react-router-dom'
import './Men.css'


function Singlemencategory({name, discount, image, amount, id}) {
  return (

    <div className="productcatp" key={id}>
      <Link to={`/Products/${id}`} className='Link-catp'>
    <div className="ProductImagecatp">
      <div className='image-open'><img src={image} /></div>
      <div className="Instockcatp">{discount}</div>
    </div>
    <div className="ProductTextcatp">
      <p style={{ textAlign: "center" }} className="ProductNamecatp">
        {name}
      </p>
      <p style={{ textAlign: "center" }} className="MainPricecatp">
        ₦ {amount}
      </p>
    
    </div> 
    </Link>

  </div>

  )
}

export default Singlemencategory