import React from 'react'
import './Catcss.css'

function Catlist({catname, catimage}) {
  return (
    <div className="productCat">
  
      <img className='ProductImageCat' src={catimage} />
      <div style={{ textAlign: "center" }} className="ProductNameCat  ProductTextCat">
        {catname}
      </div>
    
  </div>
  )
}

export default Catlist