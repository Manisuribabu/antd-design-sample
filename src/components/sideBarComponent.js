import React from "react";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";


const SideBarComponent = (props) => {
  return (
    <>
      <div className="icons">
        <spn>
          <HomeOutlined onClick={() => props.handleClick("home")} />
        </spn>
        <spn>
          <FileTextOutlined onClick={() => props.handleClick("report")} />
        </spn>
      </div>
    </>
  );
};
export default SideBarComponent;
