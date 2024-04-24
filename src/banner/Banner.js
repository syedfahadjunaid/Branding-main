import React from 'react'
import './Banner.css'

function Banner({img}) {

  return (
    <div className='banner'>
      <img src={img} alt="" />
    </div>
  )
  // style={{backgroundImage:`url(${img})`}}
}

export default Banner
