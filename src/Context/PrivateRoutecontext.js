import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const PrivateRoutecontext = createContext(null);

export function PrivateRouteProvider({children}) {
  const [AuthTwo, setAuthTwo] = useState(false);
  const [nameTwo, setNameTwo] = useState("noname");
  const [loadingTwo, setLoadingTwo] = useState(true)
  const [useridTwo, setUserIdTwo] = useState("");
  

  axios.defaults.withCredentials = true;
  useEffect(() => {
    setLoadingTwo(true)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((res) => {
      if (res.data.Status === "Success") {
        setAuthTwo(true);
        setNameTwo('testing')
        setNameTwo(res.data.Email);
        setUserIdTwo(res.data.id);
        setLoadingTwo(false)
        
        
       
      } else {
        setAuthTwo(false);
        setLoadingTwo(false)
      }
      
    });
  }, []);


  const values = {
    AuthTwo,
    setAuthTwo,
    nameTwo, 
    setNameTwo,
    loadingTwo,
    useridTwo, 
    setUserIdTwo
  
  }
  return (
    <PrivateRoutecontext.Provider value={values}>{children}</PrivateRoutecontext.Provider>
  )
}

export default PrivateRouteProvider;
