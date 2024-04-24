import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
function Button({children,type,bg,cl,url}) {
  return (
   <Link to={url} className='button' style={{color:`${cl?cl:'white'}`,backgroundColor:`${bg?bg:'#61B946'}`}} type={type?type:'button'}>{children}</Link>
  )
}

export default Button
