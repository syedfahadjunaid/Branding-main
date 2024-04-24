import React, { useEffect, useState } from "react";
import "./DigitalMarketing.css";
import img from "../../images/image 129.jpg";
import img3 from "../../images/digital.jpg";
import img4 from "../../images/image 11.png";
import img7 from "../../images/image 12.png";
import img8 from "../../images/image 13.png";
import Banner from "../../banner/Banner";
import WebCard from "../../Web Card/WebCard";
import Button from "../../button/Button";
import Achivement from "../Achivement/Achivement";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import img9 from "../../images/image 59.jpg";
import img10 from "../../images/image 63.jpg";
import img11 from "../../images/image 63.jpg";
import img12 from "../../images/image 57.jpg";
import img51 from "../../images/image 56.jpg";
import img61 from "../../images/image 11.jpg";
import img71 from "../../images/Rectangle 1277.jpg";
import img81 from "../../images/Technology Partners.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function DigitalMarketing() {
  const maxLength = 3;
  const [smo, setSmo] = useState(true);
  const [seo, setSeo] = useState(false);
  const [local, setLocal] = useState(false);
  // const [content, setContent] = useState(false);
  const [index, setIndex] = useState(0);
  const increaseHandle = () => {
    setIndex(index < maxLength ? index + 1 : index);
    console.log(index);
  };
  const decreseHandle = () => {
    setIndex(index === 0 ? index : index - 1);
    console.log(index);
  };
  useEffect(() => {
    if (index === 0) {
      setSmo(true);
      // setContent(false);
      setLocal(false);
      setSeo(false);
    } else if (index === 1) {
      setSmo(false);
      // setContent(false);
      setLocal(false);
      setSeo(true);
    } else if (index === 2) {
      setSmo(false);
      // setContent(false);
      setLocal(true);
      setSeo(false);
    }
  }, [index]);
  console.log(smo, "smo");
  console.log(seo, "seo");
  // console.log(content, "content");
  console.log(local, "local");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="digitalmarketing">
      <div className="digitalmarketing_header">
        <h5>Digital Marketing </h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link
          to="/digitalmarketing"
          className="webdevelopment_breadCrums_webdevelopment"
        >
          Digital Marketing
        </Link>
      </div>
      <div className="digitalmarketing_banner">
        <Banner img={img} />
      </div>
      {/* <Banner img={img1} data-aos="fade-up" data-aos-duration="2000" /> */}
      <div
        className="digitalmarketing_card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <WebCard
          title="SMO"
          discription="Social media is the integral part of digital marketing strategy and we at Branding 360 specialize in creating customized SMM strategies tailored to client’s unique business goals and needs. With our SMM service, brands can enhance their social media visibility, drive more traffic and sales, and build brand awareness. Harness the power of social media and grow your business with us. "
          btn="Read More"
          link="/smo"
        />
        <WebCard
          title="SEO"
          discription="Increasing site’s visibility and reaching a wider audience is what we specialize in. Our SEO service uses proven methodologies to optimize the site’s content, structure, speed and overall performance to heighten SERP rankings and drive in more traffic. We customize SEO strategies as per business needs to help brand rank higher and reach larger audiences. "
          btn="Read More"
          link="/seo"
        />
        <WebCard
          title="Content Marketing"
          discription="We at Branding 360 aim to design content marketing strategies that resonate with targeted audiences and help businesses drive their brand forward. We are equipped with content experts specializing in developing high-quality, engaging and optimized content for social media platforms and search engines. It helps building brand awareness, increase authority within the niche and maximize leads and conversions."
          btn="Read More"
          link="/contentmarketing"
        />
        <WebCard
          title="Reputation Management"
          discription="Reputation management services at Branding 360 Neo Pvt. Ltd deliver results; drive more prospects to your business. We are dedicated to helping brands build awareness & online credibility by encouraging positive reviews while reviving the brand names. We deliver result-driven reputation management services to increase likelihood of the prospects to choose your company.     "
          btn="Read More"
          link="/reputation"
        />
        <WebCard
          title="Remarketing"
          discription="Remarketing services by professional help drive conversions and sales. Branding 360 Neo Pvt. Ltd offers competitive remarketing services to increase repeat customers and encourage them to do business with you again. With successful PPC campaigns, our marketing specialists offer excellent results and unmatched experiences for clients.    "
          btn="Read More"
          link="/reputation"
        />
        <WebCard
          title="Email-Marketing"
          discription="The email marketing campaigns designed by professionals further your goals via targeted and relevant communication that keeps the audiences engaged throughout the sales cycle. Our team works in conjunction to develop and manage the email marketing campaigns while evaluating its efficiency regularly. "
          btn="Read More"
          link="/emailmarketing"
        />
      </div>
      <div
        className="digitalmarketing_main"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h6>How We Deliver Effective Marketing Services</h6>
      </div>
      <div
        className="digitalmarketing_main1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="digitalmarketing_main1_left">
          <img src={img3} alt="banner" loading="lazy" />
        </div>
        <div className="digitalmarketing_main1_right">
          {smo && (
            <>
              <h6>Developing Customized Strategies </h6>
              <p>
                Professionals who take time understanding your target audiences
                and business goals back the digital marketing services at
                Branding 360 Neo Pvt. Ltd.
              </p>
              <img src={img4} alt="banner" loading="lazy" />
              <p>
                They come forth with custom strategies to attract consumers to
                your website and they do this by using host of techniques and
                tools. Being the leading digital marketing agency, we leave no
                stone unturned to make your business a online hit.
              </p>
            </>
          )}{" "}
          {seo && (
            <>
              <h6>Research & Planning</h6>
              <p>
                Regular researches and planning are necessary for the success of
                a digital marketing campaign. The online research gives deep
                insights of client’s core purpose, vision, strategies, goals,
                needs and what customer thinks about the company.
              </p>
              <img src={img7} alt="banner" loading="lazy" />
              <p>
                By integrating these insights we focus on enhancing brand
                loyalty, engagement and drive more results.
              </p>
            </>
          )}{" "}
          {local && (
            <>
              <h6>Measurement & Analysis</h6>
              <p>
                Our team of professional analysts keep collecting, tracking and
                evaluating the campaigns regularly.
              </p>
              <img src={img8} alt="banner" loading="lazy" />
              <p>
                It helps provide valuable insights to clients to make them
                understand where their ROI stands and what can be done in future
                to enhance the campaign’s performance.
              </p>
            </>
          )}
          <div className="digitalmarketing_main1_right_button">
            <span onClick={decreseHandle}>
              <ArrowCircleLeft className="digitalmarketing_main1_right_button_left" />
            </span>
            <span onClick={increaseHandle}>
              <ArrowCircleRight className="digitalmarketing_main1_right_button_right" />
            </span>
          </div>
        </div>
      </div>
      <div
        className="webdevelopment_main5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="webdevelopment_main5_top">
          <img src={img51} alt="banner" loading="lazy" />
          <span>
            <p>Design, Illustrations, UI/UX</p>
            <h6>
              How to make a website look more attractive with illustrations.
            </h6>
          </span>
          <img src={img61} alt="banner" loading="lazy" />
        </div>
        <div className="webdevelopment_main5_bottom">
          <p>
            Mi a vivamus augue vel risus accumsan. Nec magna amet odio purus
            ante pharetra. Scelerisque at tellus enim turpis. Aenean viverra
            aliquet amet morbi accumsan consequat condimentum at at. Dui dui
            adipiscing odio vel suspendisse habitant amet. Nunc feugiat luctus
            semper facilisis eget et tincidunt. Viverra nunc nulla et tellus.
          </p>
          <span>
            <img src={img71} alt="banner" loading="lazy" />
            <p>result</p>
          </span>
        </div>
        <Button url="/casestudy">View More</Button>
      </div>
      <div
        className="webdevelopment_main6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="webdevelopment_main6_top">
          <div className="webdevelopment_main6_top_first">
            <img src={img81} alt="banner" loading="lazy" />
          </div>
          <div className="webdevelopment_main6_top_second">
            <img src={img51} alt="banner" loading="lazy" />
            <img src={img9} alt="banner" loading="lazy" />
            <img src={img10} alt="banner" loading="lazy" />
            <img src={img11} alt="banner" loading="lazy" />
          </div>
          <div className="webdevelopment_main6_top_third">
            <img src={img12} alt="banner" loading="lazy" />
            <img src={img11} alt="banner" loading="lazy" />
            <img src={img10} alt="banner" loading="lazy" />
            <img src={img9} alt="banner" loading="lazy" />
            <img src={img8} alt="banner" loading="lazy" />
          </div>
          <div className="webdevelopment_main6_top_forth">
            <img src={img8} alt="banner" loading="lazy" />
            <img src={img9} alt="banner" loading="lazy" />
            <img src={img10} alt="banner" loading="lazy" />
            <img src={img12} alt="banner" loading="lazy" />
          </div>
        </div>
        <div className="webdevelopment_main6_bottom">
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque lacus pretium
            fringilla gravida sapien nibh velit quam nulla. Morbi rhoncus nulla
            viverra sapien leo facilisis elementum. Varius quam a netus nibh
            morbi vestibulum pharetra imperdiet metus. Et ac habitasse vitae at
            quis sed leo. Et nulla egestas enim mattis proin.
          </p>
          <Button url="/casestudy">View More</Button>
        </div>
      </div>
      <Achivement />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default DigitalMarketing;
