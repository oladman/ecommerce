import React from 'react'
import '../Home.css'


function Slide({ key,img,title,price}) {
  return (
   
        <div className=''><img className='img-Carous-style' style={{ width:'100%', objectFit:'cover', objectPosition:"center" }} src={img} /></div>
        

  
  )
}

export default Slide