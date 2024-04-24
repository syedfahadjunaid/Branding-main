import React from "react";
import "./GraphicDesignSinglePage.css";
import img1 from "../../images/Rectangle 1190.jpg";
import img2 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.45.jpg";
import img3 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.43.jpg";
import img4 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49.jpg";

import img5 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.48.jpg";
import img6 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.44.jpg";
import img7 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46.jpg";
import img8 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (1).jpg";
import img9 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (2).jpg";
import img10 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.48 (1).jpg";
import img11 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46 (1).jpg";
import img12 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46 (2).jpg";
import img13 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (3).jpg";
import img14 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (4).jpg";
import Banner from "../../banner/Banner";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Footer from "../../Footer/Footer";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    src={img2}
    onDragStart={handleDragStart}
    role="presentation"
    className="alicecarosal_img_height"
    loading="lazy"
    alt="banner"
  />,
  <img
    src={img3}
    onDragStart={handleDragStart}
    role="presentation"
    className="alicecarosal_img_height"
    loading="lazy"
    alt="banner"
  />,
  <img
    src={img6}
    onDragStart={handleDragStart}
    role="presentation"
    className="alicecarosal_img_height"
    loading="lazy"
    alt="banner"
  />,
  <img
    src={img7}
    onDragStart={handleDragStart}
    role="presentation"
    className="alicecarosal_img_height"
    loading="lazy"
    alt="banner"
  />,
];
const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};
function GraphicDesignSinglePage() {
  return (
    <div className="graphicDesignSinglePage">
      <div className="graphicDesignSinglePage_header">
        <h5>Graphic Design</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to="/" className="webdevelopment_breadCrums_home">
          Home
        </Link>
        <KeyboardArrowRight />
        <Link to="/grapgicdesign" className="webdevelopment_breadCrums_home">
          Graphic Design
        </Link>
        <KeyboardArrowRight />
        <Link to="/#" className="webdevelopment_breadCrums_webdevelopment">
          Graphic Designer Work
        </Link>
      </div>
      <div className="graphicDesignSinglePage_banner">
        <Banner img={img1} />
      </div>
      <div className="graphicDesignSinglePage_main1">
        <div className="graphicDesignSinglePage_main1_left">
          <img src={img2} alt="img" loading="lazy" />
        </div>
        <div className="graphicDesignSinglePage_main1_right">
          <img src={img3} alt="img" loading="lazy" />
        </div>
      </div>
      <div className="graphicDesignSinglePage_main1">
        <div className="graphicDesignSinglePage_main1_left">
          <img src={img6} alt="img" loading="lazy" />
        </div>
        <div className="graphicDesignSinglePage_main1_right">
          <img src={img7} alt="img" loading="lazy" />
        </div>
      </div>{" "}
      <div className="graphicDesignSinglePage_main2">
        {/* <LazyLoadImage src={img4} placeholderSrc={place} /> */}
        <img src={img4} alt="banner" loading="lazy"/>
      </div>
      <div className="graphicDesignSinglePage_main2">
        <img src={img5} alt="banner" loading="lazy" />
      </div>
      <div className="graphicDesignSinglePage_main1">
        <div className="graphicDesignSinglePage_main1_left">
          <img src={img8} alt="img" loading="lazy" />
        </div>
        <div className="graphicDesignSinglePage_main1_right">
          <img src={img9} alt="img" loading="lazy" />
        </div>
      </div>{" "}
      <div className="graphicDesignSinglePage_main2">
        <img src={img10} alt="banner" loading="lazy" />
      </div>
      <div className="graphicDesignSinglePage_main1">
        <div className="graphicDesignSinglePage_main1_left">
          <img src={img11} alt="img" loading="lazy" />
        </div>
        <div className="graphicDesignSinglePage_main1_right">
          <img src={img12} alt="img" loading="lazy" />
        </div>
      </div>
      <div className="graphicDesignSinglePage_main2">
        <img src={img13}  loading="lazy" alt="banner"/>
      </div>
      <div className="graphicDesignSinglePage_main2">
        <img src={img14} loading="lazy" alt="banner"/>
      </div>
   
      <div className="graphicDesignSinglePage_main3">
        {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Scrollbar,Autoplay]}
      spaceBetween={25}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    //   loop={true}
    //   autoplay={{
    //       delay: 2000,
    //       disableOnInteraction: false
    //   }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={img2} className=" graphicDesignSinglePage_main3_img"/></SwiperSlide>
      <SwiperSlide><img src={img2} className=" graphicDesignSinglePage_main3_img"/></SwiperSlide>
      <SwiperSlide><img src={img2} className=" graphicDesignSinglePage_main3_img"/></SwiperSlide>
      <SwiperSlide><img src={img2} className=" graphicDesignSinglePage_main3_img"/></SwiperSlide>
    </Swiper> */}
        <AliceCarousel
          autoPlayInterval={3000}
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default GraphicDesignSinglePage;
