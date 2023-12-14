import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Usercontext } from "./Usercontext";

export const UserProfileContext = createContext(null);

export function UserProfileContextProvider({ children }) {
  const [Auth, setAuth] = useState(false);
  const [message, SetMessage] = useState("");
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);
  const [useridfetch, setUserIdFetch] = useState("");

  axios.defaults.withCredentials = true;

  const { userid } = useContext(Usercontext);
  const id = userid



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
    setFirstName,
    useridfetch,
  };
  return (
    <UserProfileContext.Provider value={values}>
      {children}
    </UserProfileContext.Provider>
  );
}

export default UserProfileContextProvider;
