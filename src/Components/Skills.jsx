// import React from 'react'
// import image1 from './SkillImage/java.png';
// import image2 from './SkillImage/html-5.png';
// import image3 from './SkillImage/css-3.png';
// import image4 from './SkillImage/bootstrap.png';
// import image5 from './SkillImage/js.png';
// import image6 from './SkillImage/react.png';
// import image7 from './SkillImage/nodejs.png';
// import image8 from './SkillImage/github.png';
// import '../App.css';
// // <h1 className="zoom" style={{margin:"0"}}>   Hi,</h1>
// export default function Skills() {
//     let styl1={
//       padding:"10px"
//     };
//   return (
//     <div id="skills" class="skills-card">
//      <h1 style={{display:"flex",justifyContent:"center",marginTop:"4%",font: "19px/30px Montserrat,Montserrat,sans-serif",fontSize: "40px"}}>SKILLS</h1>
//      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",lineHeight: "100px"}}>
//             <div class="skills-card-name">
//                 <h2 style={styl1}> Java <img src={image1} alt="image" class="skills-card-img" style={{width:"52px" }} /></h2>
//                 <h2 style={styl1}> HTML <img src={image2} alt="image"  style={{width:"52px"}} /></h2>
//                 <h2 style={styl1}> CSS <img src={image3} alt="image" style={{width:"52px"}} /></h2>
//                 <h2 style={styl1}> BOOSTRAP <img src={image4} alt="image"  style={{width:"52px"}}/></h2>
//             </div>
//             <div >
//                 <h2 style={styl1}> JavaScript <img src={image5} alt="image"  style={{width:"52px"}} /></h2>
//                 <h2 style={styl1}> React <img src={image6} alt="image" style={{width:"52px"}} /></h2>
//                 <h2 style={styl1}> Node.js <img src={image7} alt="image"  style={{width:"52px"}} /></h2>
//                 <h2 style={styl1}> GitHub <img src={image8} alt="image" style={{width:"52px"}}/></h2>
//             </div>
//      </div>
//     </div>
//   )
// }import React from 'react';
import Tilt from 'react-parallax-tilt'
import image1 from './SkillImage/java.png';
import image2 from './SkillImage/html-5.png';
import image3 from './SkillImage/css-3.png';
import image4 from './SkillImage/bootstrap.png';
import image5 from './SkillImage/js.png';
import image6 from './SkillImage/react.png';
import image7 from './SkillImage/nodejs.png';
import image8 from './SkillImage/github.png';
import image9 from './SkillImage/express.png';
import image10 from './SkillImage/Mangodb.svg';
import image11 from './SkillImage/redux.png';
import image12 from './SkillImage/chakra.png';
import image13 from "./SkillImage/vuejs.png"
import image14 from "./SkillImage/nuxtjs.png"
import image15 from "./SkillImage/nestjs.png"
import image16 from "./SkillImage/nextjs.png"
import '../App.css';

export default function Skills() {
  let styl1={
    padding:"10px"
  };
  return (
    <div id="skills" className="skills-card">
      <h1 style={{display:"flex",justifyContent:"center",marginTop:"4%",font: "19px/30px Montserrat,Montserrat,sans-serif",fontSize: "40px"}}>SKILLS</h1>
      <div className="skills-card-content">
        <div className="skills-card-name">
          <Tilt>
          <h2 style={styl1}> <img src={image1} alt="image" className="skills-card-img" style={{width:"52px"}} /> Java </h2>
          <h2 style={styl1}> <img src={image2} alt="image" className="skills-card-img" style={{width:"52px"}} /> HTML </h2>
          <h2 style={styl1}> <img src={image3} alt="image" className="skills-card-img" style={{width:"52px"}} /> CSS </h2>
          <h2 style={styl1}> <img src={image4} alt="image" className="skills-card-img" style={{width:"52px"}} /> Bootstrap </h2>
          </Tilt>
        </div>
        <div className="skills-card-name">
          <Tilt>
          <h2 style={styl1}> <img src={image5} alt="image" className="skills-card-img" style={{width:"52px"}} /> JavaScript </h2>
          <h2 style={styl1}> <img src={image6} alt="image" className="skills-card-img" style={{width:"52px"}} /> ReactJS </h2>
          <h2 style={styl1}> <img src={image7} alt="image" className="skills-card-img" style={{width:"52px"}} /> NodeJS </h2>
          <h2 style={styl1}> <img src={image8} alt="image" className="skills-card-img" style={{width:"52px"}} /> GitHub </h2>
          </Tilt>
        </div>
        <div className="skills-card-name">
          <Tilt>
          <h2 style={styl1}> <img src={image13} alt="image" className="skills-card-img" style={{width:"52px"}} /> VueJS </h2>
          <h2 style={styl1}> <img src={image14} alt="image" className="skills-card-img" style={{width:"52px"}} /> NuxtJS </h2>
          <h2 style={styl1}> <img src={image15} alt="image" className="skills-card-img" style={{width:"52px"}} /> NestJS </h2>
          <h2 style={styl1}> <img src={image16} alt="image" className="skills-card-img" style={{width:"52px"}} /> NextJs </h2>
          </Tilt>
        </div>S
        <div className="skills-card-name">
          <Tilt>
          <h2 style={styl1}> <img src={image9} alt="image" className="skills-card-img" style={{width:"52px"}} /> Express </h2>
          <h2 style={styl1}> <img src={image10} alt="image" className="skills-card-img" style={{width:"52px"}} /> MongoDB</h2>
          <h2 style={styl1}> <img src={image11} alt="image" className="skills-card-img" style={{width:"52px"}} /> Redux </h2>
          <h2 style={styl1}> <img src={image12} alt="image" className="skills-card-img" style={{width:"52px"}} /> Chakra UI </h2>
          </Tilt>
        </div>
      </div>
      <style jsx>{`
        .skills-card-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          line-height: 90px;
        }

        .skills-card-name {
          // display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // margin-top: 2rem;
        }

        @media screen and (max-width: 768px) {
          .skills-card-name {
            margin-top: 0;
          }
        }

        @media screen and (max-width: 480px) {
          .skills-card-img {
            width: 30px;
          }

          .skills-card-name {
            margin-top: 0;
          }

          h1 {
            font-size: 30px;
          }

          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
