import { Facebook, Instagram, KeyboardArrowRight, LinkedIn, Twitter } from "@mui/icons-material";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
import React from "react";
import landingPage from "../../images/image 127.jpg";
import { Link } from "react-router-dom";
import img from "../../images/image 12.jpg";
import img1 from "../../images/image 122.jpg";
import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import CaseStudyCardLarge from "../CaseStudyCardLarge/CaseStudyCardLarge";
import "./CaseStudyPage.css";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function CaseStudyPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="casestudypage">
      <div
        className="casestudypage_header"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h5>Case study</h5>
        <div className="casestudypage_header_icons">
          <Link
            to="https://www.instagram.com/branding360.in/?hl=en"
            target="_blank"
          >
            <Instagram className="casestudypage_header_icons_icon instagram" />
          </Link>
          <Link to="https://twitter.com/branding360_" target="_blank">
            <Twitter className="casestudypage_header_icons_icon twitter" />
          </Link>
          <Link to="https://www.facebook.com/branding360.in/" target="_blank">
            <Facebook className="casestudypage_header_icons_icon facebook" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/branding-360/mycompany/"
            target="_blank"
          >
            <LinkedIn className="casestudypage_header_icons_icon linkedin" />
          </Link>
        </div>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link to="/casestudy" className="webdevelopment_breadCrums_webdevelopment">
          Case Study
        </Link>
    
      </div>
      <div
        className="casestudypage_card"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          title="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
      </div>
      <div
        className="casestudypage_banner_card"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CaseStudyCardLarge color="#ECF2FE" img={img1} />
      </div>
      <div
        className="casestudypage_card_card"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CaseStudyCard
          padding_top="10px"
          img={img}
          link="/"
          margin="10px"
          read="Read  More"
          title="How to make a website
look more attractive with
illustrations."
          dic="How to make a website
look more attractive with
illustrations."
          subDic="Design, Illustrations, UI/UX"
          height="500px"
          width="350px"
        />
        <CaseStudyCard
          padding_top="10px"
          img={img}
          link="/"
          read="Read  More"
          title="How to make a website
look more attractive with
illustrations."
          dic="How to make a website
look more attractive with
illustrations."
          subDic="Design, Illustrations, UI/UX"
          height="500px"
          width="350px"
          margin="10px"
        />
      </div>
      <div
        className="casestudypage_landingpage"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CaseStudyCardLarge
          color="#FF7580"
          textcolor="#fff"
          img={landingPage}
        />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default CaseStudyPage;
