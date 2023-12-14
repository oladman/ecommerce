import {Outlet, Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import React from 'react'

import { PrivateRoutecontext } from './Context/PrivateRoutecontext'

function ProtectedRoute({children}) {
  const location = useLocation();

  const {  AuthTwo,
    setAuthTwo,
    nameTwo, 
    setNameTwo,
    loadingTwo,
    useridTwo  } = useContext(PrivateRoutecontext)
  

  return ( 
    <>
    {!AuthTwo && !loadingTwo ? <Navigate to = "/"  state={{ from: location }} replace /> : <Outlet />  }  
    </>

  )
}

export default ProtectedRoute