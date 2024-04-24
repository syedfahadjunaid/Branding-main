import React from "react";
import "./WebCard.css";

function WebCard({title,discription,btn,link,img}) {

  


  return (
    <div className="webcard" style={{cursor:'pointer'}}>
      {/* <div className="webcard_"></div> */}
      {img && <img className="webcard_img" src={img} alt='webcard'/>}
      <div className="webcard_details" >
      <h6>{title}</h6>
      <p >
       {discription}
      </p>
      {/* {btn &&
      //  <Link className="webcard_link" to={link}>{btn}<ArrowCircleRight className="webcard_link_arrow"/></Link>
       <span onClick={()=>history(`${link}`)}>{btn} <ArrowCircleRight className="webcard_link_arrow"/></span>
       } */}
   
      </div>
    
      </div>
  );
}

export default WebCard;
