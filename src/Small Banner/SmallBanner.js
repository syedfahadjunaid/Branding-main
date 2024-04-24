import React from 'react'
import './SmallBanner.css'
function SmallBanner({img,bg,width}) {
  return (
    <div className='smallbanner' style={{backgroundColor:`${bg}`,width:`${width}`}}>
      <img src={img} alt="" loading="lazy"/>
    </div>
  )
}

export default SmallBanner
