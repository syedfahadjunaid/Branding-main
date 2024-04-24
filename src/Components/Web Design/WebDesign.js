import React, { useState } from "react";
import "./WebDesign.css";
import img from "../../images/unsplash_gcsNOsPEXfs.jpg";
import img1 from "../../images/image 188.jpg";
import img2 from "../../images/Rectangle 12321.jpg";
import Banner from "../../banner/Banner";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import WebCard1 from "../../Web Card/webCard1";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import { Add, KeyboardArrowRight, Minimize, Star } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WebDesign() {
  const [research, setResearch] = useState(true);
  const [ui, setUi] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [quality, setQuality] = useState(false);
  const [lunch, setLunch] = useState(false);
  const changeHandle = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === "Research & Discovery") {
      setResearch(!research);
      setUi(false);
      setDevelopment(false);
      setQuality(false);
      setLunch(false);
      console.log(research);
    }
    if (event.target.textContent === "UI/UX Design") {
      setUi(!ui);
      setResearch(false);

      setDevelopment(false);
      setQuality(false);
      setLunch(false);
      console.log(ui);
    }
    if (event.target.textContent === "Development") {
      setDevelopment(!development);
      setUi(false);
      setResearch(false);

      setQuality(false);
      setLunch(false);
      console.log(development);
    }
    if (event.target.textContent === "Quality Assurance") {
      setQuality(!quality);
      setDevelopment(false);
      setUi(false);
      setResearch(false);
      setLunch(false);
      console.log(quality);
    }
    if (event.target.textContent === "Launch + Training") {
      setLunch(!lunch);
      setQuality(false);
      setDevelopment(false);
      setUi(false);
      setResearch(false);

      console.log(lunch);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="webdesign">
      <div className="webdesign_header">
        <h5>Web Design</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/webdesign' className="webdevelopment_breadCrums_webdevelopment">
          Web Design
        </Link>

      </div>
      <div className="webdesign_banner">
        <Banner img={img} alt='banner'/>
        <div className="webdesign_banner_img">
          <h6>Custom Web Design Company</h6>
        </div>
      </div>
      <div
        className="webdesign_main1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="webdesign_main1_left">
          <img src={img1} alt="banner" loading="lazy"/>
        </div>
        <div className="webdesign_main1_right">
          <h6>At Branding 360 Neo Pvt. Ltd one can expect creativity, customization, improvised user experience, higher conversions and results that they can measure. </h6>
          <p>
          We are armored equipped with creative team of designers that are innovative and come forth with new strategies and approaches in web design process. The innovative approaches and strategies lead to creative web designing to attract the targeted web traffic. We follow unique and result-oriented web designing process that ensures increasing engagement and visitors. 
          </p>    
          <p>
          We designing may sound fairly simple, but we do way more! We specialize not only in delivering strategic experiences, but also focuses on engaging your targeted audiences while heightening brand’s authority and credibility. We help communicate the right message in the right way to increase the chance of conversions of prospect into paid customer. 
          </p> 
             <p>
             We understand within same industry, all businesses have common goals. Therefore, we put all efforts in customizing the web design solutions to specifically fit the client’s needs and business goals. Customization is done based on target audiences, services and products and it helps design responsive website that gives your site a professional virtual presence.  
          </p>
          <Button>Send Message</Button>
          {/* <Link className="webdesign_main1_right_link" to='#'>Send Message</Link> */}
        </div>
      </div>
      <div
        className="webdesign_main2"
      
      >
        <WebCard1
          discription="The world is getting smart where it is becoming easy to imitate the things. So, it is crucial to work with agencies that offer creative web design services. We at Branding 360 Neo Pvt. Ltd use unique web design skills to deliver solutions that integrate your ideas and business goals. We ensure the UX design works smoothly both for businesses and users. "
          title="UX Design"
        />
        <WebCard1
          discription="We focus on research-driven strategies because we know the significance of business goals, cut-throat competition within the industry and the needs of the customers. The data we collect offers important insights into major factors like target audience, brand positioning, content strategies and user-flow. "
          title="UI Design"
        />
        <WebCard1
          discription="The well-researched content created by our expert writer works by persuading and engaging prospective customers with the aim to heighten conversations while adding profits. The content we use has purposes, based user experiences, messaging recommendations and storytelling."
          title="
          Content Creation  "
        />
        <WebCard1
          discription="Our development team works with project’s lead designers and content strategists to ensure highest level of presentation and performance. Although, the process may be time consuming, but the end results are of higher quality. "
          title="Development "
        />
        <WebCard1
          discription="We not only optimize the on-page content, but also the off-page elements such as links and HTML source codes. Because of the ever-changing algorithms, it is important to work with a company that is in the knowhow of latest developments.    "
          title="Optimization"
        />
        <WebCard1
          discription="Regardless of the hard work that goes into designing and developing a website, the true worth of the site relies on user experiences that it delivers. We at Branding 360 Neo Pvt. Ltd not only design and develop responsive, appealing, and intuitive website, but also ensures to handle the hosting of the website and make sure that the website has a stable reviewing environment before it goes live. "
          title="Hosting + Support"
        />
      </div>
      <div className="webdesign_main3">
        <Banner img={img2} alt='banner'/>
        <div className="webdesign_main3_details">
          <div className="webdesign_main3_details_img">
            <img src="https://cdn.dribbble.com/userupload/3066711/file/original-f85b6179125a8d8a32a77023b8ddd16c.jpg?resize=400x0" alt="banner"/>
            <h6 style={{ fontSize: "22px", marginLeft: "10px" }}>Nemesis</h6>
          </div>
          <div className="webdesign_main3_details_description">
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
      <div className="webdesign_main4">
        <div className="webdesign_main4_header">
          <h6>What our Web Design Service Includes? </h6>
        </div>

        <div className="webdesign_main4_top">
          <div className="webdesign_main4_left">
            {research && (
              <>
                <h6>Research & Discovery</h6>
                <p>
                We have a mean of experienced managers, web designers, strategists and developers who work in conjunction to determine exactly what a client needs. They start the process with the research work to understand the niche and your business goals, the target audiences and competition. 
                </p>
                <p>
                The accumulated data gives deep insights of brand positioning, developing user flows, and content strategies. It is the stage where site goals are defined, recognize key metrics and discuss timelines. 
                </p>
              </>
            )}{" "}
            {ui && (
              <>
                <h6>UI/UX Design</h6>
                <p>
                The UI (User Interface) of a website takes care of different elements, including transition, layout design, buttons, micro-interactions and animations. In the designing part, we aim to develop the best UX (User Experience) which is possible by developing UI that offers all necessary elements. As a result, a conductive design is delivered seamlessly and faster. 
                </p>
              </>
            )}{" "}
            {development && (
              <>
                <h6>Development</h6>
                <p>
                Our web developers understand the significance of sticking to the design blueprint. Since the development process is time-consuming, we never rush and take the required time to deliver quality every time. It enables the developers to consistently deliver functional and responsive websites that render desired results. 
                </p>
                <p>
                Developers and strategists work together to ensure that the website is structurally robust and architecturally solid that can deliver great user experience. 
                </p>
              </>
            )}{" "}
            {quality && (
              <>
                <h6>Quality Assurance</h6>
                <p>
                The QA or Quality Assurance phase starts after designing and development and the stage focuses on testing the functionalities and features of the website. It ensures nothing is left that is needed and it meets the project’s objectives. The process involves checking the look and feel along with functionality testing which include UI and UX evaluation.
                </p>
              </>
            )}{" "}
            {lunch && (
              <>
                <h6>Launch + Training</h6>
                <p>
                We customize the service level agreements to cater to the specific needs of clients and bridge the organizational gap they may have within the digital teams. The process involves regular need-based auditing and reporting combined with security and privacy compliance, software updates and optimization of performance. All these are essential for a successful website launch.
                </p>
                <p>
                If client demand for a site tour and training, we assist them in this aspect right from the website launch to admin panel handling.                      
                </p>
              </>
            )}
          </div>
          <div className="webdesign_main4_right">
            <h6
              onClick={changeHandle}
              style={{ color: research ? "#61B946" : "" }}
            >
              Research & Discovery
            </h6>
            <h6 onClick={changeHandle} style={{ color: ui ? "#61B946" : "" }}>
              UI/UX Design
            </h6>
            <h6
              onClick={changeHandle}
              style={{ color: development ? "#61B946" : "" }}
            >
              Development
            </h6>
            <h6
              onClick={changeHandle}
              style={{ color: quality ? "#61B946" : "" }}
            >
              Quality Assurance
            </h6>
            <h6
              onClick={changeHandle}
              style={{ color: lunch ? "#61B946" : "" }}
            >
              Launch + Training
            </h6>
            {/* <img src={img3} alt="" /> */}
            {/* <Link className="webdesign_main1_right_link" to='#'>Send Message</Link> */}
          </div>
        </div>
      </div>
      <div className="webdesign_main5">
        <h6>How do we do it</h6>
        <div>
         <span onClick={changeHandle}> <h6>Research & Discovery</h6>{research?<Minimize className={research?'webdesign_main5_icon_active webdesign_main5_icon':'webdesign_main5_icon'}/>:<Add className="webdesign_main5_icon"/>}</span>
          {research && <>
            <p>
                We have a mean of experienced managers, web designers, strategists and developers who work in conjunction to determine exactly what a client needs. They start the process with the research work to understand the niche and your business goals, the target audiences and competition. 
                </p>
                <p>
                The accumulated data gives deep insights of brand positioning, developing user flows, and content strategies. It is the stage where site goals are defined, recognize key metrics and discuss timelines. 
                </p>
          </>}
        </div> 
          <div>
         <span onClick={changeHandle}> <h6>UI/UX Design</h6>{ui?<Minimize className={ui?'webdesign_main5_icon_active webdesign_main5_icon':'webdesign_main5_icon'}/>:<Add className="webdesign_main5_icon"/>}</span>
          {ui && <p>
                The UI (User Interface) of a website takes care of different elements, including transition, layout design, buttons, micro-interactions and animations. In the designing part, we aim to develop the best UX (User Experience) which is possible by developing UI that offers all necessary elements. As a result, a conductive design is delivered seamlessly and faster. 
                </p>}
        </div> 
          <div>
         <span onClick={changeHandle}> <h6>Development</h6>{development?<Minimize className={development?'webdesign_main5_icon_active webdesign_main5_icon':'webdesign_main5_icon'}/>:<Add className="webdesign_main5_icon"/>}</span>
          {development && <>
            <p>
                Our web developers understand the significance of sticking to the design blueprint. Since the development process is time-consuming, we never rush and take the required time to deliver quality every time. It enables the developers to consistently deliver functional and responsive websites that render desired results. 
                </p>
                <p>
                Developers and strategists work together to ensure that the website is structurally robust and architecturally solid that can deliver great user experience. 
                </p>
          </>}
        </div> 
        <div>
         <span onClick={changeHandle}> <h6>Quality Assurance</h6>{quality?<Minimize className={quality?'webdesign_main5_icon_active webdesign_main5_icon':'webdesign_main5_icon'}/>:<Add className="webdesign_main5_icon"/>}</span>
          {quality && <p>
                The QA or Quality Assurance phase starts after designing and development and the stage focuses on testing the functionalities and features of the website. It ensures nothing is left that is needed and it meets the project’s objectives. The process involves checking the look and feel along with functionality testing which include UI and UX evaluation.
                </p>}
        </div> 
        <div>
         <span onClick={changeHandle}> <h6>Launch + Training</h6>{lunch?<Minimize className={lunch?'webdesign_main5_icon_active webdesign_main5_icon':'webdesign_main5_icon'}/>:<Add className="webdesign_main5_icon"/>}</span>
          {lunch && <>
            <p>
            We customize the service level agreements to cater to the specific needs of clients and bridge the organizational gap they may have within the digital teams. The process involves regular need-based auditing and reporting combined with security and privacy compliance, software updates and optimization of performance. All these are essential for a successful website launch.
                </p>
                <p>
                If client demand for a site tour and training, we assist them in this aspect right from the website launch to admin panel handling.                      
                </p>
          </>}
        </div>
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default WebDesign;
