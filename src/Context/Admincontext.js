import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const Admincontext = createContext(null);

export function Admincontextprovider({children}) {
  const [Auth, setAuth] = useState(false);
  const [message, SetMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userid, setUserId] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`)
    .then((res) => {
      if (res.data.Status === "Success") {
        
        setAuth(true);
        setName(res.data.Email);
        setUserId(res.data.id);
        setRole(res.data.Role)
        setLoading(false)
       
      } else {
        setAuth(false);
        SetMessage(res.data.Error);
      }
    });
  }, []);


  const values = {
    Auth,
    setAuth,
    message,
    SetMessage,
    name, 
    setName,
    loading,
    setLoading,
    role,
    setRole,
    userid,
     setUserId
  }
  return (
    <Admincontext.Provider value={values}>{children}</Admincontext.Provider>
  )
}

export default Admincontextprovider;
