import React from "react";
import "./CaseStudySinglePage.css";

import img2 from "../../images/image 145.jpg";
import img3 from "../../images/image 139.jpg";

import img5 from "../../images/Ellipse 203.jpg";
import img6 from "../../images/Ellipse 204.jpg";
import img7 from "../../images/Ellipse 205.jpg";
import img8 from "../../images/Rectangle 1267.jpg";
import img9 from "../../images/Rectangle 1277.jpg";
import img10 from "../../images/image 141.jpg";
import img11 from "../../images/Rectangle 1283.jpg";
import img12 from "../../images/image 142.jpg";
import img13 from "../../images/Rectangle 1288.jpg";

// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import {Carousel} from '3d-react-carousal';
import { Link, useParams } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
import Button from "../../button/Button";
import { KeyboardArrowRight } from "@mui/icons-material";
// import { Button } from "@mui/material";
function CaseStudySinglePage() {
  const {Id}=useParams()
  return (
    <div className="casestudysinglepage">
        <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/casestudy' className="webdevelopment_breadCrums_home">
    Case Study

        </Link>
        <KeyboardArrowRight/>
        <Link to='#' className="webdevelopment_breadCrums_webdevelopment">
{Id}

        </Link>
         

      </div>
      <div className="casestudysinglepage_header"></div>
      <div className="casestudysinglepage_main">
        <div className="casestudysinglepage_main_left">
          <h6>The Case- Study</h6>
          <h6>Top-Notch Shopping </h6>
          <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>

        </div>
        <div className="casestudysinglepage_main_right">
          <img src={img2} alt="banner"/>
        </div>
      </div>
      
      <div className="casestudysinglepage_main1">
        <div className="casestudysinglepage_main1_left">
          <h6>The Case- Study H1!</h6>
          <p>What is this case study about it ??</p>

        </div>
        <div className="casestudysinglepage_main1_middle">
          <img src={img3} alt="banner"/>
        </div>
        {/* <div className="casestudysinglepage_main1_right">
        <img src={img4}/>
        </div> */}
      </div>
      <div className="casestudysinglepage_main2">
        <h6>The Case- Study H1!</h6>
        <p>
          Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
          adipiscing nulla sagittis{" "}
        </p>
        <div className="casestudysinglepage_main2_cards">
          <div className="casestudysinglepage_main2_cards_card">
            <h6>Nemesis</h6>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
          </div>{" "}
          <div className="casestudysinglepage_main2_cards_card">
            <h6>Nemesis</h6>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
          </div>{" "}
          <div className="casestudysinglepage_main2_cards_card">
            <h6>Nemesis</h6>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
            <p>
              Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
              adipiscing nulla sagittis{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="casestudysinglepage_main3">
        <div className="casestudysinglepage_main3_1">
          <div className="casestudysinglepage_main3_1_left">
            <h6>Design Elements</h6>
            <div className="casestudysinglepage_main3_1_left_color">
              <span>
                <img src={img5} alt="banner"/>
                <p>xxxxxx</p>
              </span>
              <span>
                <img src={img6} alt="banner"/>
                <p>xxxxxx</p>
              </span>
              <span>
                <img src={img7} alt="banner"/>
                <p>xxxxxx</p>
              </span>
            </div>
          </div>
          <div className="casestudysinglepage_main3_1_right">
            <div className="casestudysinglepage_main3_1_right_left">
              <h6>Aa</h6>
              <p>open sans</p>
            </div>
            <div className="casestudysinglepage_main3_1_right_right">
              <p>open sans</p>
              <p>open sans</p>
              <p>open sans</p>
              <p>open sans</p>
              <p>open sans</p>
            </div>
          </div>
        </div>
        <div className="casestudysinglepage_main3_2">
          <h6>Flow of desgin</h6>
          <div className="casestudysinglepage_main3_2_cards">
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
            <img src={img8} alt="banner"/>
          </div>
        </div>
      </div>
      <div className="casestudysinglepage_main4">
        <h6>Technology Stack</h6>
        <div className="casestudysinglepage_main4_cards">
          <span>
            <img src={img9} alt="banner"/>
            <p>Adobe xd </p>
          </span>{" "}
          <span>
            <img src={img9} alt="banner"/>
            <p>Adobe xd </p>
          </span>{" "}
          <span>
            <img src={img9} alt="banner"/>
            <p>Adobe xd </p>
          </span>
        </div>
      </div>
      <div className="casestudysinglepage_main5">
        <h6>Key Features of Matajer</h6>
        <div className="casestudysinglepage_main5_top">
          <div className="casestudysinglepage_main5_top_left">
            <img src={img10} alt="banner"/>
          </div>
          <div className="casestudysinglepage_main5_top_right">
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>{" "}
            <span>
              <img src={img11} alt="banner"/>
              <p>Key Features of Matajer</p>
            </span>
          </div>
        </div>
      </div>
      <div className="casestudysinglepage_main6">
        <div className="casestudysinglepage_main6_left">
          <h6>What was the problem!</h6>
          <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>
        </div>
        <div className="casestudysinglepage_main6_middle">
        <h6>What was the problem!</h6>
          <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>
        </div>
        <div className="casestudysinglepage_main6_right">
        <h6>What was the problem!</h6>
          <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>  <p>
            Enim risus quis malesuada ullamcorper leo ut. Massa enim facilisis
            adipiscing nulla sagittis consectetur. In quam elit aliquet eu nisi
            orci sit praesent. Nisl sagittis rhoncus arcu lorem orci iaculis
            semper viverra eget. Sit diam viverra nisi{" "}
          </p>
        </div>
      </div>
      <div className="casestudysinglepage_main7">
        <img src={img12} alt="banner"/>
      </div>
      <div className="casestudysinglepage_main8">
        <img src={img13} alt="banner"/>
        <div className="casestudysinglepage_main8_text">
          <p>
          Do You Want To Bring Your Business To The eCommerce Platform? 
Here Is Your Chance
          </p>
          <Button>Send Message</Button>
        </div>
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default CaseStudySinglePage;
