import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footeroptions from "./Footeroptions";
import { Link } from "react-router-dom";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Footer() {
  return (
    <div className="Footer">
      <div className="Top-Footer-Main">
        <div className="Top-Footer">
          <Footeroptions
            icon={<EmailIcon className="EmailIcon" />}
            TextOne="EMAIL SUPPORT"
            TextTwo="Yeffsofeet@gmail.com"
          />
          <Footeroptions
            icon={<CallIcon className="EmailIcon" />}
            TextOne="PHONE SUPPORT"
            TextTwo="08142622487, 09068084773"
          />
          <Footeroptions
            icon={<WhatsAppIcon className="EmailIcon" />}
            TextOne="WHATSAPP"
            TextTwo="08142622487, 09068084773"
          />

          <div className="BottomFooterTextNew">
            <div className="Topfooter-Text">GET LATEST DEALS</div>
            <div className="Bottomfooter-Text">
              Our best promotions sent to your inbox.
            </div>
          </div>

          <div className="subscribeCompo">
            <input
              className="subscribeInput"
              type="text"
              placeholder="Email Address"
            />
            <button className="SubButton">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="Main-Footer">
        <div className="Footer-Header-Style">
          <div className="link-Header">NEED HELP?</div>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/contact">Contact Us</Link>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/about">About Us</Link>
        
          <Link to="/" a className="link" href="#">
            Careers
          </Link>
          <Link to="/" className="link" href="#">
            Our Blog
          </Link>
          <Link to="/" className="link" href="#">
            Forums
          </Link>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/about">Terms & Conditions</Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">PAYMENT</div>

          <Link to="/" className="link">
            YeffsoPay
          </Link>
          <Link to="/" className="link">
            Wallet
          </Link>
          <Link to="/" className="link">
            Verve
          </Link>
          <Link to="/" className="link">
            MasterCard
          </Link>
          <Link to="/" className="link">
            Visa
          </Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">BUYING ON YEFFSO</div>
          <Link to="/" className="link">
            Buyer Safety Centre
          </Link>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/faqs">FAQs</Link>
          <Link to="/" className="link">
            Delivery
          </Link>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/return">Return Policy</Link>
          <Link to="/" className="link">
            Digital Services
          </Link>
          <Link to="/" className="link">
            Bulk Purchase
          </Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">MORE INFO</div>
          <Link to="/" className="link">
            Site Map
          </Link>
          <Link to="/" className="link">
            Track My Order
          </Link>
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/about">Privacy Policy</Link>
          <Link to="/" className="link">
            Authentic Items Policy
          </Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">MAKE MONEY ON YEFFSOFEET</div>
          
          <Link className="link" style={{ textDecoration:"none", color:"white" }} to="/patner">Become a Yeffso Affiliate</Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">DOWNLOAD & CONNECT WITH US</div>
          <img src="./yeffsologo.jpg" className="Bottom-Logo" />
        </div>
      </div>

      <p className="hbottom">
        <span>Copyright © 2023 Yeffsofeet. All rights reserved</span>
      </p>
      <p className="hspan">this is some content other</p>

      <div>
        <div className="Mobile-footer">
          <div className="top-m-footer">
            <ArrowDropUpIcon  style={{ padding:'0', margin:'0' }}/>
            <p>TOP OF PAGE</p>
          </div>
          <div className="bottom-m-footer">
            <ul>
              <li><Link style={{ textDecoration:"none", color:"white" }} to="/about">About Us</Link></li>
              <li><Link style={{ textDecoration:"none", color:"white" }} to="/contact">Contact Us </Link></li>
              <li><Link style={{ textDecoration:"none", color:"white" }} to="/contact">Terms & Conditions </Link></li>
              <li><Link style={{ textDecoration:"none", color:"white" }} to="/returns">Returns</Link></li>
              <li><Link style={{ textDecoration:"none", color:"white" }} to="/faqs">FAQs</Link></li>
          
            </ul>
            <ul>
            <li><Link style={{ textDecoration:"none", color:"white" }} to="/profile">Your Account</Link></li>
            <li><Link style={{ textDecoration:"none", color:"white" }} to="/orders">Your Orders</Link></li>
            <li><Link style={{ textDecoration:"none", color:"white" }}  to="/privacy">Privacy Policy</Link></li>
            <li><Link style={{ textDecoration:"none", color:"white" }}  to="/patner">Sell Product on Yeffso</Link></li>
            <li><Link style={{ textDecoration:"none", color:"white" }} to="/patner">Customer Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
