import React from 'react'
import "./Footeroptioncss.css";


function Footeroptions( {icon, TextOne, TextTwo}) {
  return (

    <div className='Footeroption'>
       
    <div className='Footer-icon'>
      {icon}  
     </div> 
       <div className='BottomfooterText'>
         <div className='Topfooter-Text'>{TextOne}</div>
         <div className='Bottomfooter-Text'>{TextTwo}</div>
       </div>

     </div>
     
    
  )
}

export default Footeroptions

