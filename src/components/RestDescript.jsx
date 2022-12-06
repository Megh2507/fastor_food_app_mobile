import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/restdescript.css";
import { CiPercent } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import logoimg from "./fastor_logo.png"
import Draggable from 'react-draggable';
function RestDescript() {
  return (
    <div className="descript-bod">
      <img className="mainimg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40ll1pJeyKS6Hl4WTKf2673viCQPiZw3wcPU4SSuIDEYx6GaeCw281hcZmZOau7WVXo4&usqp=CAU"
        alt=""
      />
      <Draggable>
    <div className="db">
        <img src={logoimg} alt="" />
    </div>
</Draggable>
      <div className="descript-w">
        <div className="dwf">
          <div className="dwff">
            <h1>Lazy Bear</h1>
            <h4>Connaught Place. New Delhi</h4>
            <div className="ol">
              <CiPercent size={30} />
              <h4>4 Offers Trending</h4>
            </div>
          </div>
          <div className="dwfs">
            <AiOutlineStar size={20} />
            <h5>4.5</h5>
          </div>
        </div>
        <div >
          <h3 style={{fontWeight:"400",color:"gray"}}>
            Our delicate vanilla cake swirled with chocolate and filled with
            mocha chocolate chip cream and a layer of dark chocolate ganache
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RestDescript;
