import React from "react";
import Banner from "../../banner/Banner";
import "./PayPerClick.css";
import img1 from "../../images/casestudysinglepageBanner.jpg";
import img2 from "../../images/image 14.jpg";
import img3 from "../../images/image 15.jpg";
import img4 from "../../images/image 16.jpg";
import Button from "../../button/Button";
import WebCard from "../../Web Card/webCard1";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
function PayPerClick() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="payperclick">
      <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/payperclick' className="webdevelopment_breadCrums_webdevelopment">
        Pay Per Click
        </Link>

      </div>
      <div className="payperclick_banner" data-aos='fade-up' data-aos-duration='2000'>
        <Banner img={img1} />
        <div className="payperclick_banner_text">
          <h6>Pay Per Click (PPC) Marketing</h6>
        </div>
      </div>
      <div className="payperclick_main1" data-aos='fade-up' data-aos-duration='2000'>
        <div className="payperclick_main1_left">
          <img src={img2} loading="lazy" alt="banner"/>
        </div>
        <div className="payperclick_main1_right">
          <h6>PPC Marketing helps gaining high-level brand exposure and attracts more leads and sales. </h6>
          <p>
          The online marketing tides are regularly shifting and businesses are choosing the effective and quick solutions to position their brands in front of high converting customers. So, increase brand’s search engine visibility and attain instant results with PPC Marketing and Management services by Branding 360 Neo Pvt. Ltd.
          </p>
          <p>Branding 360 Neo Pvt. Ltd is the trusted and result-oriented agency in pay per click marketing. We partner with different industry players and businesses to increase their leads & sales, build brand awareness and achieve their business goals. Over the years, our agency has mastered in PPC marketing and well versed with the proven strategies that work efficiently for different businesses and niche and know what it entails to achieve digital success via PPC. </p>
          {/* <Button>Send Message</Button> */}
        </div>
      </div>
      <div className="payperclick_card" data-aos='fade-up' data-aos-duration='2000'>
        <WebCard
          title="Search Advertising"
          discription="It is a paid search marketing that appears to those prospects who are interested in your niche or industry. It is suitable for short sale cycles or one-time promotional campaigns."
        />
        <WebCard
          title="Display Advertising"
          discription="It is effective in reach over 90% of online users and it appears on Google’s partner sites to target the prospects who have visited industry-related websites."
        />
        <WebCard
          title="Social Media "
          discription="Social media marketing or advertising is the fast growing segment in PPC advertising services. It appears on social media channels to reach prospects based on their networks, hobbies, and interests. "
        />
        <WebCard
          title="Google Shopping Advertising 
          "
          discription="Suitable for websites with higher amount of products or services, Google shopping ads appear as a carousel beside or above the main SERPs, enabling customers to view services & products on SERPs before visiting any other websites."
        />
        <WebCard
          title="Remarketing Advertising "
          discription="Remarketing advertising is the effective solution to reach high-converting prospects while doubling the turnovers. It reminds people who have already visited your website to visit again and encourage them to convert. "
        />
        <WebCard
          title="In-Stream Advertising "
          discription="It appears on YouTube search results, YouTube videos and other video partners on the network. It presents your brand or business in memorable and unique way. "
        />
      </div>
      <div className="payperclick_main2 " data-aos='fade-up' data-aos-duration='2000'>
      
        <div className="payperclick_main2_right">
          <h6>Why Choose Branding 360 Neo Pvt. Ltd for PPC Services?</h6>
          <p>
          Leverage the technical expertise of our team to grow client base and increase sales and leads. Branding 360 Neo Pvt. Ltd is recognized as the trusted PPC service firm dedicated to client’s success. 
          </p>
          <p>Our rich expertise in the field and years of industry experiences let us deliver result-oriented and successful PPC campaigns. From account setup to PPC audit and ads management to campaign monitoring and reporting, our clients trust us for deliver 101% dedication to enhancing their online presence and performance. Here’s what you can expert by hiring Branding 360 Neo Pvt. Ltd for PPC services. </p>
          <ul>
            <li>	Comprehensive and detailed PPC audit</li>
            <li>	Detailed reporting weekly and monthly </li>
            <li>	Certified Google Partner</li>
            <li>	Customer-centric PPC agency</li>
            <li>	Multi-Location PPC</li>
            <li>Dedicated PPC Specialists </li>
          </ul>
          {/* <Button>Send Message</Button> */}
        </div>
        <div className="payperclick_main2_left">
          <img src={img3} loading="lazy" alt="banner"/>
        </div>
      </div>
      <div className="payperclick_main3  " data-aos='fade-up' data-aos-duration='2000'> 
       
        <div className="payperclick_main3_left">
          <img src={img4} loading="lazy" alt='banner'/>
        </div>
        <div className="payperclick_main3_right">
 
          <p>
          Is your brand looking for effective PPC marketing strategy in place? We Branding 360 Neo Pvt. Ltd as a trusted PPC marketing agency can guide you in structuring the right PPC advertising campaigns for brand’s success. We amalgamate your vision with our comprehensive paid search marketing expertise to heighten the success, sales opportunities and generate faster marketing wins. 
          </p>
          <p>So, don’t wait to lose the competition as it is the right time to work with experienced PPC advertising and management agency and get see your leads and conversions growing.    </p>
          <Button>Send Message</Button>
        </div>
      </div>
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default PayPerClick;
