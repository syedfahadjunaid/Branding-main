import React, { useEffect, useState,useRef } from "react";
import "./Services.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import WebCard2 from "../../Web Card/WebCard2";
import WebCard3 from "../../Web Card/WebCard3";
import WebCard4 from "../../Web Card/WebCard4";
import WebCard5 from "../../Web Card/WebCard5";
import WebCard6 from "../../Web Card/WebCard6";
import WebCard7 from "../../Web Card/WebCard7";
import { useIsVisible } from "../useIsVisible";
function Services() {
//   const blink
// const [blink,setBlink]=useState(0)
// const blinkHandle=()=>{
//   setInterval(() => {
//     setBlink(blink+1)
//     console.log(blink)
//   }, 2000);
// }
// useEffect(()=>(
//   blinkHandle()
// ))
useEffect(() => {
  AOS.init();
}, [])
// const myRef=useRef()
const [index,setIndex]=useState(0)
const [visible,setVisible]=useState(false)
const setIndexHandle=()=>{
  if(index<6){
    setTimeout(() => {
      setIndex(index+1)
      
    }, 3000);
  }
  }
// useEffect(()=>{

// },[index])
// useEffect(()=>{
//   const observer=new newIntersectionObserver((entries)=>{
//     const entry=entries[0];
//     console.log('entry',entry)
//   })
//   observer.observer(myRef.current)
// },[])
const myRef=useRef();
const isVisible = useIsVisible(myRef);
useEffect(()=>{
if(isVisible ){
  // setIndex(0)
  setVisible(true)
  // setIndexHandle()
  // console.log(index)
  // console.log('coming from useefect')
}
else if(window.innerWidth<600){
  setVisible(false)
  setIndex(6)
}
else{
  setVisible(false)
}
},[isVisible])




  return (
    <div className="services" data-aos='fade-up' data-aos-duration='3000'>
      <div className="services_header">
        <h6>Services</h6>
        <p>Our 6 step process </p>
      </div>
  {visible && setIndexHandle()}
      <div className="services_cards progress-container" ref={myRef}>
     
        <span className="card_blink">
        {/* <WebCard
          img={img1}
          title="Web design"
          discription="Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life. We design websites that keep you ahead of competition while leaving lasting impression on audience’s minds.  "
          link="/webdevelopment"
          btn="Read More"
        /> */}
        <WebCard2 index={index===0?index:''}/>
        </span>
    
       <span className="card_blink" >
        <WebCard3 index={index===1?index:''}/>
        {/* <WebCard
          img={img2}
          title="Web Devlopment"
          discription="Gain complete control over your brand’s identity and budge the customers to the bottom of the sales funnel with Branding’s web development services. Get tailored web development services that amalgamate with your brand."
          link="/webdevelopment"
          btn="Read More"
        /> */}
        </span>
        <span className="card_blink">      
          {/* <WebCard
          img={img3}
          title="Graphic desgin"
          discription="From logo designing to marketing collaterals, and branding materials to social media graphics, our designers understand the needs of clients and design graphics that align with their marketing goals and brand identity. Graphics are not only functionally effective, but also visually appealing, helping brands to connect with targeted audiences easily.  "
          link="/grapgicdesign"
          btn="Read More"
        /> */}
        <WebCard4 index={index===2?index:''}/>
        </span>
<span className="card_blink">
        {/* <WebCard
          img={img4}
          title="Content Marketing"
          discription="We at Branding 360 aim to design content marketing strategies that resonate with targeted audiences and help businesses drive their brand forward. We are equipped with content experts specializing in developing high-quality, engaging and optimized content for social media platforms and search engines. It helps building brand awareness, increase authority within the niche and maximize leads and conversions. "
          link="/contentmarketing"
          btn="Read More"
        /> */}
        <WebCard5 index={index===3?index:''}/>
        </span>
        <span className="card_blink">
        {/* <WebCard
          img={img5}
          title="Digital Marketing"
          discription="Engage the target customers on the right platform at the right time with Branding 360 Neo Pvt. Ltd. The systematic approach ensures all digital marketing efforts deliver profitable and desired results. Leverage Branding’s digital marketing services and let professionals boost customer retention rates and acquisitions."
          link="/digitalmarketing"
          btn="Read More"
        /> */}
        <WebCard6 index={index===4?index:''}/>
        </span>
        <span className="card_blink">
        {/* <WebCard
          img={img6}
          title="PPC"
          discription="The online marketing tides are shifting rapidly and companies are looking for effective and quick ways to reach their targeted audiences and display their brands in front of high-converting consumers. Increase your visibility on search engines and social media and get instant results with Branding 360’s PPC and Display Advertising services. "
          link="/payperclick"
          btn="Read More"
        /> */}
        <WebCard7 index={index===5?index:''}/>
        </span>
      </div>
    </div>
  );
}

export default Services;
