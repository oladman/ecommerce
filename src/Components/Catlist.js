import React from 'react'
import '../Catcss.css'

function Catlist({catname, catimage}) {
  return (
    <div className="productCat">
  
      <div className='ProductImageCat'><img  src={catimage} /> </div>
      <div style={{ textAlign: "center" }} className="ProductNameCat  ProductTextCat">
        {catname}
      </div>
    
  </div>
  )
}

export default Catlist