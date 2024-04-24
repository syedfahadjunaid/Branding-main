import React, { useEffect, useState } from "react";
import "./OurWork.css";
import img1 from "../../images/Rectangle 1190.jpg";
import img2 from "../../images/image 75.jpg";
import img3 from "../../images/image 76.jpg";
import img4 from "../../images/image 77.jpg";
import img5 from "../../images/image 78.jpg";
import img6 from "../../images/IMG-20230130-WA0005.jpg";
import img7 from "../../images/image 79.jpg";
import img8 from "../../images/image 82.jpg";
import img9 from "../../images/image 80.jpg";
import img10 from "../../images/image 81.jpg";
import img11 from "../../images/image 87.jpg";
import img12 from "../../images/image 88.jpg";
import img13 from "../../images/image 84.jpg";
import img14 from "../../images/image 85.jpg";
import img15 from "../../images/image 86.jpg";
import img16 from "../../images/image 90.jpg";
import img17 from "../../images/image 91.jpg";
import img18 from "../../images/image 89.jpg";
import img19 from "../../images/image 92.jpg";
import img20 from "../../images/./neew/1_0007_17-1-23 hawqr.jpg";
import img21 from "../../images/./neew/1_0009_2-12-22.jpg";
import img22 from "../../images/./neew/1_0012_volvo xc 40.jpg";
import img23 from "../../images/./neew/1_0006_26-07-22-price2.jpg";
import img24 from "../../images/./neew/1_0008_10-4-233.jpg";
import img25 from "../../images/./neew/./New folder/Ace 15aug_0000_Ethnic womens day offer.jpg";
import img26 from "../../images/./neew/./New folder/Ace 15aug_0001_Ethnic Ramzan wish.jpg";
import img27 from "../../images/./neew/./New folder/Ace 15aug_0002_db post 30-3-23-1.jpg";
import img28 from "../../images/./neew/./New folder/Ace 15aug_0003_Daddy 15-3-23.jpg";
import img29 from "../../images/./neew/./New folder/Ace 15aug_0004_corporate 13-9-22-1.jpg";
import img30 from "../../images/./neew/./New folder/Ace 15aug_0011_Revenails 18-1-23.jpg";
import img31 from "../../images/./neew/./New folder/Ace 15aug_0012_Ace Dhanteras 22-10-22.jpg";
import img32 from "../../images/./neew/./New folder/Ace 15aug_0013_Hawqr 3-2-23.jpg";
import img33 from "../../images/./neew/./New folder/Ace 15aug_0014_Background.jpg";
import img34 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.43.jpg";
import img35 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.45.jpg";
import img36 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46 (1).jpg";
import img37 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (5).jpg";
// import img38 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.49 (6).jpg";
// import img39 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.51.jpg";
// import img40 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46.jpg";
// import img41 from "../../images/./graphic img/WhatsApp Image 2023-02-03 at 5.46 (2).jpg";
import Banner from "../../banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Footer/Footer";
// import smallBanner from "../../Small Banner/SmallBanner";
import { Avatar,  Modal } from "@mui/material";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import { KeyboardArrowRight, Star } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function OurWork() {
 
  const handleDragStart = (e) => e.preventDefault();
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [all, setAll] = useState(true);
  const [website, setWebsite] = useState(false);
  const [graphic, setGrapgic] = useState(false);
  const [logo, setLogo] = useState(false);
  const [reels, setReels] = useState(false);
  function changeWork(event) {
    console.log(event.currentTarget.textContent);

    if (event.currentTarget.textContent === "All") {
      setAll(!all);
      setGrapgic(false);
      setReels(false);
      setWebsite(false);
      setLogo(false);
      console.log(all);
    }
    if (event.currentTarget.textContent === "Website") {
      setWebsite(!website);
      setAll(false);
      setGrapgic(false);
      setReels(false);

      setLogo(false);
      console.log(website);
    }
    if (event.currentTarget.textContent === "Graphic Design") {
      setGrapgic(!graphic);
      setAll(false);

      setReels(false);
      setWebsite(false);
      setLogo(false);
      console.log(graphic);
    }
    if (event.currentTarget.textContent === "Logo") {
      setLogo(!logo);
      setAll(false);
      setGrapgic(false);
      setReels(false);
      setWebsite(false);

      console.log(logo);
    }
    if (event.currentTarget.textContent === "Website Banner") {
      setReels(!reels);
      setAll(false);
      setGrapgic(false);

      setWebsite(false);
      setLogo(false);
      console.log(reels);
    }
  }
  useEffect(() => {
    if (!website && !graphic && !logo && !reels) {
      setAll(true);
    }
  }, [website, all, reels, logo, graphic]);
  useEffect(() => {
    AOS.init();
  }, []);
  const [selectedImg, setSelectedImg] = useState("");
  const getImageHandle = (event) => {
    handleOpen();
    console.log(event.target.src);
    setSelectedImg(event.target.src);
  };

  return (
    <div className="ourwork">
      <div
        className="ourwork_header"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h5>Our Project</h5>
      </div>
      <div className="webdevelopment_breadCrums">
        <Link to='/' className="webdevelopment_breadCrums_home">
        Home
        </Link>
        <KeyboardArrowRight/>
        <Link to='/ourwork' className="webdevelopment_breadCrums_webdevelopment">
 Our Project
        </Link>

      </div>
      <div
        className="ourwork_banner"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Banner img={img1} />
      </div>
      <div
        className="ourwork_subheader"
     
      >
        <h6 style={{ color: all ? "#61B946" : "" }} onClick={changeWork}>
          All
        </h6>
        <h6 style={{ color: website ? "#61B946" : "" }} onClick={changeWork}>
          Website
        </h6>
        <h6 style={{ color: graphic ? "#61B946" : "" }} onClick={changeWork}>
          Graphic Design
        </h6>
        <h6 style={{ color: logo ? "#61B946" : "" }} onClick={changeWork}>
          Logo
        </h6>
        <h6 style={{ color: reels ? "#61B946" : "" }} onClick={changeWork}>
          Website Banner
        </h6>
      </div>
      {all && (
        <div
          className="ourwork_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="ourwork_content_one" onClick={getImageHandle}>
              <img src={img20}  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img21}  alt="banner"/>
            </div>{" "}
            <div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img24}  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_second_div">
            <div className="ourwork_content_three" onClick={getImageHandle}>
              <img src={img22}  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img25}  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img23}  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_view_More">
            <Button url="/graphicDesign">View More</Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="moadl_ourwork"
          >
            <div className="ourwork_modal slide-fwd-center">
              <div className="ourwork_modal_left">
                <img src={selectedImg}  alt="banner"/>
              </div>
              <div className="ourwork_modal_right">
                <div className="ourwork_modal_right_header">
                  <div className="ourwork_modal_right_header_left">
                    <Avatar />
                    <span>
                      <h6>Fashion Invogue</h6>
                      <p>Director</p>
                    </span>
                  </div>
                  <div className="ourwork_modal_right_header_right">
                    <Avatar />
                  </div>
                </div>
                <div className="ourwork_modal_right_discription">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="ourwork_modal_right_discription_star">
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                  </div>
                  <div className="ourwork_modal_right_header_img_slider">
                    <Carousel
                      autoPlay="true"
                      infiniteLoop="true"
                      emulateTouch={false}
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <img
                        src={img20}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img21}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img22}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img23}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />{" "}
                      <img
                        src={img24}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img25}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                    </Carousel>
                    {/* <AliceCarousel className='alice_modal' infinite='true'  autoPlay='true' mouseTracking='true' items={items}  responsive={responsive}/> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {website && (
        <div
          className="ourwork_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="ourwork_content_one" onClick={getImageHandle}>
              <img src={img32} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img33} loading="lazy"  alt="banner"/>
            </div><div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img36} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_second_div">
            <div className="ourwork_content_three" onClick={getImageHandle}>
              <img src={img34} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img35} loading="lazy"  alt="banner"/>
            </div> 
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img37}loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_view_More">
            <Button url="/graphicDesign">View More</Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="moadl_ourwork"
          >
            <div className="ourwork_modal slide-fwd-center">
              <div className="ourwork_modal_left">
                <img src={selectedImg}  alt="banner"/>
              </div>
              <div className="ourwork_modal_right">
                <div className="ourwork_modal_right_header">
                  <div className="ourwork_modal_right_header_left">
                    <Avatar />
                    <span>
                      <h6>Fashion Invogue</h6>
                      <p>Director</p>
                    </span>
                  </div>
                  <div className="ourwork_modal_right_header_right">
                    <Avatar />
                  </div>
                </div>
                <div className="ourwork_modal_right_discription">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="ourwork_modal_right_discription_star">
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                  </div>
                  <div className="ourwork_modal_right_header_img_slider">
                    <Carousel
                      autoPlay="true"
                      infiniteLoop="true"
                      emulateTouch={false}
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <img
                        src={img32}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      />

                      <img
                        src={img33}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      />

                      <img
                        src={img34}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      /> 
                       <img
                        src={img35}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      />   
                         <img
                        src={img36}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      /> 
                       <img
                        src={img37}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        onClick={getImageHandle}
                        alt="banner"
                      />
                    </Carousel>
                    {/* <AliceCarousel className='alice_modal' infinite='true'  autoPlay='true' mouseTracking='true' items={items}  responsive={responsive}/> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {graphic && (
        <div
          className="ourwork_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="ourwork_content_one" onClick={getImageHandle}>
              <img src={img26} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img27} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={getImageHandle}>
              <img src={img28} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_second_div">
            <div className="ourwork_content_three" onClick={getImageHandle}>
              <img src={img29} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img30} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={getImageHandle}>
              <img src={img31} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_view_More">
            <Button url="/graphicDesign">View More</Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="moadl_ourwork"
          >
            <div className="ourwork_modal slide-fwd-center">
              <div className="ourwork_modal_left">
                <img src={selectedImg}  alt="banner"/>
              </div>
              <div className="ourwork_modal_right">
                <div className="ourwork_modal_right_header">
                  <div className="ourwork_modal_right_header_left">
                    <Avatar />
                    <span>
                      <h6>Fashion Invogue</h6>
                      <p>Director</p>
                    </span>
                  </div>
                  <div className="ourwork_modal_right_header_right">
                    <Avatar />
                  </div>
                </div>
                <div className="ourwork_modal_right_discription">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="ourwork_modal_right_discription_star">
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                  </div>
                  <div className="ourwork_modal_right_header_img_slider">
                    <Carousel
                      autoPlay="true"
                      infiniteLoop="true"
                      emulateTouch={false}
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <img
                        src={img26}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img27}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img28}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />{" "}
                      <img
                        src={img29}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img30}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                      <img
                        src={img31}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img"
                        alt="banner"
                      />
                    </Carousel>
                    {/* <AliceCarousel className='alice_modal' infinite='true'  autoPlay='true' mouseTracking='true' items={items}  responsive={responsive}/> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {logo && (
        <div
          className="ourwork_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="ourwork_content_one" onClick={handleOpen}>
              <img src={img2} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={handleOpen}>
              <img src={img3} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div>
            <div className="ourwork_content_three" onClick={handleOpen}>
              <img src={img4} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={handleOpen}>
              <img src={img5} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_view_More">
            <Button url="/graphicDesign">View More</Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="moadl_ourwork"
          >
            <div className="ourwork_modal slide-fwd-center">
              <div className="ourwork_modal_left">
                <img src={img3}  alt="banner"/>
              </div>
              <div className="ourwork_modal_right">
                <div className="ourwork_modal_right_header">
                  <div className="ourwork_modal_right_header_left">
                    <Avatar />
                    <span>
                      <h6>Fashion Invogue</h6>
                      <p>Director</p>
                    </span>
                  </div>
                  <div className="ourwork_modal_right_header_right">
                    <Avatar />
                  </div>
                </div>
                <div className="ourwork_modal_right_discription">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="ourwork_modal_right_discription_star">
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                  </div>
                  <div className="ourwork_modal_right_header_img_slider">
                    <Carousel
                      autoPlay="true"
                      infiniteLoop="true"
                      emulateTouch={false}
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <img
                        src={img2}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />

                      <img
                        src={img3}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />

                      <img
                        src={img4}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />
                    </Carousel>
                    {/* <AliceCarousel className='alice_modal' infinite='true'  autoPlay='true' mouseTracking='true' items={items}  responsive={responsive}/> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {reels && (
        <div
          className="ourwork_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="ourwork_content_one" onClick={handleOpen}>
              <img src={img2} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_two" onClick={handleOpen}>
              <img src={img3} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div>
            <div className="ourwork_content_three" onClick={handleOpen}>
              <img src={img4} loading="lazy"  alt="banner"/>
            </div>
            <div className="ourwork_content_four" onClick={handleOpen}>
              <img src={img5} loading="lazy"  alt="banner"/>
            </div>
          </div>
          <div className="ourwork_content_view_More">
            <Button url="/graphicDesign">View More</Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="moadl_ourwork"
          >
            <div className="ourwork_modal slide-fwd-center">
              <div className="ourwork_modal_left">
                <img src={img3}  alt="banner"/>
              </div>
              <div className="ourwork_modal_right">
                <div className="ourwork_modal_right_header">
                  <div className="ourwork_modal_right_header_left">
                    <Avatar />
                    <span>
                      <h6>Fashion Invogue</h6>
                      <p>Director</p>
                    </span>
                  </div>
                  <div className="ourwork_modal_right_header_right">
                    <Avatar />
                  </div>
                </div>
                <div className="ourwork_modal_right_discription">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="ourwork_modal_right_discription_star">
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                    <Star style={{ color: "gold" }} />
                  </div>
                  <div className="ourwork_modal_right_header_img_slider">
                    <Carousel
                      autoPlay="true"
                      infiniteLoop="true"
                      emulateTouch={false}
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <img
                        src={img2}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />

                      <img
                        src={img3}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />

                      <img
                        src={img4}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="alice_img" loading="lazy"
                        alt="banner"
                      />
                    </Carousel>
                    {/* <AliceCarousel className='alice_modal' infinite='true'  autoPlay='true' mouseTracking='true' items={items}  responsive={responsive}/> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      <Banner img={img6} data-aos="fade-up" data-aos-duration="1000" />
      <div
        className="ourwork_content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <div className="ourwork_content_one">
            <img src={img7} loading="lazy"  alt="banner"/>
          </div>
          <div className="ourwork_content_two">
            <img src={img8} loading="lazy"  alt="banner"/>
          </div>
        </div>
        <div>
          <div className="ourwork_content_three">
            <img src={img9} loading="lazy"  alt="banner"/>
          </div>
          <div className="ourwork_content_four">
            <img src={img10} loading="lazy"  alt="banner"/>
          </div>
        </div>
      </div>
      <Button url="/graphicDesign">View More</Button>
      <div className="ourwork_logo" data-aos="fade-up" data-aos-duration="2000">
        <img src={img11} loading="lazy"  alt="banner"/>
        <img src={img12} loading="lazy"  alt="banner"/>
        <img src={img13} loading="lazy"  alt="banner"/>
        <img src={img14} loading="lazy"  alt="banner"/>
        <img src={img15} loading="lazy"  alt="banner"/>
      </div>
      <Button url="/graphicDesign">View More</Button>
      <Banner img={img16} />
      <div
        className="ourwork_content_small"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={img17} loading="lazy"  alt="banner"/>
        <img src={img18} loading="lazy"  alt="banner"/>
        <img src={img19} loading="lazy"  alt="banner"/>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default OurWork;
