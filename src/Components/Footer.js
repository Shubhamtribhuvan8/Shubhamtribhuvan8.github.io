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
          <a target="_blank" href="https://www.amazon.in/b?_encoding=UTF8&tag=1234507f8-21&linkCode=ur2&linkId=70b7f541cb9287446d35b144898798e0&camp=3638&creative=24630&node=1350387031">watches</a>
          <a target="_blank" href="https://www.amazon.in/deal/81beeabd?_encoding=UTF8&linkCode=r02&tag=1234507f8-21&linkId=ac43c9ada19bf78c8958b82cb22ada0b&ref_=ihub_rc_td_c_deals-promotions_81beeabd">Advertisements </a>
          </div>
    </>
  );
}

export default Footer;
