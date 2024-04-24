import React, { useEffect } from "react";
import ContactUs from "../ContactUs/ContactUs";
import banner1 from "../../images/Rectangle 1220.jpg";
import banner2 from "../../images/unsplash_VDwINWBdX0Y.jpg";
import banner3 from "../../images/unsplash_Oaqk7qqNh_c.jpg";
import Footer from "../../Footer/Footer";
import "./Blog.css";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { KeyboardArrowRight } from "@mui/icons-material";
function Blog() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="blog">
      <h5 className="blog_header" data-aos='fade-up' data-aos-duration='1000'>Blog</h5>
      <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link to="/blog" className="webdevelopment_breadCrums_webdevelopment">
       Blog
        </Link>
    
      </div>
      <div className="blog_banner1" data-aos='fade-up' data-aos-duration='1000'>
        <img src={banner1} alt="" loading="lazy"/>
      </div>
      <div className="blog_banner2" data-aos='fade-up' data-aos-duration='1000'>
        <div className="blog_banner2_left">
          <img src={banner2} alt="" loading="lazy"/>
          <div className="blog_banner2_left_text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lacus tristique risus diam
            enim risus viverra vestibulum eget gravida. Nunc dui ut sit nam.
            Pellentesque erat libero a luctus sit nisi porttitor. Quisque
            tincidunt enim vitae dictum turpis consectetur. Eros venenatis mi
            non augue at quis ridiculus justo. Facilisi orci morbi morbi sed
            condimentum sed vestibulum tincidunt lobortis. Lectus aliquam
            volutpat sapien ac in leo. Sem nunc non mi nisl viverra tellus.
          </p>
          <Button url='/blog/singlePage'>Read More</Button>

          </div>
         
        </div>
        <div className="blog_banner2_right">
          <img src={banner3} alt="" loading="lazy"/>
        </div>
      </div>
      <div className="blog_banner3" data-aos='fade-up' data-aos-duration='1000'> 
        <img src={banner1} alt="" loading="lazy"/>
      </div>
      <div className="blog_banner4" data-aos='fade-up' data-aos-duration='2000'>
      <div className="blog_banner2_right">
          <img src={banner3} alt="" loading="lazy"/>
        </div>
      <div className="blog_banner2_left">
          <img src={banner2} alt="" loading="lazy"/>
          <div className="blog_banner2_left_text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lacus tristique risus diam
            enim risus viverra vestibulum eget gravida. Nunc dui ut sit nam.
            Pellentesque erat libero a luctus sit nisi porttitor. Quisque
            tincidunt enim vitae dictum turpis consectetur. Eros venenatis mi
            non augue at quis ridiculus justo. Facilisi orci morbi morbi sed
            condimentum sed vestibulum tincidunt lobortis. Lectus aliquam
            volutpat sapien ac in leo. Sem nunc non mi nisl viverra tellus.
          </p>
          <Button url='/blog/singlePage'>Read More</Button>

          </div>
         
        </div>
       
        {/* <img src={banner2} alt="" /> */}
        {/* <img src={banner3} alt="" /> */}
      </div>
      <div className="blog_banner5" data-aos='fade-up' data-aos-duration='2000'>
        <div className="blog_banner5_left">
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum arcu ut quis nisl
            nibh egestas imperdiet vulputate rhoncus. Pellentesque tincidunt sed
            dui nunc. Etiam amet vitae donec purus mauris sit. Nam egestas sed
            nunc non. Nunc vestibulum at aliquam nulla at sed. Arcu turpis cras
            nunc tincidunt enim. In lobortis in ultrices facilisis eu eget ac.
            Fermentum convallis id urna sit ullamcorper bibendum lorem viverra
            sit. Fames quisque consectetur condimentum euismod velit potenti.
            Sed ac netus cursus blandit quis nibh purus erat. Aliquet velit
            facilisi feugiat scelerisque donec justo viverra sit. Dictum
            dignissim pulvinar quis ornare cras feugiat cursus. Aenean id morbi
            congue amet morbi accumsan cras. Ultricies at amet faucibus morbi
            dictumst turpis lobortis. Ac risus quis sed tellus ultrices integer
            nibh. Viverra venenatis maecenas porttitor facilisi lacinia quis
            iaculis nunc sagittis. Interdum aliquet curabitur ultrices nunc diam
            lacus. Eget placerat pellentesque odio enim lorem augue nibh. Nam
            sed ac etiam nibh aliquet. Ac adipiscing donec egestas dolor fusce
            malesuada arcu pretium pharetra. Faucibus id urna sagittis purus
            volutpat vel.
          </p>
          <Link className="blog_banner5_left_link" to="/blog/singlePage">
            Read More
          </Link>
        </div>
        <img src={banner3} alt="" />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Blog;
