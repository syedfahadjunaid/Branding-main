import React from 'react'
import './CaseStudyCardLarge.css'
import cardbanner from "../../images/image 122.jpg";
import { Link } from 'react-router-dom';
function CaseStudyCardLarge({color,img,textcolor}) {
  return (
    <div className='casestudycardlarge' style={{background:`${color}`}}>
       <img src={img?img:cardbanner} alt="" />
        <h5 style={{color:`${textcolor}`}}>WebSite</h5>
        <div className="casestudypage_banner_card_text">
          <div className="casestudypage_banner_card_text_left">
            <h6 style={{color:`${textcolor}`}}>
              How to make a website look more attractive with illustrations.
            </h6>
            <p style={{color:`${textcolor}`}}>Lorem ipsum dolor sit amet, consec tetur adipis
cing elit, sed do eiusmod.</p>
          </div>
          <div className="casestudypage_banner_card_text_right">
            <Link to='#' className='casestudypage_banner_card_text_right_link'>Read More</Link>
          </div>
        </div>
    </div>
  )
}

export default CaseStudyCardLarge
