import React from "react";
import "./WebDevelopment.css";
import img from "../../images/pexels-moose-photos-1037992 1.jpg";
import img1 from "../../images/image 118.jpg";
import img2 from "../../images/Rectangle 1232.jpg";
import img3 from "../../images/image 119.png";
import Banner from "../../banner/Banner";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

import WebCard1 from "../../Web Card/webCard1";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import { KeyboardArrowRight, Star } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function WebDevelopment() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="webdevelopment">
      <div className="webdevelopment_header">
        <h5>Web Development</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/webdevelopment' className="webdevelopment_breadCrums_webdevelopment">
          Web Development
        </Link>

      </div>
{/* <BreadCrums/> */}
      <div className="webdevelopment_banner">
        <Banner img={img} alt='Banner'/>
       
      </div>
      <div
        className="webdevelopment_main1"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <div className="webdevelopment_main1_left">
          <img src={img1} alt="banner" loading="lazy" />
        </div>
        <div className="webdevelopment_main1_right">
          <h6>
            Cutting-edge technology designed with highest precision to cultivate
            engagement across digital sphere!
          </h6>
          <p>
            We at Branding 360 Neo Pvt. Ltd design the functional interferes for
            aesthetically appealing digital presence to help narrate the success
            story while boosting the brand performance and awareness. When we
            design website, we ensure that the design match the business model,
            while drive traffic and get the desired results.
          </p>
          <p>
            We help design your website from scratch, support in website
            transfer, drive traffic and convert the existing traffic better.
            Each webpage is designed to relay a spontaneous UI/UX design to
            heighten visitor’s interaction with the assistance of data-driven
            research. Our designers are attuned with the latest trends to
            deliver responsive designs to help engage more consumers across the
            digital sphere.
          </p>
          {/* <Button url='/contactus'>Send Message</Button> */}
          {/* <Link className="webdevelopment_main1_right_link" to='#'>Send Message</Link> */}
        </div>
      </div>
      <div
        className="webdevelopment_main2"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <WebCard1
          discription="Static Web Development involves developing websites that are pre-designed and can’t be alerted dynamically. It means the content on the website remains same until the website is updated manually. We use CSS and HTML to designed static website and in some cases JavaScript is implemented for static web development. "
          title="Static Website Development" 
        />
        <WebCard1
          discription="Dynamic Web Development involves developing websites that can be changed or updated dynamically according to owner’s input and other variables. Server-side scripting language is used to develop typical dynamic websites, including Python, Ruby, PHP and it may even use databases to retrieve and store information. "
          title="Dynamic Website Development"
        />
        <WebCard1
          discription="E-Commerce Web Development involves developing online shop or stores to allow businesses sell and promote their services and products digitally. The websites can be dynamic or static, but features some advanced functionalities. Some of common functionalities include: payment gateways, shopping carts, product listings, and other management systems. "
          title="E-Commerce Website Development"
        />
        <WebCard1
          discription="Web-Based App Development is the method of developing software applications that functions digitally via a web browser. The application is accessible from anywhere via internet connectivity and we ensure designing the app that is platform independent, it means the apps can be used on any operating system. "
          title="Web Based Application Development "
        />
        <WebCard1
          discription="Mobile Application Development is the method of creating software application for mobile devices like tablets and Smartphone. We specialize in developing mobile apps for different platforms, including Windows, Android, and iOS. We develop the apps using native programming languages, hybrid development methods and cross-platform frameworks.    "
          title="Mobile Application Development"
        />
        <WebCard1
          discription="Web page management involves creating, maintaining and updating the web pages of a website. It helps developing a robust online presence and maximizes engagement with the site visitors. The goal is to ensure that the site is engaging, informative and user-friendly.   "
          title="Page Management" setOpen1={false}
        />
      </div>
      <div className="webdevelopment_main3">
        <Banner img={img2} alt='banner'/>
        <div className="webdevelopment_main3_details">
          <div className="webdevelopment_main3_details_img">
            <img src="https://cdn.dribbble.com/userupload/3066711/file/original-f85b6179125a8d8a32a77023b8ddd16c.jpg?resize=400x0" alt='banner'/>
            <h6 style={{ fontSize: "22px", marginLeft: "10px" }}>Nemesis</h6>
          </div>
          <div className="webdevelopment_main3_details_description">
            <p>
              Lorem ipsum dolor sit amet consectetur. Volutpat morbi enim mauris
              libero. Eget dignissim gravida vel magna diam auctor bibendum sem.
            </p>
            <span>
              <Star style={{ color: "gold" }} />
              <Star style={{ color: "gold" }} />
              <Star style={{ color: "gold" }} />
              <Star style={{ color: "gold" }} />
              <Star style={{ color: "gold" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="webdevelopment_main4"  >
        <div
          className="webdevelopment_main4_left"
          // data-aos="fade-up-right"
          // data-aos-duration="2000"
        >
          <h6>Developing Truly Unique Web Experiences!</h6>
          <p>
          When designing a website, our unique approaches start from a marketing and conversion prospective. We ensure delivering intuitive, engaging and responsive web design service so that target customers can find your website easily online, stay engaged on the site and perform an action, like making calls, filling out forms and buying something. Overall, we focus on delivering truly unique web experiences both to you and your clients. 
          </p>
          <p>
          Our expertise and rich experiences cover a wide array of areas, ranging from simple projects like static web designing to dynamic web development to ecommerce solutions and web based applications. Our web designing service provides the right assistance and resources to design web based solutions, whether you are a startup looking for static web design service or want to scale up the look by improving the products and services through dynamic web designing or ecommerce solutions, Branding 360 Neo Pvt. Ltd have them all covered.  
          </p>
          <Button url='/contactus'>Send Message</Button>
        </div>
        <div
          className="webdevelopment_main4_right"
          // data-aos="fade-up-left"
          // data-aos-duration="2000"
        >
          <img src={img3} alt="banner" loading="lazy"/>
          {/* <Link className="webdevelopment_main1_right_link" to='#'>Send Message</Link> */}
        </div>
      </div>

      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default WebDevelopment;
