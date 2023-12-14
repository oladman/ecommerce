import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const Usercontext = createContext(null);

export function Usercontextprovider({children}) {
  const [Auth, setAuth] = useState(false);
  const [message, SetMessage] = useState("");
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);
  const [userid, setUserId] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setEmail(res.data.Email);
        setFirstName(res.data.FirstName)
        setUserId(res.data.id);
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
    email, 
    setEmail,
    loading,
    setLoading, 
    userid,
    FirstName,
    setFirstName
  }
  return (
    <Usercontext.Provider value={values}>{children}</Usercontext.Provider>
  )
}

export default Usercontextprovider;
