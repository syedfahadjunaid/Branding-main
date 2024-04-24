import React from 'react'
import './CaseStudyCard.css'
// import img1 from '../../images/image 11.jpg'
import { Link } from 'react-router-dom'
function CaseStudyCard({img,subDic,title,dic,height,width,read,link,padding_top,margin}) {
  return (
    <div className='casestudycard' style={{height:`${height}`,width:`${width}`,paddingTop:`${padding_top}`}}>
      <img src={img} alt="banner" loading="lazy"/>
   <div className='casestudycard_info'>
   <p style={{marginTop:`${margin}`}}>{subDic}</p>
      <h6 style={{marginTop:`${margin}`}}>{title}</h6>
      <p style={{marginTop:`${margin}`}}>{dic}</p>
    {read &&  <Link className='casestudycard_link' to={link} style={{marginTop:`${padding_top}`}}>{read}</Link>}
   </div>
    </div>
  )
}

export default CaseStudyCard
