import React, { useEffect} from "react";
import "./Clients.css";
import Testimonial from "../../testimonial Card/TestimonialCard";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Swiper core and required modules

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// Import Swiper styles


function Clients({ title }) {
  const handleDragStart = (e) => e.preventDefault();

const items = [
 <Testimonial text= "I've been working with Branding 360 for several months now, and I'm blown away by the results. My website traffic has increased, and my social media engagement is through the roof. The team is knowledgeable, creative, and always goes the extra mile to help me grow my business." name=' Imran ' brand='Hawqr'/>,
 <Testimonial text="Branding 360 helped us develop a comprehensive digital marketing strategy that has been instrumental in driving our business growth. Their expertise in SEO, social media marketing, and content creation has been invaluable, and we've seen a significant increase in leads and conversions." name=' Dennis  ' brand='Rocket Advisory'/>,
 <Testimonial text="The team at Branding 360 is incredibly responsive and always willing to work with us to achieve our goals. They're constantly monitoring and adjusting our campaigns to ensure we're getting the best possible ROI. I highly recommend them to anyone looking for a top-notch digital marketing agency." name=' Dr. Khizer Junaidy ' brand='Caspian Healthcare'/>,
 <Testimonial text="Working with Branding 360 has been a game-changer for our business. They helped us build a strong online presence and reach new audiences through targeted advertising and content marketing. The results speak for themselves, and we're grateful for their expertise and dedication." name=' Leena ' brand='Oleena Shade'/>,
 <Testimonial text="I've worked with several digital marketing agencies over the years, but none have come close to the level of service and results that Branding 360 provides. They take the time to understand our business and our goals and develop customized strategies that deliver real value." name=' Rawia ' brand='Daddy Bites '/>,
 <Testimonial text="Branding 360 has been an integral part of our marketing team for years. They're always up-to-date with the latest trends and technology, and their creativity and attention to detail are second to none. I highly recommend them to anyone looking for a top-tier digital marketing agency." name=' Anuradha ' brand='WIP '/>,
 <Testimonial text="The team at Branding 360 is simply amazing. They've helped us transform our online presence and grow our business through effective social media marketing and targeted advertising. They're responsive, reliable, and always willing to go above and beyond to help us succeed." name=' Afrin  ' brand='Speed Group'/>,
 <Testimonial text="We've been working with Branding 360 for several years now, and we couldn't be happier with the results. They've helped us build a strong brand identity and reach new audiences through innovative digital marketing campaigns. I highly recommend them to anyone looking to take their business to the next level." name=' Rahil Anup ' brand='Mama Earth'/>,
 <Testimonial text="Branding 360 has been an absolute pleasure to work with. Their team is knowledgeable, professional, and always willing to help us achieve our marketing goals. We've seen a significant increase in website traffic and conversions since partnering with them, and we look forward to continuing our successful partnership." name=' Madhavi ' brand='SRT Works'/>,
 <Testimonial text="I've worked with several digital marketing agencies in the past, but none have been as effective as Branding 360. Their team is highly skilled and dedicated to helping us achieve our marketing objectives. I highly recommend them to anyone looking for a reliable and results-driven digital marketing agency." name=' Nalin ' brand='Inidi Villas'/>,
];
const responsive= {
  0: {
      items: 1,
  },
  1024: {
      items: 3,
      itemsFit: 'contain',
  }
}
  
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  // const text=document.querySelector('.text p');
  // text.innerHTML=text.textContent.replace(/\S/g,<span>#&</span>);
  // const element=document.querySelectorAll('span');
  // for(let i=1;i<element.length;i++){
  //   element[i].style.transform=`rotate('+i*16.5'+deg)`
  // }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="clients" data-aos='fade-up' data-aos-duration='3000'>
      <div className="clients_header">
        <h5>{title ? "" : "What‘s our client saying about us!"} </h5>
      </div>
      <div className="clients_card">
        {/* <Carousel
        arrows={false}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Testimonial />
          <Testimonial />
          <Testimonial />
          
        </Carousel> */}
        {/* <Swiper
         modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      loop={true}
      autoplay={{
          "delay": 5000,
          "disableOnInteraction": false,
          "pauseOnMouseEnter": false,
          "stopOnLastSlide": false,
          "waitForTransition": true
      }}
     
    >
      <SwiperSlide><Testimonial/></SwiperSlide>
      <SwiperSlide><Testimonial/></SwiperSlide>
      <SwiperSlide><Testimonial/></SwiperSlide>
      <SwiperSlide><Testimonial/></SwiperSlide>
   
    </Swiper>
        ; */}
         <AliceCarousel  paddingLeft={0} mouseTracking items={items} responsive={responsive} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
      </div>
      {/* <div className="clients_arrow">
        <span><ArrowCircleLeft className="clientarrowicon clientarrowicon_left"/></span>
        <span><ArrowCircleRight className="clientarrowicon clientarrowicon_right"/></span>
      </div> */}
    </div>
  );
}

export default Clients;
