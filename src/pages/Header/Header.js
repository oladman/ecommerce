import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { CartContext } from "../../Context/Cartcontext";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CallIcon from "@mui/icons-material/Call";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Usercontext } from "../../Context/Usercontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Admincontext } from "../../Context/Admincontext";
import LoginIcon from "@mui/icons-material/Login";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { PrivateRoutecontext } from "../../Context/PrivateRoutecontext";

function Header() {
  const { AuthTwo, useridTwo } = useContext(PrivateRoutecontext);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const [open, setIsOpen] = useState(false);
  const { role } = useContext(Admincontext);

  const [FirstNameeNew, setFirstNameNew] = useState("");
  const [Authfetch, setAuthfetch] = useState(false);
  const [message, SetMessage] = useState("");
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);
  const [useridfetch, setUserIdfetch] = useState("");

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
      .then((res) => {
        navigate(0);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((res) => {
      if (res.data.Status === "Success") {
        setAuthfetch(true);
        setEmail(res.data.Email);
        setFirstNameNew(res.data.FirstName);
        setUserIdfetch(res.data.id);
        setLoading(false);
      } else {
        setAuthfetch(false);
        SetMessage(res.data.Error);
      }
    });
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <div className="nav">
          <div className="left">
            <MenuIcon onClick={toggleMenu} className="Hamburger" />

            <Link to={"/"} className="logo-text">
              <p className="text-first">
                YEFFSO
              </p>
              <p className="text-second">
                FEET
              </p>
            </Link>
          </div>

          <div
            className={`middle ${open ? "is-open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="btn-cover">
              {!Authfetch ? (
                <button className="btn-sign">
                  <Link
                    style={{ textDecoration: "none", color: "#ea1179" }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </button>
              ) : null}
              {!Authfetch ? (
                <button to={"/login"} className="btn-sign">
                  <Link
                    style={{ textDecoration: "none", color: "#ea1179" }}
                    to={"/signup"}
                  >
                    SignUp
                  </Link>
                </button>
              ) : null}
            </div>

            <p className="middle-header">OUR CATEGORIES</p>
            <hr className="hr-line-header" style={{ width: "100%" }} />

            <Link
              className="link-head-style"
              to="/Men"
              style={{ textDecoration: "none", color: "white" }}
            >
              Men
            </Link>

            <Link
              className="link-head-style-mobile"
              to="/Men"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ManIcon style={{ color: "white", fontSize: "15px" }} /> Men
            </Link>

            <Link
              className="link-head-style"
              to="/Women"
              style={{ textDecoration: "none", color: "white" }}
            >
              Women
            </Link>

            <Link
              className="link-head-style-mobile"
              to="/Women"
              style={{ textDecoration: "none", color: "white" }}
            >
              <WomanIcon cstyle={{ color: "white", fontSize: "15px" }} /> Women
            </Link>

            <Link
              className="link-head-style"
              to="/Kids"
              style={{ textDecoration: "none", color: "white" }}
            >
              Kids
            </Link>

            <Link
              className="link-head-style-mobile"
              to="/Kids"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ChildCareIcon style={{ color: "white", fontSize: "15px" }} />
              Kids
            </Link>

            <Link
              className="link-head-style"
              to="/Belts"
              style={{ textDecoration: "none", color: "white" }}
            >
              Belt
            </Link>

            <Link
              className="link-head-style-mobile"
              to="/Belts"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ArchitectureIcon fontSize="15px" /> Belt
            </Link>

            <Link
              className="link-head-style-mobile"
              to="/Kids"
              style={{ textDecoration: "none", color: "white" }}
            >
              <CallIcon style={{ color: "white", fontSize: "15px" }} /> Contact
              us
            </Link>

            {role === "Admin" && (
              <Link
                className="link-head-style-mobile"
                to="/Admin"
                style={{ textDecoration: "none", color: "white" }}
              >
                <AdminPanelSettingsIcon
                  style={{ color: "white", fontSize: "15px" }}
                />{" "}
                ADMIN
              </Link>
            )}
            <Link
              className="link-head-style-mobile"
              to={`/Account/Profile/${useridfetch}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <AdminPanelSettingsIcon
                style={{ color: "white", fontSize: "15px" }}
              />{" "}
              My Profile
            </Link>

            <Link
              onClick={handleDelete}
              className="link-head-style-mobile"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <ExitToAppIcon style={{ color: "white", fontSize: "15px" }} />
              Logout
            </Link>
          </div>

          <div className="right">
            {role === "Admin" && (
              <div className="admin-style">
              
                <Link
                  to="/Admin"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AdminPanelSettingsIcon
                    style={{ fontSize: "18px", color: "#ea1179" }}
                  />{" "}
                  ADMIN
                </Link>{" "}
              </div>
            )}

            {!Authfetch ? (
              <div className="Account-set">
                <PersonIcon />
                <ul className="menu">
                  <li>
                    Account
                    <ul className="sub-menu">
                      <li>
                        {" "}
                        <Link className="link-header" to={"/Login"}>
                          <LoginIcon
                            style={{ color: "white", fontSize: "15px" }}
                          />{" "}
                          Sign In
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link className="link-header" to={"/Signup"}>
                          <SensorOccupiedIcon
                            style={{ color: "white", fontSize: "15px" }}
                          />
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ExpandMoreIcon style={{ fontSize: "16px" }} />
              </div>
            ) : (
              <div className="Account-set">
                <ul className="menu">
                  <li>
                    <Link
                      to={`/Account/Profile`}
                      className="user-profile-style"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <HowToRegIcon />
                      Hi, {FirstNameeNew}{" "}
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        {" "}
                        <Link className="link-header" to={`/Account/Profile/${useridfetch}`}>
                          <ManageAccountsIcon
                            style={{ color: "white", fontSize: "15px" }}
                          />{" "}
                          Profile{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link className="link-header" onClick={handleDelete}>
                          <ExitToAppIcon
                            style={{ color: "white", fontSize: "15px" }}
                          />{" "}
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ExpandMoreIcon style={{ fontSize: "16px" }} />
              </div>
            )}
            <div className="searchBar">
              <input className="searchInput" type="text" placeholder="Search" />
              <SearchOutlinedIcon />
            </div>

            <div className="cart">
              <Link
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                to={"/Cart-list"}
              >
                <ShoppingCartIcon />{" "}
                <p className="cart-num" style={{ fontSize: "12px" }}>
        {productsCount}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="long-search">
          <input
            type="text"
            placeholder="Search for latest foot wears, designs and categories ..."
          />
          <SearchOutlinedIcon className="long-icon" />
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Header;
