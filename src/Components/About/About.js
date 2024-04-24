import React from "react";
import "./About.css";
import img1 from "../../images/image 1.jpg";
// import img2 from "../../images/image 11.jpg";
import img3 from "../../images/Rectangle 1169.jpg";
import img4 from "../../images/unsplash_7rIE9DPdo80.jpg";
import img5 from "../../images/unsplash_vpwDZgKtgVk.jpg";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import Clients from "../Clinets/Clients";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { KeyboardArrowRight } from "@mui/icons-material";
function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="about">
       <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link to="/about" className="webdevelopment_breadCrums_webdevelopment">
    About
        </Link>
    
      </div>
      <div className="about_header" data-aos='fade-up' data-aos-duration='1000'>
        <h5>Together, Let's Strengthen Your Brand and Expand Its Reach! </h5>
      </div>
      <div className="about_main1" data-aos='fade-up' data-aos-duration='1000'>
        <div className="about_main1_left">
          <p>
            
       
            Branding 360 Neo Pvt. Ltd is built on the foundation pillars of
            integrity & professional excellence. Being the client-centric
            company, we uphold the highest standards of integrity and quality to
            ensure success of our clients. We aim to bring years of industry
            experiences and expertise to every project to deliver excellence and
            cater to every need of clients.
          </p>
          <Button url='/contactus'>Send Message</Button>
        </div>
        <div className="about_main1_right">
          <img src={img1} alt="" loading="lazy"/>
        </div>
      </div>
      <div className="about_main2" data-aos='fade-up' data-aos-duration='1000'>
        <div className="about_main2_left">
          <img
            src="https://www.nordantech.com/media/pages/blog/community/8-tipps-fuer-ein-erfolgreiches-meeting/00022d9063-1643812301/meeting-tipps-erfolgreich-1200x630.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="about_main2_right">
          <p>
            We are the award-winning digital marketing agency offering full
            spectrum of data-driven, result-oriented digital marketing services.
            We specialize in developing growth-oriented digital marketing
            campaigns and ads to make a positive lasting impact on the
            businesses.{" "}
          </p>
        </div>
      </div>
      <div className="about_main3" data-aos='fade-up' data-aos-duration='2000'>
        <p>
          We are the digital marketing expert with unique, experienced,
          close-knit team with expertise in all the facets of digital marketing:
          creative, strategic and technical. As the recognized digital marketing
          agency, Branding 360 prefers working closely with the clients to
          ensure smooth and effective campaign development process, right from
          the conceptualization to execution, delivery and beyond.{" "}
        </p>
      </div>
      <div className="about_main2" data-aos='fade-up' data-aos-duration='2000'>
        <div className="about_main2_left">
          <img src={img3} alt="" loading="lazy"/>
        </div>
        <div className="about_main2_right">
         
          <p>
            Since 2017, Branding 360 has been helping many local and
            international clients and businesses across multiple domains
            maximize their digital revenue, sales and growth by deploying
            different growth-driven online marketing strategies.
          </p>
          <p>
            In an endeavor to offer a clear path to success to clients, we
            remain updated with latest innovations and trends and explore
            different marketing practices and experiment them via internal
            campaigns to recognize the right strategies that would deliver
            guaranteed results. We are well versed with the tactics that can
            generate more leads because we do it every month for ourselves. We
            are equipped with in-house team of marketing and sales experts who
            generate almost all leads via organic search results.
          </p>
          <p>
            Our team’s perseverance and dedication allows us to achieve
            remarkable growth for us and for our clients every month.{" "}
          </p>
        </div>
      </div>
      <div className="about_main4" data-aos='fade-up' data-aos-duration='2000'>
        <h3>CEO</h3>
        <div className="about_main4_ceo1" data-aos='fade-up' data-aos-duration='2000'>
          <div className="about_main4_ceo1_left">
            <img src={img4} alt="" loading="lazy"/>
            <h5>Rishabh Agrawal</h5>
          </div>
          <div className="about_main4_ceo1_right">
            <p>
              Hey everyone!! Welcome to my small world of Digital Marketing! I
              am glad that you spent some time on my website. I am a passionate
              digital marketer. I have been a part of the digital marketing
              industry since 2012. My first project was a Door-to-door Car wash
              service called Infinity Car Wash, which eventually became the No.1
              Car wash service in Lucknow with over 1,00,000+ customers, along
              with writing blogs on Digital Marketing in which I achieved a
              target of 1 Million+ page views per month in just a matter of 4
              months. After that, I have worked as a digital marketing manager
              for startups. Cashe, Bugworks, Bounce, Bombay Shaving Company,
              Carmesi, Cleardekho, Coolberg, Dogsee Chew & many other start-ups
              are those to whom I am grateful for, for choosing my services and
              letting me show my skills in their work. Apart from this, I also
              enjoy discussing all the latest trends happening every second with
              those who are interested in digital marketing. Brading360.in is
              now ranked in a list of top 100 Google Websites in the field of
              Digital Marketing & Social Media optimization. The website started
              as a personal blog where I used to write notes on digital
              marketing for my future reference. If you want your business to
              reach more potential customers that will boost your revenue by
              increasing sales you could contact me for any help, here I can
              suggest you the best ways of marketing your products & services by
              reaching those customers who actually need your products/services
              rather contacting those who are not interested & draining your
              energy.
            </p>
            <Button url='/contactus'>Send Message</Button>
          </div>
        </div>
        <div className="about_main4_ceo2" data-aos='fade-up' data-aos-duration='2000'>
          <div className="about_main4_ceo2_left">
            <p>
              Hi folks. Welcome to Branding 360 where you get all e-marketing
              solutions at one stop. We'd be glad to have you on board on what
              we can assure you would be a worthwhile investment towards pushing
              your organization beyond competitive levels. As a marketing and
              financial spearhead of the company, I enjoy listening to demands
              of my clients. Let me give you a slight background on what I have
              been up to over the past few years. After a graduate degree in
              Geology at A.M.U, Aligarh, I went for my post graduation(M.tech)
              at Harisingh Gaur University( a central university) in Sagar,
              Madhya Pradesh. With plenty of skill in the field, IIT Kanpur gave
              me my next venture as project coordinator for clients who wished
              to have their landholding segregated on GPS. Having seen a shade
              of the technical side of things and being into client
              satisfaction, we can comprehend your business needs and assist you
              in scaling desirable heights with your ventures. Rest assured,
              this is where you see your business nurtured.
            </p>
            <Button url='/contactus'>Send Message</Button>
          </div>
          <div className="about_main4_ceo2_right">
            <img src={img5} alt="ceo2" loading="lazy"/>
            <h5>Sameer Minai</h5>
          </div>
        </div>
      </div>
      <div className="about_main5" data-aos='fade-up' data-aos-duration='2000'>
        <h2 style={{fontSize:"35px",fontWeight:'500',lineHeight:'40px'}}>
          <span style={{color:'#85A2F3',marginBottom:'25px',fontSize:'85px',fontWeight:'700',lineHeight:'40px'}}>Why Choose Us </span> 
         <br/> here is the reason{" "}
        </h2>
        <div className="about_main5_div">
        <Clients title='dddd'/>
        </div>
       
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default About;
