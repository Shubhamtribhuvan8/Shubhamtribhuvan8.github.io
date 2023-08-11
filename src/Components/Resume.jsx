import React from 'react';
import '../App.css';
import { FcDocument } from "react-icons/fc";
import Resume1 from "./Resume/Shubham_Tribhuvan_Resume.pdf"
const Resume = () => {
const handleClick = (id) => {
const link = document.getElementById(id);
link.setAttribute('target', '_blank');
link.setAttribute('download', Resume1);
link.click();
};
return (
<div className="Button1">
<button id="resume-button-1" onClick={() => handleClick('resume-link-1')}>
View Resume <FcDocument size={17}/>
<a id="resume-link-1" href="https://drive.google.com/file/d/1spNqQeWCGWVklxQt972uUi8ZV_eg-bVa/view?usp=share_link"></a>
</button>
{/* <button id="resume-button-2">
Explore Project
<a id="resume-link-2" href="#projects"></a>
</button> */}
  {/* Media queries for small screens */}
  <style jsx>{`
    @media only screen and (max-width: 768px) {
      .Button1 {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      button {
        margin: 10px;
        padding: 10px;
        width: 80%;
      }
    }
  `}</style>
</div>

);
};

export default Resume;