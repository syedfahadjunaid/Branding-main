import React from 'react'
import './WebCard2.css'
import { Link } from 'react-router-dom'
import img1 from'../../src/images/WEBSITE 360/Mask group.png'
import img2 from'../../src/images/WEBSITE 360 (2)/Mask group1.png'
import { ArrowForward } from '@mui/icons-material'
import { useState } from 'react'
import { useEffect } from 'react'
function WebCard2({index}) {
  // console.log(index,"web Card 2")
  const [scale,setScale]=useState(false)
  useEffect(()=>{
    if(index===0){
      setScale(true)
    }
    else{
      setScale(false)
    }
  },[index])

  return (
    <div className='webcard2' style={{transform:scale?'scale(1.09)':'',backgroundColor:scale?'#344f96':""}}>
        <div className='webcard2_img'>
          <span>
            <img src={img1} className='without_hover' alt='webcard'/>
            <img src={img2} className='with_hover' alt='webcard'/>
            </span>
            <h6 style={{color:scale?'#fff':""}}>Web Desgin</h6>
        </div>
        <div className='webcard2_details'>
            <p style={{color:scale?'#fff':""}}>
            Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life.. We design websites that keep you ahead  of competition while leaving lasting impression...
          

           
            <Link className='webcard2_link'to='/webdesign'style={{color:scale?'#fff':""}} >Read More <span className='webcard2_link_arrow'><ArrowForward/></span></Link> 
            
            </p>
             {/* <Truncate lines={3} ellipsis={<span>... <Link to='/'>Read more</Link></span>}>
                Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life
            </Truncate> */}
           
        </div>
    </div>
  )
}

export default WebCard2