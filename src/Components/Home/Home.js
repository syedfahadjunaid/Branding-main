import React from "react";
import "./Home.css";
import landingPage from "../../images/landingPage.jpg";

// import landingPage from "../../images/homefirstimg.png";
import Achivement from "../Achivement/Achivement";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import Portfolio from "../PortFolio/Portfolio";
import CaseStudy from "../Case Study/CaseStudy";
import Clients from "../Clinets/Clients";
import Members from "../Members/Members";
import Footer from "../../Footer/Footer";
import { Avatar } from "@mui/material";
import { Star } from "@mui/icons-material";
function Home() {
  return (
    <div className="home">
      <h2>
        Transform your digital landscape and create <br /> an unforgettable
        online presence.
      </h2>
      <p>
        Experience a full spectrum of digital marketing services  that drive real
        results and ROI for your business. From web designing to SMM and SEO,
        we've got you covered with our tailored  digital marketing solutions to
        revolutionize and dominate the marketplace.
      </p>
      <Link className="home_link" to="/contactus">
        Start Project
      </Link>
      <div className="home_img">
        {/* <LazyLoadImage
        src={landingPage}
        placeholderSrc={landingPagePlaceHolder}/> */}
        <img src={landingPage} alt="" />
        <div className="home_left_top slide-in-fwd-br ">
          <span>
            {" "}
            <span className="home_left_top_star">
              <Star />
            </span>{" "}
            Great Project
          </span>
          <span>
            <strong>800</strong>+ Done
          </span>
        </div>
        <div className="home_left_buttom slide-in-fwd-tr ">
          <span className="home_left_buttom_span">
            <span className="home_left_top_star">
              <Star />
            </span>{" "}
            Years Of Service
          </span>
          <span>
            {" "}
            <strong>17</strong>+ Years
          </span>
        </div>
        <div className="home_right_top slide-in-fwd-tl ">
          <span className="home_left_buttom_span">
            {" "}
            <span className="home_left_top_star">
              <Star />
            </span>{" "}
            CLIENT RENTENTION
          </span>
          <span>
            {" "}
            <strong>99</strong> % Done
          </span>
        </div>
        <div className="home_right_button slide-in-fwd-bl ">
          <span className="home_right_button_span">
            <Avatar
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoWORLHB_liy4S69-qyxYOWv2lV8sNBMb3Q&usqp=CAU"
            />{" "}
            <p>Bills Admas</p>
          </span>
          <span>Great Experision</span>
        </div>
      </div>
      <Achivement />
      <ContactUs />
      <Services />
      <Portfolio />
      <CaseStudy />
      <Clients />
      <Members />
      <Footer />
    </div>
  );
}

export default Home;
