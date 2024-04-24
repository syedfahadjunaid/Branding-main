import React from "react";
import "./WebCard1.css";

function WebCard1({title,discription,btn,link,img,setOpen1}) {
  
  
  return (
    <div className="webcard1" style={{cursor:'pointer'}}>
      {img && <img className="webcard_img" src={img} alt='webcard'/>}
      <div className="webcard_details1" >
      <h6>{title}</h6>
      <p >
       {discription}
      </p>
      
   
      </div>
      
      </div>
  );
}

export default WebCard1;
