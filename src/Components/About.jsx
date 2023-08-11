import React from "react";
import image1 from './Education/csmss.jpg'
import image2 from './Education/vp.png'
import image3 from './Education/zp.jpg'
import './Education.css';
function About() {
  let m={padding:" 0px 0px 0px 87px"};
  let csmss={lineHeight:"30px"};
  return (
    // About section : id="about" class="about section"
    <div id="about" class="about section">
      <h1 style={{display:"flex",justifyContent:"center",marginTop:"4%",font: "19px/30px Montserrat,Montserrat,sans-serif",fontSize: "40px"}}>EDUCATION</h1>
      <div style={csmss}>
      <img src={image1} alt="csmss" width={"74px"} style={{borderRadius:"50%"}}/>
      <h2 style={{margin:"0px"}}>Chh.Shau College Of Engineering Auranagabad</h2>
      <h3 style={{margin:"0px"}}> Bachelor of Engineering in Civil Engineering</h3>
      <p style={{margin:"0px"}}>August 2016 - December 2020</p>
      </div>
        <p style={{borderBottom: "4px solid hsla(0,0%,82.7%,.397)"}} className="LineBorder"></p>
      <div style={csmss}>
      <img src={image2} alt="csmss" width={"74px"} style={{borderRadius:"50%"}}/>
      <h2 style={{margin:"0px"}}>Vinaykrao Patil Mahavidhyalaya Vaijapur,Aurangabad</h2>
      <h3 style={{margin:"0px"}}>Science</h3>
      <p style={{margin:"0px"}}>Jun 2014 - May 2016</p>
      </div>
      <p style={{borderBottom: "4px solid hsla(0,0%,82.7%,.397)"}} className="LineBorder"></p>
      <div style={csmss}>
      <img src={image3} alt="csmss" width={"74px"} style={{borderRadius:"50%"}}/>
      <h2 style={{margin:"0px"}}>Anant Vidhyalaya Janephal,Auranagabad</h2>
      <h3 style={{margin:"0px"}}>Science</h3>
      <p style={{margin:"0px"}}>Jun 2012 - May 2014</p>
      </div>
      <p style={{borderBottom: "4px solid hsla(0,0%,82.7%,.397)"}} className="LineBorder"></p>
    </div>
  );
}
export default About;
