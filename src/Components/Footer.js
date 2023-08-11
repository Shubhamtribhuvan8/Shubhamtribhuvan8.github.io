import React from "react";
import {GiClover} from "react-icons/gi"
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
        <div style={{display:"flex",gap:"5px",justifyContent:"center",margin:"0"}}>
          <h3>Designed and Developed by Shubham Tribhuvan<GiClover/></h3>
          <h3>Copyright © {year}</h3>
          </div>
    </>
  );
}

export default Footer;
