import React from "react";
import Banner from "../../banner/Banner";
import Button from "../../button/Button";
import SmallBanner from "../../Small Banner/SmallBanner";
import "./ContentMarketing.css";
import img from "../../images/image 9.jpg";
import img1 from "../../images/image 103.jpg";
import img2 from "../../images/image 98.jpg";
// import img3 from "../../images/image 99.jpg";
import img4 from "../../images/image 104.jpg";
import img5 from "../../images/image 105.jpg";
import img6 from "../../images/WEBSITE 360 (2)/Mask group1.png";
import WebCard1 from "../../Web Card/webCard1";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check, KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
function ContentMarketing() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contentmarketing">
      <div className="contentmarketing_header">
        <h5>Content Marketing</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/digitalmarketing' className="webdevelopment_breadCrums_webdevelopment">
        Content Marketing

        </Link>
         

      </div>

      <Banner img={img} data-aos="fade-up" data-aos-duration="1000" />

      <div
        className="contentmarketing_main"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="contentmarketing_main_left">
          <h6>Communicate the brand’s purpose and demonstrate your expertise!</h6>
          <p>
          We help create high-quality content that attracts and converts organic search traffic. Our content marketing strategies cover keyword research, content writing, content strategy development, and content marketing to help brands reach the untapped demographics while developing a robust reputation in the specific niche market. 
          </p>
          <p>With Branding 360 Neo Pvt. Ltd fuel your brand and business with the result-oriented approaches of structuring compelling and engaging content, distribution to publication across different channels. We help expand the reach and value for both brand and their products with end-to-end content marketing strategies designed in adherence to brand’s budget and needs. </p>
          <p>Our content marketing strategies are focused on helping brands achieve business goals. Our content marketing strategies are focused on SEO, social media channels, email marketing, blog writing and other content to convert, engage and heighten ROI. </p>
        <p>Convert the page visitors into a paying customer with professional content marketing services. The content serves as the extension of your brick-and-mortar shop and it tends to speak volume about your brand and determines the success of online marketing endeavors. With the right content marketing solutions, your business can:</p>
          {/* <ul>
            <li>Strengthen your brands</li>
            <li>Connect with your audience</li>
            <li>Generate leads.</li>
            <li>Get your visibility online.</li>
          </ul> */}
          {/* <Button>Send Message</Button> */}
        </div>
        <div className="contentmarketing_main_right">
          <SmallBanner img={img1} />
        </div>
      </div>
      <div
        className="contentmarketing_card"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <WebCard1
          title="Brand Awareness "
          discription="The online content emphasizes your brand message while communicate it across multiple online channels. So, capitalize on content marketing solutions and communicate your brand’s USPs efficiently. "
        />
        <WebCard1
          title="Grow Digital Authority"
          discription="Content marketing helps businesses grow their online authority. We perform SEO keyword analysis and market research to structure authoritative content that grabs quality backlinks and promote attentive discussions with targeted audiences.       "
        />
        <WebCard1
          title="Earn Revenue "
          discription="We help develop reliable and creative content strategies that can acquire more site traffic and generate revenue over time. It even contributes to the brand’s lasting sustainability. "
        />
        <WebCard1
          title="Expand Customer Base"
          discription="The key to success and business growth is heightening customer base and professional content marketing solutions can help you do just that. Content marketing connects your brand with prospects while retaining the older ones. "
        />
        <WebCard1
          title="Gain Higher Leads & Conversions "
          discription="SEO optimized content marketing can help businesses generate quality leads. With different content strategies, we can help convert ordinary leads into hot prospects and paying customers. "
        />
        <WebCard1
          title="Best SEO Results "
          discription="Businesses that capitalize on content marketing services backed by data and research always have better chance of getting higher search visibility, SEO rankings and digital exposure. "
        />
      </div>
      <Banner img={img2} data-aos="fade-up" data-aos-duration="1000" />
      {/* <div className="contentmarketing_main1" data-aos="fade-up" data-aos-duration='2000'>
        <h6>Will Content Marketing Help Your Business To Grow?</h6>
        <div className="contentmarketing_main1_2">
          <div className="contentmarketing_main1_2_left">
            <SmallBanner img={img3} />
          </div>
          <div className="contentmarketing_main1_2_right">
            <p>
              At the heart of the most effective digital marketing strategies is
              content marketing. There's a lot of important and meaningful
              content behind every great brand that really interacts with the
              company's audience. But you could always ask, why does content
              marketing matter? Great content will help you develop trust with
              your consumers and leads. When customers read your content they
              begin to create a brand opinion. If the material they find is
              entertaining, informative, and rewarding, so they can continue to
              learn about your business the same ways. The more relevance you
              can add to your content, the easier it will be to create trust in
              your target audience.
            </p>
            <p>
              Moreover, as your leads and consumers begin to see that you are
              regularly publishing content across platforms, they may come to
              see you as the market leader. When you open your browser and type
              out a keyword or phrase into Google, the programme works hard to
              bring to you the foremost relevant data relating to your search
              question. When you are creating expert content for the sake of
              sharing useful and valuable information to your ideal target
              buyers rather than spam sales (“look at me!”) copy, Google
              acknowledges that your content is beneficial and provides the
              solution to viewers looking, so it'll rank higher within the
              search results.
            </p>
            <Button>Send Message</Button>
          </div>
        </div>
      </div> */}
      <div className="contentmarketing_new">
        <div className="contentmarketing_new_heading">
          <h6>Our Content Marketing Solutions!</h6>
          <p>
            {" "}
            A streamlined solution that works for you! We at Branding 360 Neo
            Pvt. Ltd focus on helping businesses to move on the right path for
            success and maximize the customer engagement. We design content
            marketing solutions that help brands increase traffic, reach, and
            generate leads and gather audiences.
          </p>
        </div>
        <div className="contentmarketing_new_first">
          <div className="contentmarketing_new_first_left">
            <span>
              <img src={img6} loading="lazy" alt="banner"/>
            </span>
            <h6>Online Content Marketing Strategy Creation</h6>
            <p>
              The step includes creation of result-oriented marketing strategy &
              analysis.
            </p>
            <div>
              <span>
                <Check style={{color:"#61B946"}}/>
                <p> Analyzing present marketing content</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Competitor’s marketing analysis </p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Leading keyword research</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Appealing strategy to generate leads and heighten sales</p>
              </span>
            </div>
          </div>
          <div className="contentmarketing_new_first_right">
            <span>
              <img src={img6} loading="lazy" alt="banner"/>
            </span>
            <h6>Audience Analysis </h6>
            <p>
              The certified digital marketing specialists at Branding 360 Neo
              Pvt. Ltd analyze the target market audiences.
            </p>
            <div>
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Recognizing prospects and targeted audiences</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Understanding prospect’s personalities </p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Finding preferred content platform and type</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Writing engaging content </p>
              </span>
            </div>
          </div>
        </div>
        <div className="contentmarketing_new_first">
          <div className="contentmarketing_new_first_left">
            <span>
              <img src={img6} loading="lazy" alt="banner"/>
            </span>
            <h6>Content Creation and Distribution </h6>
            <p>
              The step involves producing keyword rich, high-quality, attention
              grabbing, and consistent content to increase engagement and web
              traffic. We are not only limited to creation of quality content,
              but also specialize in strategic distribution and publication to
              reach targeted audiences.
            </p>
            <div>
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Regular distribution of content</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Consistent posting of articles and blogs</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Auto distribution of content on social media </p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Producing newsletter and email marketing campaign </p>
              </span>
            </div>
          </div>
          <div className="contentmarketing_new_first_right">
            <span>
              <img src={img6} loading="lazy" alt="banner"/>
            </span>
            <h6>Content Analysis </h6>
            <p>
              Content has the ability to drive traffic, results and generate
              leads and to sustain its efficiency we regularly analyze the
              content.{" "}
            </p>
            <div>
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Weekly and monthly reports of analysis </p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Filling the gaps within content</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Modifying metrics to heighten ROI</p>
              </span>{" "}
              <span>
                <Check style={{color:"#61B946"}}/>
                <p>Analyze Your Current Marketing content</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contentmarketing_main2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h6>Why Choose Our Content Marketing Services?</h6>
        <Banner img={img4} />
        <p>
          The extensive list of customer reviews; feedbacks and portfolios have
          already proven our reach and niche in content marketing approach.
          Besides, we never leave any stone unturned to make brands get noticed
          online with highest reach and maximum traffic.
        </p>
      </div>
      <div
        className="contentmarketing_main2_2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="contentmarketing_main2_2_left">
          <h6>Branding 360 Neo Pvt. Ltd specializes in:</h6>
          <ul>
            <li>
            End-to-end content marketing solutions, right from writing to editing, managing and distribution 
            </li>
            <li>
            	Proven methodologies that are customer centric, result oriented and can deliver successful content for marketing and promotion 
            </li>
            <li>
            	Proven methodologies that are customer centric, result oriented and can deliver successful content for marketing and promotion 
            </li>
            <li>
            In-house team of professional writers, editors, marketers and copywriters who specialize in delivering excellence
            </li>
            <li>
            	Offering high-quality content that is affordable and accessible for all   
            </li>
          </ul>
          <Button>Send Message</Button>
        </div>
        <div className="contentmarketing_main2_2_right">
          <SmallBanner img={img5} />
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default ContentMarketing;
