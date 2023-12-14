import {Outlet, Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import React from 'react'
import { Admincontext } from './Context/Admincontext'


function AdminRoute({children}) {
     const location = useLocation()

  const {Auth, name, message, loading, role} = useContext(Admincontext)

 
  return (
  <>

{!Auth && !loading ? <Navigate to = "/" /> :  null }
   
    { role == "Admin" && <Outlet /> }

    </>
  )
}

export default AdminRoute