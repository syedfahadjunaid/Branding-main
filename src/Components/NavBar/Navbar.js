import React, { Fragment, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../button/Button";
// import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {  ArrowForward, KeyboardArrowDown } from "@mui/icons-material";
// import { RiArrowDownSFill } from "react-icons/ri";

function Navbar() {
  // const history=useNavigate()
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  let activeStyle = {
    color: "#61B946",
    // fontweight: "700",
   
    
  };
  const [mobileView, setMobileView] = useState(false);
  const [servicesMobile,setServicesMobile]=useState(false)

  let activeClassName = "underline";
  const openHamburger = () => {
    setMobileView(!mobileView);
    // window.scroll(0, 0);
  };
  // Services Dropdown
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // const services = [
  //   {
  //     title: "Web Design",
  //     address: "/webdevelopment",
  //   },
  //   {
  //     title: "Web Development",
  //     address: "/webdevelopment",
  //   },
  //   {
  //     title: "Graphic Design",
  //     address: "/grapgicdesign",
  //   },
  //   {
  //     title: "Content Marketing",
  //     address: "/contentmarketing",
  //   },
  //   {
  //     title: "Digital MarKeting",
  //     address: "/digitalmarketing",
  //   },
  //   {
  //     title: "Pay Per Click",
  //     address: "/payperclick",
  //   },
  // ];

  // const renderedServicesDropdown = services.map((service, index) => {
  //   return (
  //     <Link to={service.address} style={{ textDecoration: "none" }}>
  //       <li
  //         className="navbar-dropdown-links"
  //         key={index}
  //         style={{ color: "#111" }}
  //       >
  //         {service.title} <ArrowRightAlt />
  //       </li>
  //     </Link>
  //   );
  // });

  return (
    <Fragment>
      {" "}
      <div className={scrolled ? "navbar navbar_buttom" : "navbar"}>
        <div className="navbar_left">
          <Link to="/">
            <img className="navbar_left_img" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar_right">
          <div className="navbar_right_first">
         
            <ul>
              <li>
                <NavLink
                  className="navbar_right_first_link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <div className="dropdown">
               <p className="dropbtn">Services <KeyboardArrowDown className="dropbtn_arrow"/></p>
               <div className="dropdown-content">
                <Link to='/webdesign' style={{textDecoration:'none'}}>Web Design <ArrowForward/></Link>
                <Link to='/webdevelopment' style={{textDecoration:'none'}}>Web Development <ArrowForward/></Link>
                <Link to='/contentmarketing' style={{textDecoration:'none'}}>Content Marketing <ArrowForward/></Link>
                <Link to='/digitalmarketing' style={{textDecoration:'none'}}>Digital MarKeting <ArrowForward/></Link>
                <Link to='/grapgicdesign' style={{textDecoration:'none'}}>Graphic Design <ArrowForward/></Link>
                <Link to='/payperclick' style={{textDecoration:'none'}}>Pay Per Click <ArrowForward/></Link>
               </div>
              </div>
              <li>
                <NavLink
                  className="navbar_right_first_link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/ourwork"
                >
                  Our Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar_right_first_link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/casestudy"
                >
                  Case Study
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="navbar_right_first_link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassname="navbar__link--active"
                  className="navbar_right_first_link"
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar_right_second">
            <Button url="/contactus">Contact Us</Button>
          </div>
        </div>

        <div className="hamburger" onClick={openHamburger}>
          <MenuIcon
            className={
              mobileView ? "hamburger_icon hamburger_active" : "hamburger_icon"
            }
          />
        </div>
      </div>
      {mobileView && (
        <div className="mobile_nav scale-in-tr">
             
          <ul className=" mobile_nav_ul">
            <li>
              <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
                onClick={() => setMobileView(false)}
              >
                Home
              </NavLink>
              <div className="services_services_mobile">
                
                <p onClick={()=>setServicesMobile(!servicesMobile)} className="dropdown1">Services <KeyboardArrowDown/></p>
               {servicesMobile && <ul className="">
               <Link to='/webdevelopment' className="services_services_mobile_link" onClick={() => setMobileView(false)}>   <li  >Web Development</li></Link>
               <Link to='/webdesign' className="services_services_mobile_link" onClick={() => setMobileView(false)}> <li>Web Design</li></Link>
               <Link to='/grapgicdesign' className="services_services_mobile_link" onClick={() => setMobileView(false)}>   <li >Graphic Design</li></Link>
               <Link to='/contentmarketing' className="services_services_mobile_link" onClick={() => setMobileView(false)}>   <li >Content MarKeting</li></Link>
               <Link to='/digitalmarketing' className="services_services_mobile_link" onClick={() => setMobileView(false)}>  <li >Digital Marketing</li></Link>
               <Link to='/payperclick' className="services_services_mobile_link" onClick={() => setMobileView(false)}>   <li >Pay Per Click</li></Link>
                </ul>}
              </div>
              {/* <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/services"
                onClick={() => setMobileView(false)}
              ></NavLink> */}
               <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/ourwork"
                onClick={() => setMobileView(false)}
              >
                Our Project
              </NavLink>
              <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/casestudy"
                onClick={() => setMobileView(false)}
              >
                Case Study
              </NavLink>
              <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
                onClick={() => setMobileView(false)}
              >
                About
              </NavLink>
              <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/blog"
                onClick={() => setMobileView(false)}
              >
                Blog
              </NavLink>
              <NavLink
                className="navbar_right_first_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/contactus"
                onClick={() => setMobileView(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;
