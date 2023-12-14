import React from 'react'
import { Link } from "react-router-dom";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import UndoIcon from "@mui/icons-material/Undo";
import ShieldIcon from "@mui/icons-material/Shield";


function Checkoutheader() {
  return (
    <div>
<div className="check-cover">
      <Link to={"/"} className="logo-text">
        <p className="text-first">
          <h2>YEFFSO</h2>
        </p>
        <p className="text-second">
          <h2>FEET</h2>
        </p>
      </Link>

      <h2 className='checkout-design' style={{ color: "white", padding: "0", margin: "0" }}>CHECKOUT</h2>
      <div  style={{ display:'flex', gap:'20px', fontWeight:'500' }}>
        <div className="help-over">
          <PermPhoneMsgIcon style={{ fontSize:'20px' }} />
          <div>
            <p>Need Help ?</p>
            <p> Contact Us</p>
          </div>
        </div>

        <div className="check-icon"> 
          
          <UndoIcon style={{ fontSize:'20px' }} /> Easy <br/> Returns
        </div>
        <div className="check-icon">
        <ShieldIcon style={{ fontSize:'20px' }} /> Secure <br/> Payments
      </div>
      </div>
     

      
    </div>
    <hr  className='check-line'/>
    </div>
  )
}

export default Checkoutheader