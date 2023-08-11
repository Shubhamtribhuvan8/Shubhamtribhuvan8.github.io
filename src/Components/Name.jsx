import React from "react";
import '../App.css';
import Tilt from 'react-parallax-tilt'
import { HiCursorClick } from "react-icons/hi";
export default function Name() {
  return (
    <div id="user-detail-name">
        <Tilt><h1 className="zoom" style={{margin:"0"}}>Hi,<HiCursorClick size={30}/></h1></Tilt> 
   <h1 style={{margin:"0"}}>I'm Shubham Tribhuvan</h1>
      <h1 style={{margin:"0"}}>Full Stack Web Developer</h1>
      <h1 style={{margin:"0"}}>From Aurangabad, Maharashtra</h1>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          #user-detail-name {
            text-align: center;
          }
          h1 {
            font-size: 24px;
            line-height: 32px;
          }
        }

        @media only screen and (max-width: 480px) {
          h1 {
            font-size: 20px;
            line-height: 28px;
          }
        }
      `}</style>
    </div>
  );
}
