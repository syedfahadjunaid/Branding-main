import React, { useEffect, useState } from 'react'
import './WebCard4.css'
import { Link } from 'react-router-dom'
import img1 from'../../src/images/WEBSITE 360/Mask group-2.png'
import img2 from'../../src/images/WEBSITE 360 (2)/Mask group-5.png'
import { ArrowForward } from '@mui/icons-material'
function WebCard4({index}) {
  // console.log(index,"web Card 3")
  const [scale,setScale]=useState(false)
  useEffect(()=>{
    if(index===2){
      setScale(true)
    }
    else{
      setScale(false)
    }
  },[index])
  return (
    <div className='webcard4' style={{transform:scale?'scale(1.09)':'',backgroundColor:scale?'#f6c427':""}}>
        <div className='webcard4_img'>
          <span>
            <img src={img1} className='without_hover' alt='webcard'/>
            <img src={img2} className='with_hover' alt='webcard'/>
            </span>
            <h6 style={{color:scale?'#fff':""}}>Graphic design</h6>
        </div>
        <div className='webcard4_details'>
            <p style={{color:scale?'#fff':""}}>
            From logo designing to marketing collaterals, and branding materials to social media graphics, our designers understand the needs of clients and design graphics that align with their marketing goals and brand identity...
            &nbsp; 
          

           
            <Link className='webcard4_link'to='/grapgicdesign' style={{color:scale?'#fff':""}}>Read More <span className='webcard2_link_arrow'><ArrowForward/></span></Link> 
            
            </p>
             {/* <Truncate lines={3} ellipsis={<span>... <Link to='/'>Read more</Link></span>}>
                Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life
            </Truncate> */}
           
        </div>
    </div>
  )
}

export default WebCard4