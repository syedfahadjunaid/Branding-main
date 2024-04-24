import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";
import img2 from "../../images/image 12.jpg";
import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
// import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function CaseStudy() {
  // const handleDragStart = (e) => e.preventDefault();

  const items = [
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
    />,
    <CaseStudyCard
      img={img2}
      margin="10px"
      subDic="Design, Illustrations, UI/UX"
      dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
      titel="How to make a website
look more attractive with
illustrations."
      read="Read More"
      link="/casestudy/id"
      padding_top="20px"
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
  // const [index, setindex] = useState(0);
  // const forwordHandle = () => {
  //   setindex(index === 3 ? index : index + 1);
  // };
  // const backwordHandle = () => {
  //   setindex(index === 0 ? index : index - 1);
  // };
  // useEffect(() => {
  //   // console.log(index);
  // }, [index]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="casestudy" data-aos="fade-up" data-aos-duration="1000">
      <div className="casestudy_header">
        <h5>Case Study</h5>
        <Link className="casestudy_header_link " to="/casestudy">
          View More
        </Link>
      </div>

      <div className="casestudy_cards .slide-in-fwd-center">
        {/* <CaseStudyCard
          img={img1}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          titel="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img2}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          titel="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img3}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          titel="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        />
        <CaseStudyCard
          img={img1}
          margin="10px"
          subDic="Design, Illustrations, UI/UX"
          dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
          titel="How to make a website
look more attractive with
illustrations."
          read="Read More"
          link="/casestudy/id"
          padding_top="20px"
        /> */}
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>

      {/* {index === 1 && (
        <motion.div className="casestudy_cards .slide-in-fwd-center"
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:0.2}}>
          <CaseStudyCard
            img={img2}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img3}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
                  <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
        </motion.div>
      )}{" "}
      {index === 2 && (
        <motion.div className="casestudy_cards .slide-in-fwd-center"
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:0.2}}>
          <CaseStudyCard
            img={img3}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img2}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
                  <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
        </motion.div>
      )}{" "}
      {index === 3 && (
        <motion.div className="casestudy_cards .slide-in-fwd-center"
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:0.2}}>
          <CaseStudyCard
            img={img2}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img3}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
          <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />        <CaseStudyCard
            img={img1}
            margin="10px"
            subDic="Design, Illustrations, UI/UX"
            dic="Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod."
            titel="How to make a website
look more attractive with
illustrations."
            read="Read More"
            link="/casestudy/id"
            padding_top="20px"
          />
        </motion.div>
      )} */}
      {/* <div className="casestudy_button">
        <ArrowCircleLeft
          className={
            index > 0
              ? "casestudy_button_left casestudy_button_left_start"
              : "casestudy_button_left"
          }
          onClick={backwordHandle}
        />
        <ArrowCircleRight
          className={
            index === 3
              ? "casestudy_button_right casestudy_button_left_end"
              : "casestudy_button_right"
          }
          onClick={forwordHandle}
        />
      </div> */}
    </div>
  );
}

export default CaseStudy;
