import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartcontextProvider } from "./Context/Cartcontext";
import Usercontextprovider from "./Context/Usercontext";
import { PrivateRouteProvider } from "./Context/PrivateRoutecontext";
import Admincontextprovider from "./Context/Admincontext";
import UserProfileContextProvider from "./Context/UserProfileContext";
import ScrollToTop from "./Components/ScrollToTop";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Usercontextprovider>
      <CartcontextProvider>
        <PrivateRouteProvider>
          <Admincontextprovider>
            <UserProfileContextProvider>
         
              <App />
            
            </UserProfileContextProvider>
          </Admincontextprovider>
        </PrivateRouteProvider>
      </CartcontextProvider>
    </Usercontextprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

