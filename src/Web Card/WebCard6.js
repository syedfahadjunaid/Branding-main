import React, { useEffect, useState } from 'react'
import './WebCard6.css'
import { Link } from 'react-router-dom'
import img1 from'../../src/images/WEBSITE 360/Mask group-5.png'
import img2 from'../../src/images/WEBSITE 360 (2)/Mask group-4.png'
import { ArrowForward } from '@mui/icons-material'
function WebCard6({index}) {
  // console.log(index,"web Card 5")
  const [scale,setScale]=useState(false)
  useEffect(()=>{
    if(index===4){
      setScale(true)
    }
    else{
      setScale(false)
    }
  },[index])
  return (
    <div className='webcard6' style={{transform:scale?'scale(1.09)':'',backgroundColor:scale?'#a669f7':""}}>
        <div className='webcard6_img'>
          <span>
            <img src={img1} className='without_hover' alt='webcard'/>
            <img src={img2} className='with_hover' alt='webcard'/>
            </span>
            <h6 style={{color:scale?'#fff':""}}>PPC</h6>
        </div>
        <div className='webcard6_details'>
            <p style={{color:scale?'#fff':""}}>
            The online marketing tides are shifting rapidly and companies are looking for effective and quick ways to reach their targeted audiences and display their brands in front of high-converting consumers. Increase your  visibility...
            &nbsp; 
          

           
            <Link className='webcard6_link'to='/payperclick' style={{color:scale?'#fff':""}} >Read More <span className='webcard2_link_arrow'><ArrowForward/></span></Link> 
            
            </p>
             {/* <Truncate lines={3} ellipsis={<span>... <Link to='/'>Read more</Link></span>}>
                Whether you need a static website or a complex ecommerce, dynamic platform, we at Branding 360 specializes in bringing your vision to life
            </Truncate> */}
           
        </div>
    </div>
  )
}

export default WebCard6