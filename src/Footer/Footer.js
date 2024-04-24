import {
  ArrowCircleUp,
  Instagram,
  LinkedIn,
  LocalPhone,
  LocationOn,
  MailOutline,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import logo from "../images/logo.png";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const scrollUpHandle = () => {
    window.scroll(0, 0);
    console.log("clicked");
  };
  const history = useNavigate();
  return (
    <div className="footer">
      <div id="space">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div>
      <div className="footer_joinletter">
        <div className="footer_joinletter_logo">
          <img src={logo} alt='footer'/>
          <h5>Join a NewsLetter</h5>
        </div>
        <div className="footer_joinletter_suscribe">
          <p>Your Mail</p>
          <div className="footer_joinletter_suscribe_emailbox">
            <input type="email" name="email" id="" />
            <button>Suscribe</button>
            <ArrowCircleUp
              className="footer_joinletter_icon"
              onClick={scrollUpHandle}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="footer_about">
        <div className="footer_about_contact">
          <h6> Our Address</h6>
          <div className="footer_about_contact_address">
            <span className="footer_about_contact_icon">
              <LocationOn />
            </span>
            <Link
              to="http://maps.google.com/?q=  Branding 360 - SEO Company in Lucknow | Social Media Marketing Agency in Lucknow, Mira Bai Marg, Civil Lines, Lucknow, Uttar Pradesh"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p style={{ color: "#fff" }}>
                {" "}
                2nd Floor, Khushnuma Complex, <br /> Meera Bai Marg,
                <br /> Lucknow-226001
              </p>
            </Link>
          </div>
          <div className="footer_about_contact_address">
            <span className="footer_about_contact_icon">
              <MailOutline />
            </span>{" "}
            <Link
              to="mailto:admin@branding360.in"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p style={{ color: "#fff" }}>admin@branding360.in</p>
            </Link>
          </div>
          <div className="footer_about_contact_address">
            <span className="footer_about_contact_icon">
              <LocalPhone />
            </span>{" "}
            <Link to="https://wa.me/+919919444434" style={{ textDecoration: "none" }}>
              <p style={{ color: "#fff" }}>+91 9919444434</p>
            </Link>
          </div>
        </div>
        <div className="footer_about_services">
          <h6>Services</h6>

          <p onClick={() => history("/webdesign")}>Web Design </p>

          <p onClick={() => history("/payperclick")}>Pay Per Click </p>
          <p onClick={() => history("/grapgicdesign")}>Graphic design </p>

          <p onClick={() => history("/digitalmarketing")}>Digital Marketing</p>
          <p onClick={() => history("/webdevelopment")}>Web Devlopment</p>
          <p onClick={() => history("/contentmarketing")}>Content Marketing </p>
        </div>
        <div className="footer_about_navbar">
          <h6>Navbar</h6>
          <p onClick={() => history("/blog")}>Blog</p>
          <p onClick={() => history("/")}>Home</p>
          <p onClick={() => history("/about")}>About Us</p>
          <p onClick={() => history("/casestudy")}>Case Study</p>
          <p onClick={() => history("/ourwork")}>Our Project</p>
        </div>
        <div className="footer_about_icons">
          <h6>Our Links</h6>
          <span>
            <Link to="https://twitter.com/branding360_" target="_blank">
              <Twitter className="footer_about_icons_icon twitter" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/branding-360/mycompany/"
              target="_blank"
            >
              {" "}
              <LinkedIn className="footer_about_icons_icon linkedin" />
            </Link>
            <Link to="https://wa.me/9919444434" target="_blank">
              <WhatsApp className="footer_about_icons_icon whatsapp1" />
            </Link>
            <Link
              to="https://www.instagram.com/branding360.in/?hl=en"
              target="_blank"
            >
              {" "}
              <Instagram className="footer_about_icons_icon instagram" />
            </Link>
          </span>
        </div>
      </div>
      <div className="footer_about_mobile">
        <div className="footer_about_mobile_mobile">
          <div className="footer_about_contact">
            <h6> Our Address</h6>
            <div className="footer_about_contact_address">
              <span className="footer_about_contact_icon">
                <LocationOn />
              </span>
              <Link
                to="mailto:admin@branding360.in"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p style={{ color: "#fff" }}>
                  2nd Floor, <br />
                  Khushnuma Complex, Meera Bai Marg,
                  <br /> Lucknow-226001
                </p>
              </Link>
            </div>
            <div className="footer_about_contact_address">
              <span className="footer_about_contact_icon">
                <MailOutline />
              </span>{" "}
              <Link
                to="mailto:admin@branding360.in"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p style={{ color: "#fff" }}>admin@branding360.in</p>
              </Link>
            </div>
            <div className="footer_about_contact_address">
              <span className="footer_about_contact_icon">
                <LocalPhone />
              </span>{" "}
              <Link to="https://wa.me/+919919444434" style={{ textDecoration: "none" }}>
                <p style={{ color: "#fff" }}>+91 9919444434</p>
              </Link>
            </div>
          </div>
          <div className="footer_about_icons">
            <h6>Our Links</h6>
            <span>
              <Link to="https://twitter.com/branding360_" target="_blank">
                <Twitter className="footer_about_icons_icon twitter" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/branding-360/mycompany/"
                target="_blank"
              >
                {" "}
                <LinkedIn className="footer_about_icons_icon linkedin" />
              </Link>
              <Link to="https://wa.me/9919444434" target="_blank">
                <WhatsApp className="footer_about_icons_icon whatsapp1" />
              </Link>
              <Link
                to="https://www.instagram.com/branding360.in/?hl=en"
                target="_blank"
              >
                {" "}
                <Instagram className="footer_about_icons_icon instagram" />
              </Link>
            </span>
          </div>
        </div>
        <div className="footer_about_mobile_mobile">
          <div className="footer_about_services">
            <h6>Services</h6>
            <p onClick={() => history("/webdesign")}>Web Design </p>
            <p onClick={() => history("/payperclick")}>Pay Per Click </p>
            <p onClick={() => history("/grapgicdesign")}>Graphic design </p>
            <p onClick={() => history("/digitalmarketing")}>Digital Marketing</p>
            <p onClick={() => history("/webdevelopment")}>Web Devlopment</p>
            <p onClick={() => history("/contentmarketing")}>Content Marketing </p>
          </div>
          <div className="footer_about_navbar  footer_about_navbar_mobile">
            <h6>Navbar</h6>
            <p onClick={() => history("/")}>Home</p>
            <p onClick={() => history("/blog")}>Blog</p>
            <p onClick={() => history("/about")}>About Us</p>
            <p onClick={() => history("/casestudy")}>Case Study</p>
            <p onClick={() => history("/ourwork")}>Our Project</p>
          </div>
        </div>
      </div>
      <div className="footer_privacy">
        <p>Copyright @2023 Branding360. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
