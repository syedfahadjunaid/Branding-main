import React, { useEffect, useState } from 'react'
import './Webcard7.css'
import { Link } from 'react-router-dom'
import img1 from'../../src/images/WEBSITE 360/Mask group-3.png'
import img2 from'../../src/images/WEBSITE 360 (2)/Mask group-2.png'
import { ArrowForward } from '@mui/icons-material'
function WebCard7({index}) {
  // console.log(index,"web Card 6")
  const [scale,setScale]=useState(false)
  useEffect(()=>{
    if(index===5){
      setScale(true)
    }
    else{
      setScale(false)
    }
  },[index])
  return (
    <div className='webcard7' style={{transform:scale?'scale(1.09)':'',backgroundColor:scale?'#779ff1':""}}>
        <div className='webcard7_img'>
          <span>
            <img src={img1} className='without_hover' alt='webcard'/>
            <img src={img2} className='with_hover' alt='webcard'/>
            </span>
            <h6 style={{color:scale?'#fff':""}}>Content Marketing</h6>
        </div>
        <div className='webcard7_details'>
            <p style={{color:scale?'#fff':""}}>
            We at Branding 360 aim to design content marketing strategies that resonate with targeted audiences and help businesses drive their brand forward. We are equipped with content experts specializing in developing...
            &nbsp; 
          

           
            <Link className='webcard7_link'to='/contentmarketing' style={{color:scale?'#fff':""}}>Read More <span className='webcard2_link_arrow'><ArrowForward/></span></Link> 
            
            </p>
             {/* <Truncate lines={3} ellipsis={<span>... <Link to='/'>Read more</Link></span>}>
                Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life
            </Truncate> */}
           
        </div>
    </div>
  )
}

export default WebCard7