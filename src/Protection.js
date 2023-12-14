import React from 'react'
import "./Home.css";

function Protection({proname, protext, proicon}) {
  return (
    <div className='Pro-style'>
        <div className='Pro-icon-style' style={{ color:'#EA1179' }}>{proicon}</div>

        <div className='Pro-wrap'>
        <div className='Pro-up'>{proname}  </div>
        <div className='Pro-down'>{protext} </div>
        </div>
    
    </div>
  )
}

export default Protection