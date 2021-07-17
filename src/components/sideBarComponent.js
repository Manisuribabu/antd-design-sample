import React from "react";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";


const SideBarComponent = (props) => {
  return (
    <>
      <div className="icons">
        <div className="fle">
          <HomeOutlined onClick={() => props.handleClick("home")} />   
           <div className="text" >Home</div>    
        </div>
        <div  className="fle">
          <FileTextOutlined onClick={() => props.handleClick("report")} />
          <div className="text">Reports</div>
        </div>
      </div>
    </>
  );
};
export default SideBarComponent;
