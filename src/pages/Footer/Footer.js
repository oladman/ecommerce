import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footeroptions from "./Footeroptions";
import { Link } from "react-router-dom";

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
          <Link to="/" className="link" href="#">
            Contact Us
          </Link>
          <Link to="/" className="link" href="#">
            About Us
          </Link>
          <Link to="/" a className="link" href="#">
            Careers
          </Link>
          <Link to="/" className="link" href="#">
            Our Blog
          </Link>
          <Link to="/" className="link" href="#">
            Forums
          </Link>
          <Link to="/" className="link" href="#">
            Terms & Conditions
          </Link>
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
          <Link to="/" className="link">
            FAQs
          </Link>
          <Link to="/" className="link">
            Delivery
          </Link>
          <Link to="/" className="link">
            Yeffso Return Policy
          </Link>
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
          <Link to="/" className="link">
            Privacy Policy
          </Link>
          <Link to="/" className="link">
            
            Authentic Items Policy
          </Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">MAKE MONEY ON YEFFSOFEET</div>
          <Link className="link" to="/">
            Become a Yeffso Affiliate{" "}
          </Link>
        </div>

        <div className="Footer-Header-Style">
          <div className="link-Header">DOWNLOAD & CONNECT WITH US</div>
          <img src="./yeffsologo.jpg" className="Bottom-Logo" />
        </div>
      </div>

      <p className="hbottom">
        <span>Copyright © 2023 Yeffsofeet.com. All rights reserved</span>
      </p>
      <p className="hspan">this is some content other</p>

      <div style={{ backgroundColor:'#f2f2f2' }}><div className="Mobile-footer">
        <h3>Yeffso Online Shopping in Nigeria - Best Shoe Shopping Site </h3>

        <p>
          Yeffso.com is Nigeria’s number one online Shopping destination.We
          pride ourselves in having everything you could possibly need for life
          and living at the best prices than anywhere else. Our access to
          Original Equipment Manufacturers and premium sellers gives us a wide
          range of products at very low prices. Some of our popular categories
          include electronics, mobile phones, computers, fashion, beauty
          products, home and kitchen, Building and construction materials and a
          whole lot more from premium brands. Some of our other categories
          include Food and drinks, automotive and industrial, books, musical
          equipment, babies and kids items, sports and fitness, to mention a
          few. To make your shopping experience swift and memorable, there are
          also added services like gift vouchers, consumer promotion activities
          across different categories and bulk purchases with hassle-free
          delivery. Enjoy free shipping rates for certain products and with the
          bulk purchase option, you can enjoy low shipping rates, discounted
          prices and flexible payment. When you shop on our platform, you can
          pay with your debit card or via KongaPay, which is a convenient and
          secured payment solution. Get the best of lifestyle services online.
          Don't miss out on the biggest sales online which takes place on
          special dates yearly.
        </p>
      </div> </div>
    </div>
  );
}

export default Footer;
