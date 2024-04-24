import React from "react";
import "./Members.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import MembersCard from "../../Members_card/MembersCard";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



// import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import mohsin from '../../images/member pic/mohsin.jpg'
import aquib from '../../images/member pic/Aquib.jpg'
import fahad from '../../images/member pic/fahad1.jpeg'
import nikita from '../../images/member pic/nikita.jpg'
import sayad from '../../images/member pic/sayad.jpeg'
import nazir from '../../images/member pic/nazir.jpeg'
import osmama from '../../images/member pic/osmama.jpeg'
import devashish from '../../images/member pic/devashish.jpeg'
// Import Swiper styles


function Members() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
};

const items = [
  <MembersCard name='Mohsin Abid Hussain' designation='Quality Head' profile={mohsin}/>,
    <MembersCard name='Nikita' designation='Social Media Marketing' profile={nikita}/>,
    
    <MembersCard name='Sayad' designation='SEO Manager' profile={sayad}/>,
   
    <MembersCard name='Aquib Javed' designation='UI/UX Designer' profile={aquib}/>,
    <MembersCard name='Fahad' designation='Front End Developer' profile={fahad}/>,
    <MembersCard name='Arman' designation='Front End Developer'/>,
    <MembersCard name='Devashish' designation='BackEnd Developer' profile={devashish}/>,
    <MembersCard name='Ayush' designation='Shopify Developer'/>,
    <MembersCard name='Pulkit' designation='BackEnd Developer'/>,
    <MembersCard name='Osama' designation='Sr.Designer' profile={osmama}/>,
    <MembersCard name='Nazeer' designation='Designer' profile={nazir}/>,
];

 
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };


 
  return (
    <div className="members" data-aos='fade-up' data-aos-duration='3000'>
      <div className="members_header">
        <h5>Our Team</h5>
      </div>

      <div className="members_cards">
        {/* <Carousel
          swipeable={true}
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
          <MembersCard profile={img1}/>
          <MembersCard profile={img2}/>
          <MembersCard profile={img3}/>
          <MembersCard profile={img4}/>
          <MembersCard profile={img5}/>
          <MembersCard profile={img6}/>
        </Carousel> */}
            <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        controlsStrategy="alternate"
        autoPlayInterval={3000}
    />
        {/* <MembersCard/> */}

       
      </div>
    </div>
  );
}

export default Members;
