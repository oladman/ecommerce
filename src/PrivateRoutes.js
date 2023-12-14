import {Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import React from 'react'
import { Usercontext } from './Context/Usercontext'

function PrivateRoutes({children}) {

  const {Auth, name, message, loading} = useContext(Usercontext)
 

  return (
  <>


    {Auth ? <Navigate to = "/" /> :<Outlet />  }

    </>
  )
}

export default PrivateRoutes