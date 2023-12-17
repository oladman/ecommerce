import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "./Homesection";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Link } from "react-router-dom";
import Homesection from "./Homesection";
import Products from "./Products/Products";
import Catlist from "./Components/Catlist";
import "./Catcss.css";
import Protection from "./Protection";
import Mencategory from "./pages/Men/Mencategory";
import "./Category/Categorycss.css";
import Page from "./Page";
import Women from "./pages/Women/Women";
import axios from "axios";
import Womencategory from "./pages/Women/Womencategory";
import Kidscategory from "./pages/Kids/Kidscategory";
import Beltscategory from "./pages/Belts/Beltscategory";
import { Usercontext } from "./Context/Usercontext";
import Hero from "./Components/Hero";

function Home() {
  const { FirstName, email } = useContext(Usercontext);
  console.log('from backend', FirstName, 'email:', email)

  return (
    <div className="Home">
      <div className="call-order"><p>CALL TO ORDER: 09068084773</p></div>
      <div className="hero-section">
        <Hero />
        <div className="sub-hero">
          <img className="image-caro" src="sidebar1.jpeg" />
          <img className="image-caro" src="caro10.jpeg" />
        </div>
        <div className="sub-hero">
          <img className="image-caro" src="style7.jpeg" />
          <img className="image-caro" src="sidebar2.jpeg" />
        </div>
      </div>

      {/* --- CATEGORY SECTION COMPONENT --- */}
      <div className="Cat-cover">
        <Link
          style={{ textDecoration: "none", margin: "0", padding: "0" }}
          to="/men"
        >
          <Catlist catname="SHOES" catimage={"/boot.png"} />
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0", padding: "0" }}
          to="/women"
        >
          <Catlist catname="WOMEN" catimage={"/women.jpg"} />
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0", padding: "0" }}
          to="/belt"
        >
          <Catlist catname="BELTS" catimage={"/belt1.jpg"} />
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0", padding: "0" }}
          to="/kids"
        >
          <Catlist catname="KIDS" catimage={"/kidd.jpg"} />
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "0", padding: "0" }}
          to="/men"
        >
          <Catlist catname="MEN" catimage={"/palm4.jpg"} />
        </Link>
      </div>
      {/* --- CATEGORY SECTION COMPONENT END --- */}

      {/* --- PROTECTION ---*/}
      <div className="Pro-bond">
        <Protection
          proname="FAST DELIVERY"
          protext="Shipped In One Piece"
          proicon={<LocalShippingIcon className="pro-image" />}
        />
        <div className="protect-class">
          <Protection
            proname="ORDER PROTECTION"
            protext="Secured Payment And Info"
            proicon={<VerifiedUserIcon className="pro-image" />}
          />
        </div>

        <Protection
          proname="RETURN POLICY"
          protext="Seven (7) Days Returns"
          proicon={<LocalAtmIcon className="pro-image" />}
        />
      </div>
      {/* --- PROTECTION END ---*/}

      {/* --- CATEGORY COMPONENT START --- */}
      <div className="List-start">
        <div className="Category-body">
          <div className="Category-name">MEN SLIPPERS</div>
          <Link to="/Men" className="Category-angle">
            SEE ALL <ArrowRightIcon style={{ color: "#EA1179" }} />
          </Link>
        </div>
        <div className="Cat-Scroll">
          <Mencategory />
        </div>
      </div>

      <div className="List-start">
        <div className="Category-body">
          <div className="Category-name">WOMEN SLIPPERS</div>
          <Link to="/Women" className="Category-angle">
            SEE ALL <ArrowRightIcon style={{ color: "#EA1179" }} />
          </Link>
        </div>
        <div className="Cat-Scroll">
          <Womencategory />
        </div>
      </div>

      <div className="List-start">
        <div className="Category-body">
          <div className="Category-name">KIDS</div>
          <Link to="Kids" className="Category-angle">
            SEE ALL <ArrowRightIcon style={{ color: "#EA1179" }} />
          </Link>
        </div>
        <div className="Cat-Scroll">
          <Kidscategory />
        </div>
      </div>

      <div className="List-start">
        <div className="Category-body">
          <div className="Category-name">BELTS</div>
          <Link to="/Belts" className="Category-angle">
            SEE ALL <ArrowRightIcon style={{ color: "#EA1179" }} />
          </Link>
        </div>
        <div className="Cat-Scroll">
          <Beltscategory />
        </div>
      </div>
      {/* --- CATEGORY COMPONENT END --- */}
    </div>
  );
}

export default Home;
