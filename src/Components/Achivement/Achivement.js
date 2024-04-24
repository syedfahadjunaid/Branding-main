import React, { useEffect, useState } from 'react'
import './Achivement.css'
import img1 from '../../images/Mask group-2.png'
import img2 from '../../images/Mask group-1.png'
import img3 from '../../images/Mask group-3.png'
import img4 from '../../images/Mask group.png'
import { useSpring,animated } from 'react-spring'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Achivement() {
  
  function Number({n}){
    const {number}=useSpring({
      from:{number:0},
      number:n,
      delay:300,
      
      
      config:{mass:1,tension:20,friction:10},
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
  }
  const [animate,setAnimate]=useState(false)
  useEffect(()=>{
    console.log(animate)
  })
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='achivement' data-aos='fade-up' data-aos-duration='3000'>
      <div className="card">
        <img src={img1} alt="" />
        <ScrollTrigger onEnter={()=>setAnimate(true)} onExit={()=>setAnimate(false)} >
          { animate &&  <strong style={{color:"#61B946",fontSize:'40px',fontWeight:'700'}}>
          
            <Number n={10}/>K+</strong>}
       
        </ScrollTrigger>
        <p>Projects</p>
      </div>
      <div className="card">
        <img src={img2} alt="" />
        <strong style={{color:"#61B946",fontSize:'40px',fontWeight:'700'}}><Number n={200}/>+</strong>
        <p>Clients</p>
      </div>
      <div className="card">
        <img src={img3} alt="" />
        <strong style={{color:"#61B946",fontSize:'40px',fontWeight:'700'}}><Number n={50}/>+</strong>
        <p>Awards</p>
      </div>
      <div className="card">
        <img src={img4} alt="" />
        <strong style={{color:"#61B946",fontSize:'40px',fontWeight:'700'}}><Number n={5}/>+</strong>
        <p>Years  Journy</p>
      </div>
    </div>
  )
}

export default Achivement
