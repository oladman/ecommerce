import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import Header from "./pages/Header/Header";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import Page from "./Page";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cartlist from "./pages/Cart/Cartlist";
import Create from "./pages/Create/Create";
import Createmen from "./pages/Men/Createmen";
import Createwomen from "./pages/Women/Createwomen";
import Createbelt from "./pages/Belts/Createbelt";
import Createkids from "./pages/Kids/Createkids";
import Belts from "./pages/Belts/Belts";
import Example from "./Example/Example";
import Products from "./Products/Products";
import Admin from "./Admin/Admin";
import Allproducts from "./Admin/Allproducts";
import Edit from "./pages/Create/Edit";
import PrivateRoutes from "./PrivateRoutes";
import { Usercontext } from "./Context/Usercontext";
import { useContext } from "react";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import Success from "./Components/Success";
import Canceled from "./Components/Canceled";
import Profile from "./pages/Profile/Profile";
import Deliveryadress from "./pages/Profile/Deliveryadress";
import Account from "./pages/Profile/Account";
import Checkoutsummary from "./pages/Cart/Checkoutsummary";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      <Route path="/" element={<Header />}>
        
        {/* ****PROTECTED ROUTE WITH LOGIN START **** */}
        <Route element={<ProtectedRoute />}>
          <Route path="Account" element={<Account />}>
            <Route path="Profile" element={<Profile   />} />
            <Route path="delivery-addresses/:id" element={<Deliveryadress />} />
     
          </Route>
          
        </Route>
        {/* ***** PROTECTED ROUTE WITH LOGIN END **** */}

        {/* ***** ADMIN ROUTE WITH ADMIN LOGIN START **** */}
        <Route element={<AdminRoute />}>
          <Route path="Admin" element={<Admin />} />
          <Route path="all-products" element={<Allproducts />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="Create" element={<Create />} />
        </Route>
        {/* ***** ADMIN ROUTE WITH ADMIN LOGIN END **** */}

        {/* ***** OPEN FREE ROUTE START**** */}
        <Route path="/" element={<Home />} />
        <Route path="/Men/:id" element={<Men />} />
        <Route path="Createmen" element={<Createmen />} />
        <Route path="Createbelts" element={<Createbelt />} />
        <Route path="/Belts/:id" element={<Belts />} />
        <Route path="Women/:id" element={<Women />} />
        <Route path="Createwomen" element={<Createwomen />} />
        <Route path="Women" element={<Women />} />
        <Route path="Men" element={<Men />} />
        <Route path="Kids" element={<Kids />} />
        <Route path="Belts" element={<Belts />} />
        <Route path="success" element={<Success />} />
        <Route path="Canceled" element={<Canceled />} />
        <Route path="Kids/:id" element={<Kids />} />
        <Route path="Createkids" element={<Createkids />} />
        <Route path="Page/:id" element={<Page />} />
        <Route path="Cart-list" element={<Cartlist />} />
        <Route path="Products" element={<Products />} />
        <Route path="Products/:id" element={<Products />} />
      
        

        {/* ***** OPEN FREE ROUTE END**** */}
      </Route>

      <Route path="Example" element={<Example />} />

      {/* ***** NOT LOGIN ROUTE FOR NON LOGGED USERS START**** */}
      <Route element={<PrivateRoutes />}>
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        
      </Route>
      {/* ***** NOT LOGIN ROUTE FOR NON LOGGED USERS END**** */}
      <Route element={<ProtectedRoute />}>
      <Route path="checkout-summary/:id" element={<Checkoutsummary />} />
      </Route>
      
    </>
  )
);

function App() {

  
  const {userid} = useContext(Usercontext)
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
