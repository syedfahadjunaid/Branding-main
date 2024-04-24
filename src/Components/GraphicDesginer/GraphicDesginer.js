import React from "react";
import Banner from "../../banner/Banner";
import Footer from "../../Footer/Footer";
import WebCard from "../../Web Card/WebCard";
import ContactUs from "../ContactUs/ContactUs";
import img1 from "../../images/casestudysinglepageBanner.jpg";
import img2 from "../../images/Ellipse 92.jpg";
import img3 from "../../images/Ellipse 92.jpg";
import img4 from "../../images/Ellipse 92.jpg";
import img5 from "../../images/Ellipse 92.jpg";
import img9 from "../../images/IMG-20230130-WA0005.jpg";
import img6 from "../../images/WhatsApp Image 2023-02-03 at 5.49.jpg";
import img11 from "../../images/./neew/1_0006_26-07-22-price2.jpg";
import img8 from "../../images/./neew/1_0012_volvo xc 40.jpg";
// import img6 from "../../images/WhatsApp Image 2023-02-03 at 5.49.jpg";

import "./GraphicDesginer.css";
import Button from "../../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
function GraphicDesginer() {
  useEffect(() => {
    AOS.init();
  }, []);
  const history = useNavigate();
  return (
    <div className="graphicdesginer">
      <div className="graphicdesginer_header">
        <div className="graphicdesginer_header_heading">
          <h5>Graphic designer </h5>
        </div>
        <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/grapgicdesign' className="webdevelopment_breadCrums_webdevelopment">
Graphic Design
        </Link>

      </div>
        <Banner img={img1} />
        <div className="graphicdesginer_header_profile">
          <img src={img2} loading="lazy" alt="banner"/>
          <img src={img3} loading="lazy" alt="banner"/>
          <img src={img4} loading="lazy" alt="banner"/>
          <img src={img5} loading="lazy" alt="banner"/>
        </div>
      </div>
      <div className="graphicdesginer_details" data-aos="fade-up"
          data-aos-duration="1000">
        <div
          className="graphicdesginer_details_left"
          
        >
          <img src={img6} loading="lazy" alt="banner"/>
        </div>
        <div
          className="graphicdesginer_details_right"
          // data-aos="fade-up-left"
          // data-aos-duration="2000"
        >
          <h6>
            Let you brand evolve with a data-driven creative team at Branding
            360 Neo Pvt. Ltd.{" "}
          </h6>
          <p>
            We are the branding agency focused on infusing design with data to
            address the complex communication issues. We are not an ordinary
            branding agency, but a collective of digital creative and mavericks
            focused on a mission to help businesses develop and grow into brands
            that burst with excitement.
          </p>{" "}
          <p>
            There is no limit to what one can get designed at Branding 360 Neo
            Pvt. Ltd. Whether you want to design an impressive new logo for your
            brand or spectacular flyers or banners, the talented community of
            designers at Branding 360 can cover them all with highest precision
            and professionalism. We take the pride on its high quality designers
            who can deliver the best graphic designing services.
          </p>
          {/* <Button url='/contactus'>Send Message</Button> */}
        </div>
      </div>
      <div
        className="graphicdesginer_video"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Banner img={img1} />
        <div className="graphicdesginer_video_button">
          <Button url='/graphicDesign'>View More</Button>
        </div>
      </div>
      <div
        className="graphicdesginer_card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <WebCard
          // img={img10}
          discription="Poster designing services can help create the custom design posters and banners that reflect the brand and messaging while keeping in mind the target audiences and purposes. We help create visually appealing posters for brands."
          title="Poster Design"
          btn="View Work"
          link="/ourwork"
        />
        <WebCard
          discription="Go beyond the template while inspiring a unique vision! Build lasting impression at a first glance with our logo design services. We help design the remarkable logos for bands that visually stand out, while building unique identity for your brands."
          title="Logo Design"
          btn="View Work"
          link="/ourwork"
        />
        <WebCard
          discription="Unlock finesse with professional video editing and post-production services by Branding 360 Neo Pvt. Ltd. We are skilled in handling different levels of video editing, mainly the creative ones. Get a hands-on experience with our video editing services. "
          title="Video Editing"
          btn="View Work"
          link="/ourwork"
        />
        <WebCard
          discription="The designers are skilled in creating custom reels that reflect the brand’s value while keeping in mind the targeted audiences. We specialize in creating dynamic and engaging short-form videos for individuals and businesses."
          title="Reels"
          btn="View Work"
          link="/ourwork"
        />
        <WebCard
          discription="From character illustrations to editorial illustrations, product illustrations to infographics and more, we are skilled in delivering custom designing solutions that work best for your brand. "
          title="Illustration "
          btn="View Work"
          link="/ourwork"
        />
        <WebCard
          discription="Do you want to build your product with professionals who establish a clear design process, deliver spot-on end results and meets deadlines? Turn to Branding 360 Neo Pvt. Ltd and we ca rest assure to craft efficient design process that can bring solid results quickly.       "
          title="UI & UX Design"
          btn="View Work"
          link="/ourwork"
        />
      </div>
      <div className="graphicdesginer_details1">
        <p>
          Need to create the lasting first impression? The correct blend of
          shapes, colors and words define the brand right way. Get the perfect
          graphic designing services at Branding 360 Neo Pvt. Ltd to ensure your
          brand hit the spot with the following services.
        </p>
      </div>
      <div
        className="graphicdesginer_img_card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="graphicdesginer_img_card_left">
          <img
            src={img11}
            style={{ cursor: "pointer" }}
            onClick={() => history("/ourwork") }
            loading="lazy"
            alt="banner"
          />
        </div>
        <div className="graphicdesginer_img_card_right">
          <img
            src={img8}
            style={{ cursor: "pointer" }}
            onClick={() => history("/ourwork") }
            loading="lazy"
            alt="banner"
          />
        </div>
      </div>
      <div className="graphicdesginer_banner">
        <Banner img={img9} />
      </div>
      <div className="graphicdesginer_details1">
        <p>
          Whether you are looking to design & develop entire website graphics or
          want to grab attention to your services and products via
          professionally designed brochures, our team of professional graphic
          designers is up to it. Our team is dedicated to catering to customers
          with different needs, with different goals and budgets. Every time we
          came out with creative solutions and highest customer satisfaction.
        </p>
        <p>
          Each project is delivered by a team of specialized and skilled graphic
          designers and hence each client is likely to receive bespoke services
          and attention to detail. Our designers are responsive and our services
          are not limited to graphic designing, but we also specialize in
          comprehensive digital marketing solutions.
        </p>
        <Button url='/contactus'>Send Message</Button>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default GraphicDesginer;
