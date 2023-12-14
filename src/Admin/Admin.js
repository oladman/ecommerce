import axios from 'axios'
import React, { useEffect, useContext} from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import { Admincontext } from '../Context/Admincontext'
import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';





function Admin() {
  const {role, Auth, name} = useContext(Admincontext);

  return (
    <div className="cover-admin-body">
      
      <div className="admin-btn-class">
      <h1>Administrator's Page</h1>
        
          <Link to={'/Create'} className="admin-link"> <EditIcon /> POST A PRODUCT</Link>
        
       
          <Link to={'/All-products'} className="admin-link"> <EditCalendarIcon/> UPDATE AND DELETE PRODUCTS</Link>
          
      </div>
    </div>
  )
}

export default Admin